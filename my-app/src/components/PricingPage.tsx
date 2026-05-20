import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Pricing } from './Pricing';
import { CTA } from './CTA';
import { useT } from '../i18n';

export const PricingPage: React.FC = () => {
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
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>{t('pricingPage.eyebrow')}</div>
            <h1>
              {t('pricingPage.h1.line1')}<br />
              <span className="k-hl">{t('pricingPage.h1.line2')}</span>
            </h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              {t('pricingPage.sub')}
            </p>
            <div className="k-hero-btns" style={{ justifyContent: 'center', marginTop: '2rem' }}>
              <Link to="/pricing/recommend">
                <button className="k-btn-hp">{t('pricingPage.cta.recommend')} →</button>
              </Link>
              <Link to="/contact">
                <button className="k-btn-hs">{t('pricingPage.cta.talkSales')}</button>
              </Link>
            </div>
          </div>
        </section>

        <Pricing hideHeader={false} />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
