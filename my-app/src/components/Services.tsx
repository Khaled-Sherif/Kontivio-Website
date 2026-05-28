import React from 'react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n';

export const Services: React.FC = () => {
  const t = useT();
  const services = [
    { title: t('services.liveChat.title'), desc: t('services.liveChat.desc'), path: '/services/customer-support', icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
    { title: t('services.voice.title'), desc: t('services.voice.desc'), path: '/services/customer-support', icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 5.55 5.55l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /> },
    { title: t('services.email.title'), desc: t('services.email.desc'), path: '/services/customer-support', icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" /></> },
    { title: t('services.social.title'), desc: t('services.social.desc'), path: '/services/customer-support', icon: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /></> },
    { title: t('services.ai.title'), desc: t('services.ai.desc'), path: '/services/technology', icon: <><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /></> },
    { title: t('services.analytics.title'), desc: t('services.analytics.desc'), path: '/services/technology', icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></> },
  ];
  return (
    <section className="k-section k-services" id="services">
      <div className="k-row k-reveal">
        <div>
          <div className="k-eyebrow">{t('services.eyebrow')}</div>
          <h2 className="k-sec-h">{t('services.h2.line1')}<br />{t('services.h2.line2')}</h2>
        </div>
        <p className="k-sec-sub">{t('services.sub')}</p>
      </div>
      <div className="k-svc-grid k-reveal">
        {services.map((s, i) => (
          <div key={i} className="k-svc">
            <div className="k-svc-ic"><svg viewBox="0 0 24 24">{s.icon}</svg></div>
            <div className="k-svc-t">{s.title}</div>
            <div className="k-svc-d">{s.desc}</div>
            <Link to={s.path} className="k-svc-lnk">{t('services.learnMore')} →</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
