import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { OurStory } from './OurStory';
import { CTA } from './CTA';

export const OurStoryPage: React.FC = () => {
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
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>Our Story</div>
            <h1>How we got<br /><span className="k-hl">started.</span></h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              From a simple frustration to a global team — here's the journey that built Kontivio.
            </p>
          </div>
        </section>
        <OurStory />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default OurStoryPage;
