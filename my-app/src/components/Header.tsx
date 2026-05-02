import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { KontivioLogo } from './KontivioLogo';

const navLinks = [
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'About', href: '/about', dropdown: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Careers', href: '/careers' },
  { label: 'How It Works', href: '/#how' },
];

export const Header: React.FC = () => {
  const [language, setLanguage] = useState('English');

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
            <li key={link.label}>
              <Link to={link.href}>
                {link.label}
                {link.dropdown && <span className="k-caret">▾</span>}
              </Link>
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
