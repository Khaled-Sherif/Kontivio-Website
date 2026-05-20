import React from 'react';
import { useT } from '../i18n';

export const OurStory: React.FC = () => {
  const t = useT();
  const chapters = [
    { title: t('story.ch1.title'), text: t('story.ch1.text') },
    { title: t('story.ch2.title'), text: t('story.ch2.text') },
    { title: t('story.ch3.title'), text: t('story.ch3.text') },
    { title: t('story.ch4.title'), text: t('story.ch4.text') },
    { title: t('story.ch5.title'), text: t('story.ch5.text') },
  ];
  return (
    <section className="k-section" style={{ background: 'white' }} id="our-story">
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <div className="k-reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="k-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>{t('story.eyebrow')}</div>
          <h2 className="k-sec-h" style={{ textAlign: 'center' }}>{t('story.h2.line1')}<br />{t('story.h2.line2')}</h2>
          <p className="k-sec-sub" style={{ margin: '1rem auto 0', textAlign: 'center' }}>{t('story.sub')}</p>
        </div>
        <div className="k-reveal" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ position: 'absolute', left: 27, top: 30, bottom: 30, width: 2, background: 'linear-gradient(to bottom, #00c8c8, rgba(0,200,200,.15))' }} />
          {chapters.map((c, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem', position: 'relative', alignItems: 'flex-start' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #00c8c8, #00a8a8)', color: '#0e2433', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.15rem', fontWeight: 800, flexShrink: 0, boxShadow: '0 6px 20px rgba(0,200,200,.35)', position: 'relative', zIndex: 1 }}>{i + 1}</div>
              <div style={{ flex: 1, background: '#f5fbfc', border: '1px solid #c8e8ee', borderRadius: 14, padding: '1.5rem 1.8rem', marginTop: '.4rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0e2433', marginBottom: '.6rem' }}>{c.title}</h3>
                <p style={{ fontSize: '.92rem', lineHeight: 1.8, color: '#5c8892' }}>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
