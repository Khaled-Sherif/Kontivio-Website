import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ContactForm } from './ContactForm';

export const ContactUs: React.FC = () => {
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
          <div className="k-hero-left k-reveal" style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>Get In Touch</div>
            <h1>Let's talk about<br />your customers.</h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              Tell us about your business, and we'll build a support plan that fits.
            </p>
          </div>
        </section>

        <section className="k-section" style={{ background: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem' }} className="k-reveal">
            <div>
              <h2 className="k-sec-h" style={{ fontSize: '1.7rem', marginBottom: '1rem' }}>Reach out</h2>
              <p className="k-sec-sub" style={{ marginBottom: '2rem' }}>
                Our team responds within one business day. We're happy to walk you through how Kontivio can fit into your existing operations.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <div className="k-eyebrow">Email</div>
                  <a href="mailto:contactus@kontivio.com" style={{ fontSize: '.9rem', fontWeight: 600, color: '#0e2433', textDecoration: 'none' }}>contactus@kontivio.com</a>
                </div>
                <div>
                  <div className="k-eyebrow">HQ</div>
                  <div style={{ fontSize: '.9rem', fontWeight: 600, color: '#0e2433' }}>Cairo, Egypt</div>
                </div>
                <div>
                  <div className="k-eyebrow">Hours</div>
                  <div style={{ fontSize: '.9rem', fontWeight: 600, color: '#0e2433' }}>Sun–Thu, 9 AM – 6 PM (EET)</div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
