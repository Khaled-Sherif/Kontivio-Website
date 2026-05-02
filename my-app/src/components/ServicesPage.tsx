import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Services } from './Services';
import { TechnologySolutions } from './TechnologySolutions';
import { TechnologyPartners } from './TechnologyPartners';
import { BusinessDevelopment } from './BusinessDevelopment';
import { CTA } from './CTA';

export const ServicesPage: React.FC = () => {
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
        <section className="k-hero" style={{ minHeight: '60vh', background: 'linear-gradient(132deg, #0e2433 0%, #0f4456 60%, #0a7a8a 100%)' }}>
          <div className="k-hero-left k-reveal" style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>Our Services</div>
            <h1>Everything your<br />customers need.</h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              From real-time chat to multilingual voice support — every channel, covered.
            </p>
          </div>
        </section>
        <Services />
        <TechnologySolutions />
        <TechnologyPartners />
        <BusinessDevelopment />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
