import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { KontivioLogo } from './KontivioLogo';

interface MegaItem {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}

interface MegaColumn {
  heading: string;
  items: MegaItem[];
}

interface NavLink {
  label: string;
  href: string;
  mega?: MegaColumn[];
}

// Reusable line icons — all use stroke="currentColor" and same viewBox
const Icon = {
  headset: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="9" y1="22" x2="9" y2="18" />
      <line x1="15" y1="22" x2="15" y2="18" />
      <line x1="8" y1="6" x2="10" y2="6" />
      <line x1="14" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="10" y2="10" />
      <line x1="14" y1="10" x2="16" y2="10" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

const navLinks: NavLink[] = [
  {
    label: 'Services',
    href: '/services',
    mega: [
      {
        heading: 'What We Offer',
        items: [
          {
            title: 'Customer Support Solutions',
            desc: '24/7 dedicated support across every channel',
            href: '/services/customer-support',
            icon: Icon.headset,
          },
          {
            title: 'Technology Solutions',
            desc: 'CRM integration, dashboards & AI tooling',
            href: '/services/technology',
            icon: Icon.monitor,
          },
          {
            title: 'Business Development',
            desc: 'Strategic CX consulting and growth',
            href: '/services/business-development',
            icon: Icon.trending,
          },
        ],
      },
      {
        heading: 'Discover',
        items: [
          {
            title: 'Industries We Serve',
            desc: 'E-commerce, SaaS, Healthcare, Hospitality & more',
            href: '/industries',
            icon: Icon.building,
          },
          {
            title: 'Technology Partners',
            desc: 'Salesforce, Zendesk, HubSpot and more',
            href: '/services/technology-partners',
            icon: Icon.globe,
          },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
    mega: [
      {
        heading: 'Company',
        items: [
          {
            title: 'About Us',
            desc: 'Our mission and values',
            href: '/about',
            icon: Icon.info,
          },
          {
            title: 'Our Story',
            desc: 'How we got started',
            href: '/about/our-story',
            icon: Icon.book,
          },
          {
            title: 'Board of Directors',
            desc: 'Our leadership team',
            href: '/about/board',
            icon: Icon.users,
          },
        ],
      },
      {
        heading: 'Resources',
        items: [
          {
            title: 'Blog',
            desc: 'Insights and updates',
            href: '/blog',
            icon: Icon.book,
          },
          {
            title: 'Contact Us',
            desc: 'Get in touch with us',
            href: '/contact',
            icon: Icon.message,
          },
        ],
      },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Careers', href: '/careers' },
  { label: 'How It Works', href: '/#how' },
];

export const Header: React.FC = () => {
  const [language, setLanguage] = useState('English');
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
        <div className="k-topbar-l">✉ contactus@kontivio.com</div>
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
              key={link.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.mega && handleEnter(link.label)}
              onMouseLeave={handleLeave}
            >
              <Link to={link.href}>
                {link.label}
                {link.mega && <span className="k-caret">▾</span>}
              </Link>

              {link.mega && openMega === link.label && (
                <div className="k-megamenu">
                  <div className="k-megamenu-grid">
                    {link.mega.map((col) => (
                      <div key={col.heading} className="k-megamenu-col">
                        <div className="k-megamenu-heading">{col.heading}</div>
                        <ul className="k-megamenu-items">
                          {col.items.map((item) => (
                            <li key={item.href}>
                              <Link to={item.href} className="k-megamenu-item">
                                <span className="k-megamenu-ic">{item.icon}</span>
                                <span className="k-megamenu-text">
                                  <span className="k-megamenu-title">{item.title}</span>
                                  <span className="k-megamenu-desc">{item.desc}</span>
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
            <button className="k-btn-contact">Contact Us</button>
          </Link>
          <select
            className="k-lang-sel"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="Language"
          >
            <option>English</option>
            <option>العربية</option>
            <option>Français</option>
          </select>
        </div>
      </nav>
    </>
  );
};

export default Header;
