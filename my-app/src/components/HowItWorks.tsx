import React from 'react';
import { useT } from '../i18n';

export const HowItWorks: React.FC = () => {
  const t = useT();
  const steps = [
    { n: '1', title: t('how.step1.title'), desc: t('how.step1.desc') },
    { n: '2', title: t('how.step2.title'), desc: t('how.step2.desc') },
    { n: '3', title: t('how.step3.title'), desc: t('how.step3.desc') },
    { n: '4', title: t('how.step4.title'), desc: t('how.step4.desc') },
  ];
  return (
    <section className="k-section k-how" id="how">
      <div className="k-reveal" style={{ textAlign: 'center' }}>
        <div className="k-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>{t('how.eyebrow')}</div>
        <h2 className="k-sec-h" style={{ textAlign: 'center' }}>{t('how.h2')}</h2>
        <p className="k-sec-sub" style={{ margin: '.4rem auto 0', textAlign: 'center' }}>{t('how.sub')}</p>
      </div>
      <div className="k-steps k-reveal">
        {steps.map((s) => (
          <div key={s.n} className="k-step">
            <div className="k-step-n">{s.n}</div>
            <div className="k-step-t">{s.title}</div>
            <div className="k-step-d">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
