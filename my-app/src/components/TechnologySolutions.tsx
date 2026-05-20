import React from 'react';
import { useT } from '../i18n';

export const TechnologySolutions: React.FC = () => {
  const t = useT();
  const solutions = [
    { title: t('tsSol.crm.title'), desc: t('tsSol.crm.desc') },
    { title: t('tsSol.dashboard.title'), desc: t('tsSol.dashboard.desc') },
    { title: t('tsSol.routing.title'), desc: t('tsSol.routing.desc') },
    { title: t('tsSol.qa.title'), desc: t('tsSol.qa.desc') },
  ];

  return (
    <section className="k-section k-how" id="technology">
      <div className="k-reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="k-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>{t('tsp.eyebrow')}</div>
        <h2 className="k-sec-h" style={{ textAlign: 'center' }}>{t('tsp.h1.line1')}<br />{t('tsp.h1.line2')}</h2>
      </div>
      <div className="k-svc-grid k-reveal" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {solutions.map((s) => (
          <div key={s.title} className="k-svc">
            <div className="k-svc-t">{s.title}</div>
            <div className="k-svc-d">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologySolutions;
