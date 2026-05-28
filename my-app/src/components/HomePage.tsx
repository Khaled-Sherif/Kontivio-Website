import React, { useEffect } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Marquee } from './Marquee';
import { Services } from './Services';
import { HowItWorks } from './HowItWorks';
import { WhyPartner } from './WhyPartner';
import { Guarantee } from './Guarantee';
import { FAQ } from './FAQ';
import { IndustriesSection } from './IndustriesSection';
import { CTA } from './CTA';
import { Footer } from './Footer';

export const HomePage: React.FC = () => {
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
        <Hero />
        <Marquee />
        <Services />
        <HowItWorks />
        <WhyPartner />
        <Guarantee />
        <FAQ />
        <IndustriesSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
