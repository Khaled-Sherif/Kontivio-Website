import React from 'react';
import { useT } from '../i18n';

export const Guarantee: React.FC = () => {
  const t = useT();
  const cards = [
    { ti: t('guarantee.card1.title'), de: t('guarantee.card1.desc') },
    { ti: t('guarantee.card2.title'), de: t('guarantee.card2.desc') },
    { ti: t('guarantee.card3.title'), de: t('guarantee.card3.desc') },
    { ti: t('guarantee.card4.title'), de: t('guarantee.card4.desc') },
  ];
  return (
    <section className="k-guarantee">
      <div className="k-g-grid">
        <div className="k-g-left k-reveal">
          <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>{t('guarantee.eyebrow')}</div>
          <h2 className="k-sec-h">{t('guarantee.h2.line1')}<br />{t('guarantee.h2.line2')}</h2>
          <p className="k-sec-sub" style={{ marginTop: '1rem' }}>{t('guarantee.sub')}</p>
        </div>
        <div className="k-g-cards k-reveal">
          {cards.map((c, i) => (
            <div key={i} className="k-g-card">
              <div className="k-g-ico">—</div>
              <div className="k-g-t">{c.ti}</div>
              <div className="k-g-d">{c.de}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
