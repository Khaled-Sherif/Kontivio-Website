import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { TechnologyPartners } from './TechnologyPartners';
import { CTA } from './CTA';

export const TechnologyPartnersPage: React.FC = () => {
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
        <section
          className="k-hero"
          style={{
            minHeight: '50vh',
            background: 'linear-gradient(132deg, #0e2433 0%, #0f4456 60%, #0a7a8a 100%)',
          }}
        >
          <div className="k-hero-left k-reveal" style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>Technology Partners</div>
            <h1>We integrate with<br /><span className="k-hl">your stack.</span></h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              Native integrations with the tools you already use — your data stays where it should.
            </p>
          </div>
        </section>
        <TechnologyPartners />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default TechnologyPartnersPage;
