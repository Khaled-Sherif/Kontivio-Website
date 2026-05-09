import React from 'react';
import { Link } from 'react-router-dom';
import { KontivioLogo } from './KontivioLogo';

const cols = {
  Services: [
    { label: 'Customer Support', href: '/services/customer-support' },
    { label: 'Technology Solutions', href: '/services/technology' },
    { label: 'Business Development', href: '/services/business-development' },
    { label: 'Industries', href: '/industries' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/about/our-story' },
    { label: 'Board of Directors', href: '/about/board' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ],
  'Get Started': [
    { label: 'Get a Quote', href: '/contact' },
    { label: 'Book a Call', href: '/contact' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'contactus@kontivio.com', href: 'mailto:contactus@kontivio.com' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="k-footer">
      <div className="k-ft">
        <div>
          <div className="k-f-logo-wrap">
            <KontivioLogo size={28} textClass="k-f-logo-txt" />
          </div>
          <div className="k-f-desc">Customer support outsourcing built for brands that care about every interaction.</div>
          <div className="k-f-soc">
            <a href="#">in</a><a href="#">ig</a><a href="#">tw</a>
          </div>
        </div>
        {Object.entries(cols).map(([heading, links]) => (
          <div key={heading} className="k-f-col">
            <h4>{heading}</h4>
            <ul>
              {links.map((l) => (<li key={l.label}><Link to={l.href}>{l.label}</Link></li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="k-f-bottom">
        <span>© {new Date().getFullYear()} Kontivio. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  );
};

export default Footer;
