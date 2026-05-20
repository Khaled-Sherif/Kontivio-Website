import React from 'react';
import { useT } from '../i18n';

export const WhyPartner: React.FC = () => {
  const t = useT();
  const metrics = [
    { value: '<60s', label: t('why.metric.response'), highlight: true },
    { value: '18+', label: t('why.metric.languages'), highlight: false },
    { value: '24/7', label: t('why.metric.coverage'), highlight: false },
    { value: 'Zero', label: t('why.metric.lockIn'), highlight: true },
  ];
  const pillars = [
    { title: t('why.pillar.training.title'), desc: t('why.pillar.training.desc') },
    { title: t('why.pillar.contracts.title'), desc: t('why.pillar.contracts.desc') },
    { title: t('why.pillar.visibility.title'), desc: t('why.pillar.visibility.desc') },
    { title: t('why.pillar.scale.title'), desc: t('why.pillar.scale.desc') },
  ];
  return (
    <section className="k-section k-why">
      <div className="k-why-grid">
        <div className="k-why-vis k-reveal">
          <div className="k-m-grid">
            {metrics.map((m, i) => (
              <div key={i} className="k-m-box">
                <div className={`k-m-n ${m.highlight ? 'tc' : ''}`}>{m.value}</div>
                <div className="k-m-l">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="k-reveal">
          <div className="k-eyebrow">{t('why.eyebrow')}</div>
          <h2 className="k-sec-h">{t('why.h2.line1')}<br />{t('why.h2.line2')}</h2>
          <div className="k-pillars" style={{ marginTop: '1.8rem' }}>
            {pillars.map((p, i) => (
              <div key={i} className="k-pill">
                <div className="k-pill-ic">✓</div>
                <div>
                  <div className="k-pill-t">{p.title}</div>
                  <div className="k-pill-d">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
