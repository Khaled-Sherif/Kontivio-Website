import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { OurStory } from './OurStory';
import { BoardOfDirectors } from './BoardOfDirectors';
import { WhyPartner } from './WhyPartner';
import { CTA } from './CTA';

export const AboutUs: React.FC = () => {
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
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>About Kontivio</div>
            <h1>Built on care.<br />Driven by results.</h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              Kontivio is a modern customer experience partner — combining native-speaking talent, smart technology, and brand-first training to deliver support that feels like an extension of your team.
            </p>
          </div>
        </section>
        <OurStory />
        <BoardOfDirectors />
        <WhyPartner />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
