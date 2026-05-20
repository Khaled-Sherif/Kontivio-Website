import React from 'react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n';

export const CTA: React.FC = () => {
  const t = useT();
  return (
    <section className="k-cta-sec">
      <h2>{t('cta.h2.line1')}<br />{t('cta.h2.line2')}</h2>
      <p>{t('cta.p')}</p>
      <p className="k-cta-note">{t('cta.note')}</p>
      <div className="k-cta-btns">
        <Link to="/pricing/recommend"><button className="k-btn-cta-d">{t('cta.getStarted')} →</button></Link>
        <Link to="/contact?intent=schedule-call"><button className="k-btn-cta-o">{t('cta.scheduleCall')}</button></Link>
      </div>
    </section>
  );
};

export default CTA;
