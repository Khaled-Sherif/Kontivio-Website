// Save this as src/TestI18n.tsx temporarily and replace App.tsx import
// to verify the i18n system works on its own.
import { I18nProvider, useI18n } from './i18n';
import { LANGUAGES } from './i18n/languages';

function Inner() {
  const { lang, setLang, t } = useI18n();
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>i18n Diagnostic</h1>
      <p>Current language: <strong>{lang}</strong></p>
      <p>Translation test: <strong>{t('nav.services')}</strong></p>
      <p>Hero badge: <em>{t('hero.badge')}</em></p>

      <h2>Switch language:</h2>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            style={{
              padding: '0.5rem 1rem',
              background: lang === l.code ? '#00c8c8' : '#eee',
              color: lang === l.code ? 'white' : 'black',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            {l.label}
          </button>
        ))}
      </div>

      <h2 style={{ marginTop: '2rem' }}>If you see this page, i18n works!</h2>
      <p>Now you know the issue is in one of the other components.</p>
    </div>
  );
}

export default function TestI18n() {
  return (
    <I18nProvider>
      <Inner />
    </I18nProvider>
  );
}
