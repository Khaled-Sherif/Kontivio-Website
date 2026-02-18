import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'en' | 'de' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.careers': 'Careers',
    'nav.howItWorks': 'How It Works',
    'nav.getStarted': 'Get Started',
    
    // Services dropdown
    'services.customerSupport': 'Customer Support Solutions',
    'services.customerSupport.desc': '24/7 dedicated support teams',
    'services.technology': 'Technology Solutions',
    'services.technology.desc': 'CRM & technical support',
    'services.businessDev': 'Business Development',
    'services.businessDev.desc': 'Sales & growth strategies',
    
    // About dropdown
    'about.aboutUs': 'About Us',
    'about.aboutUs.desc': 'Our mission and values',
    'about.ourStory': 'Our Story',
    'about.ourStory.desc': 'How we got started',
    'about.techPartners': 'Technology Partners',
    'about.techPartners.desc': 'Our tech ecosystem',
    'about.board': 'Board of Directors',
    'about.board.desc': 'Leadership team',
    'about.blog': 'Blog',
    'about.blog.desc': 'Insights and updates',
    'about.contact': 'Contact Us',
    'about.contact.desc': 'Get in touch with us',
    
    // Common
    'common.contactUs': 'Contact Us',
    'common.getStarted': 'Get Started',
    'common.learnMore': 'Learn More',
    'common.scheduleDemo': 'Schedule a Demo',
  },
  de: {
    // Header
    'nav.services': 'Dienstleistungen',
    'nav.about': 'Über uns',
    'nav.pricing': 'Preise',
    'nav.careers': 'Karriere',
    'nav.howItWorks': 'Wie es funktioniert',
    'nav.getStarted': 'Loslegen',
    
    // Services dropdown
    'services.customerSupport': 'Kundensupport-Lösungen',
    'services.customerSupport.desc': '24/7 engagierte Support-Teams',
    'services.technology': 'Technologie-Lösungen',
    'services.technology.desc': 'CRM & technischer Support',
    'services.businessDev': 'Geschäftsentwicklung',
    'services.businessDev.desc': 'Vertriebs- & Wachstumsstrategien',
    
    // About dropdown
    'about.aboutUs': 'Über uns',
    'about.aboutUs.desc': 'Unsere Mission und Werte',
    'about.ourStory': 'Unsere Geschichte',
    'about.ourStory.desc': 'Wie wir angefangen haben',
    'about.techPartners': 'Technologie-Partner',
    'about.techPartners.desc': 'Unser Tech-Ökosystem',
    'about.board': 'Vorstand',
    'about.board.desc': 'Führungsteam',
    'about.blog': 'Blog',
    'about.blog.desc': 'Einblicke und Updates',
    'about.contact': 'Kontakt',
    'about.contact.desc': 'Nehmen Sie Kontakt auf',
    
    // Common
    'common.contactUs': 'Kontakt aufnehmen',
    'common.getStarted': 'Loslegen',
    'common.learnMore': 'Mehr erfahren',
    'common.scheduleDemo': 'Demo planen',
  },
  nl: {
    // Header
    'nav.services': 'Diensten',
    'nav.about': 'Over ons',
    'nav.pricing': 'Prijzen',
    'nav.careers': 'Carrières',
    'nav.howItWorks': 'Hoe het werkt',
    'nav.getStarted': 'Aan de slag',
    
    // Services dropdown
    'services.customerSupport': 'Klantenservice Oplossingen',
    'services.customerSupport.desc': '24/7 toegewijde support teams',
    'services.technology': 'Technologie Oplossingen',
    'services.technology.desc': 'CRM & technische ondersteuning',
    'services.businessDev': 'Bedrijfsontwikkeling',
    'services.businessDev.desc': 'Verkoop- & groeistrategieën',
    
    // About dropdown
    'about.aboutUs': 'Over ons',
    'about.aboutUs.desc': 'Onze missie en waarden',
    'about.ourStory': 'Ons verhaal',
    'about.ourStory.desc': 'Hoe we begonnen',
    'about.techPartners': 'Technologie Partners',
    'about.techPartners.desc': 'Ons tech ecosysteem',
    'about.board': 'Raad van Bestuur',
    'about.board.desc': 'Leiderschapsteam',
    'about.blog': 'Blog',
    'about.blog.desc': 'Inzichten en updates',
    'about.contact': 'Contact',
    'about.contact.desc': 'Neem contact op',
    
    // Common
    'common.contactUs': 'Neem contact op',
    'common.getStarted': 'Aan de slag',
    'common.learnMore': 'Meer informatie',
    'common.scheduleDemo': 'Plan een demo',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
