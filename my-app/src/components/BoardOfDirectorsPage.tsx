import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BoardOfDirectors } from './BoardOfDirectors';
import { CTA } from './CTA';
import { useT } from '../i18n';

export const BoardOfDirectorsPage: React.FC = () => {
  const t = useT();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('on')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.k-reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="k-hero" style={{ minHeight: '50vh', background: 'linear-gradient(132deg, #0e2433 0%, #0f4456 60%, #0a7a8a 100%)' }}>
          <div className="k-hero-left k-reveal" style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>{t('boardPage.eyebrow')}</div>
            <h1>{t('boardPage.h1.line1')}<br /><span className="k-hl">{t('boardPage.h1.line2')}</span></h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              {t('boardPage.sub')}
            </p>
          </div>
        </section>
        <BoardOfDirectors />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default BoardOfDirectorsPage;
