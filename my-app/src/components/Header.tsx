import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { KontivioLogo } from './KontivioLogo';
import { useI18n } from '../i18n';
import { LANGUAGES } from '../i18n/languages';
import type { Language } from '../i18n/languages';
import type { TranslationKey } from '../i18n/locales/en';

interface MegaItem {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  href: string;
  icon: React.ReactNode;
}

interface MegaColumn {
  headingKey: TranslationKey;
  items: MegaItem[];
}

interface NavLink {
  labelKey: TranslationKey;
  href: string;
  mega?: MegaColumn[];
}

const iconSupport = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const iconTech = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const iconBizdev = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const iconIndustries = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M3 7v14M21 11v10M9 9h.01M9 13h.01M9 17h.01M15 13h.01M15 17h.01M9 5h6v4l-3-2-3 2z" />
  </svg>
);
const iconPartners = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);
const iconAbout = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
const iconStory = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="3" width="14" height="18" rx="1" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="15" y2="11" />
  </svg>
);
const iconBoard = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const iconBlog = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const iconContact = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const navLinks: NavLink[] = [
  {
    labelKey: 'nav.services',
    href: '/services',
    mega: [
      {
        headingKey: 'mega.services.offer',
        items: [
          { titleKey: 'mega.services.support.title', descKey: 'mega.services.support.desc', href: '/services/customer-support', icon: iconSupport },
          { titleKey: 'mega.services.tech.title', descKey: 'mega.services.tech.desc', href: '/services/technology', icon: iconTech },
          { titleKey: 'mega.services.bizdev.title', descKey: 'mega.services.bizdev.desc', href: '/services/business-development', icon: iconBizdev },
        ],
      },
      {
        headingKey: 'mega.services.discover',
        items: [
          { titleKey: 'mega.services.industries.title', descKey: 'mega.services.industries.desc', href: '/industries', icon: iconIndustries },
          { titleKey: 'mega.services.partners.title', descKey: 'mega.services.partners.desc', href: '/services/technology-partners', icon: iconPartners },
        ],
      },
    ],
  },
  {
    labelKey: 'nav.about',
    href: '/about',
    mega: [
      {
        headingKey: 'mega.about.company',
        items: [
          { titleKey: 'mega.about.aboutUs.title', descKey: 'mega.about.aboutUs.desc', href: '/about', icon: iconAbout },
          { titleKey: 'mega.about.story.title', descKey: 'mega.about.story.desc', href: '/about/our-story', icon: iconStory },
          { titleKey: 'mega.about.board.title', descKey: 'mega.about.board.desc', href: '/about/board', icon: iconBoard },
        ],
      },
      {
        headingKey: 'mega.about.resources',
        items: [
          { titleKey: 'mega.about.blog.title', descKey: 'mega.about.blog.desc', href: '/blog', icon: iconBlog },
          { titleKey: 'mega.about.contact.title', descKey: 'mega.about.contact.desc', href: '/contact', icon: iconContact },
        ],
      },
    ],
  },
  { labelKey: 'nav.pricing', href: '/pricing' },
  { labelKey: 'nav.careers', href: '/careers' },
  { labelKey: 'nav.howItWorks', href: '/#how' },
];

export const Header: React.FC = () => {
  const { lang, setLang, t } = useI18n();
  const [openMega, setOpenMega] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const handleEnter = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMega(label);
  };
  const handleLeave = () => {
    closeTimer.current = window.setTimeout(() => setOpenMega(null), 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      {/* TOPBAR */}
      <div className="k-topbar">
        <div className="k-topbar-l">✉ {t('topbar.email')}</div>
        <div className="k-topbar-r">
          <a href="#" title="LinkedIn">in</a>
          <a href="#" title="Instagram">ig</a>
          <a href="#" title="Phone">☎</a>
        </div>
      </div>

      {/* NAV */}
      <nav className="k-nav">
        <Link to="/" className="k-logo-wrap">
          <KontivioLogo size={36} />
        </Link>

        <ul>
          {navLinks.map((link) => (
            <li
              key={link.labelKey}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.mega && handleEnter(link.labelKey)}
              onMouseLeave={handleLeave}
            >
              <Link to={link.href}>
                {t(link.labelKey)}
                {link.mega && <span className="k-caret">▾</span>}
              </Link>

              {link.mega && openMega === link.labelKey && (
                <div className="k-megamenu">
                  <div className="k-megamenu-grid">
                    {link.mega.map((col) => (
                      <div key={col.headingKey} className="k-megamenu-col">
                        <div className="k-megamenu-heading">{t(col.headingKey)}</div>
                        <ul className="k-megamenu-items">
                          {col.items.map((item) => (
                            <li key={item.href}>
                              <Link to={item.href} className="k-megamenu-item">
                                <span className="k-megamenu-ic">{item.icon}</span>
                                <span className="k-megamenu-text">
                                  <span className="k-megamenu-title">{t(item.titleKey)}</span>
                                  <span className="k-megamenu-desc">{t(item.descKey)}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="k-nav-r">
          <Link to="/contact">
            <button className="k-btn-contact">{t('nav.contactUs')}</button>
          </Link>
          <select
            className="k-lang-sel"
            value={lang}
            onChange={(e) => setLang(e.target.value as Language)}
            aria-label="Language"
          >
            {LANGUAGES.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </>
  );
};

export default Header;
