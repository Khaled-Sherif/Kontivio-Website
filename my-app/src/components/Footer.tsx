import React from 'react';
import { Link } from 'react-router-dom';
import { KontivioLogo } from './KontivioLogo';
import { useT } from '../i18n';

export const Footer: React.FC = () => {
  const t = useT();
  const cols = {
    [t('footer.col.services')]: [
      { label: t('footer.link.customerSupport'), href: '/services/customer-support' },
      { label: t('footer.link.tech'), href: '/services/technology' },
      { label: t('footer.link.bizdev'), href: '/services/business-development' },
      { label: t('footer.link.industries'), href: '/industries' },
    ],
    [t('footer.col.company')]: [
      { label: t('footer.link.aboutUs'), href: '/about' },
      { label: t('footer.link.story'), href: '/about/our-story' },
      { label: t('footer.link.board'), href: '/about/board' },
      { label: t('footer.link.careers'), href: '/careers' },
      { label: t('footer.link.blog'), href: '/blog' },
    ],
    [t('footer.col.getStarted')]: [
      { label: t('footer.link.getStartedLink'), href: '/pricing/recommend' },
      { label: t('footer.link.scheduleCall'), href: '/contact?intent=schedule-call' },
      { label: t('footer.link.pricing'), href: '/pricing' },
      { label: 'contactus@kontivio.com', href: 'mailto:contactus@kontivio.com' },
    ],
  };
  return (
    <footer className="k-footer">
      <div className="k-ft">
        <div>
          <div className="k-f-logo-wrap">
            <KontivioLogo size={28} textClass="k-f-logo-txt" />
          </div>
          <div className="k-f-desc">{t('footer.desc')}</div>
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
        <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>
        <span>{t('footer.legal')}</span>
      </div>
    </footer>
  );
};

export default Footer;
