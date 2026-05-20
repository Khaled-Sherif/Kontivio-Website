import React from 'react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n';

export const BusinessDevelopment: React.FC = () => {
  const t = useT();
  return (
    <section className="k-guarantee" id="business-development">
      <div className="k-reveal" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
        <div className="k-eyebrow" style={{ color: '#6ef5f5', display: 'flex', justifyContent: 'center' }}>{t('bdp.eyebrow')}</div>
        <h2 className="k-sec-h" style={{ color: 'white' }}>{t('bdp.h1.line1')}<br />{t('bdp.h1.line2')}</h2>
        <p className="k-sec-sub" style={{ color: 'rgba(255,255,255,.5)', margin: '1rem auto 2rem' }}>
          {t('bdp.sub')}
        </p>
        <Link to="/services/business-development"><button className="k-btn-hp">{t('services.learnMore')} →</button></Link>
      </div>
    </section>
  );
};

export default BusinessDevelopment;
