import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Language, LANGUAGES, COUNTRY_TO_LANG } from './languages';
import en, { TranslationKey } from './locales/en';
import de from './locales/de';
import fr from './locales/fr';
import nl from './locales/nl';
import es from './locales/es';
import it from './locales/it';

const STORAGE_KEY = 'kontivio_lang';
const SUPPORTED: Language[] = LANGUAGES.map((l) => l.code);

const TRANSLATIONS: Record<Language, Record<TranslationKey, string>> = {
  en,
  de,
  fr,
  nl,
  es,
  it,
};

interface I18nContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
  isLoading: boolean;
}

// Default value that NEVER throws — prevents blank pages if a component
// uses the hook outside the provider
const defaultT = (key: TranslationKey, vars?: Record<string, string | number>): string => {
  const value = (en as Record<string, string>)[key];
  if (value === undefined) return key as string;
  if (!vars) return value;
  return value.replace(/\{(\w+)\}/g, (_, name) =>
    vars[name] !== undefined ? String(vars[name]) : `{${name}}`
  );
};

const I18nContext = createContext<I18nContextValue>({
  lang: 'en',
  setLang: () => {},
  t: defaultT,
  isLoading: false,
});

function interpolate(str: string, vars?: Record<string, string | number>): string {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, name) =>
    vars[name] !== undefined ? String(vars[name]) : `{${name}}`
  );
}

async function detectFromIP(): Promise<Language | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!response.ok) return null;
    const data = await response.json();
    const country: string | undefined = data?.country_code;
    if (country && COUNTRY_TO_LANG[country]) {
      return COUNTRY_TO_LANG[country];
    }
    return null;
  } catch {
    return null;
  }
}

function detectFromBrowser(): Language {
  if (typeof navigator === 'undefined') return 'en';
  const browser = navigator.language || (navigator as any).userLanguage || 'en';
  const code = browser.toLowerCase().split('-')[0];
  if (SUPPORTED.includes(code as Language)) {
    return code as Language;
  }
  return 'en';
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    let cancelled = false;

    async function detect() {
      // 1. Saved choice has highest priority
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED.includes(saved as Language)) {
          if (!cancelled) {
            setLangState(saved as Language);
            document.documentElement.lang = saved;
          }
          return;
        }
      } catch {
        // continue
      }

      // 2. Try IP geolocation
      const ipLang = await detectFromIP();
      if (cancelled) return;
      if (ipLang) {
        setLangState(ipLang);
        document.documentElement.lang = ipLang;
        return;
      }

      // 3. Fallback to browser language
      const browserLang = detectFromBrowser();
      if (cancelled) return;
      setLangState(browserLang);
      document.documentElement.lang = browserLang;
    }

    detect();
    return () => {
      cancelled = true;
    };
  }, []);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: TranslationKey, vars?: Record<string, string | number>) => {
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
      const value = (dict as Record<string, string>)[key];
      if (value !== undefined) {
        return interpolate(value, vars);
      }
      const fallback = (TRANSLATIONS.en as Record<string, string>)[key];
      if (fallback !== undefined) {
        return interpolate(fallback, vars);
      }
      return key as string;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t, isLoading: false }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextValue => useContext(I18nContext);
export const useT = () => useContext(I18nContext).t;
