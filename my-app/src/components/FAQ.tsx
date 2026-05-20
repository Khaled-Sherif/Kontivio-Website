import React, { useState } from 'react';
import { useT } from '../i18n';

export const FAQ: React.FC = () => {
  const t = useT();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
  ];
  return (
    <section className="k-section k-faq">
      <div className="k-row k-reveal">
        <div>
          <div className="k-eyebrow">{t('faq.eyebrow')}</div>
          <h2 className="k-sec-h">{t('faq.h2.line1')}<br />{t('faq.h2.line2')}</h2>
        </div>
      </div>
      <div className="k-faq-grid k-reveal">
        {faqs.map((f, i) => (
          <div key={i} className={`k-faq-item ${openIdx === i ? 'open' : ''}`} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            <div className="k-faq-q">{f.q} <span className="k-faq-ico">+</span></div>
            <div className="k-faq-a">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
