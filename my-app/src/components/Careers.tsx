import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

const positions = [
  { title: 'Customer Support Specialist', dept: 'Operations', location: 'Cairo / Remote', type: 'Full-time' },
  { title: 'Multilingual Voice Agent', dept: 'Operations', location: 'Cairo', type: 'Full-time' },
  { title: 'Quality Assurance Lead', dept: 'Operations', location: 'Cairo / Hybrid', type: 'Full-time' },
  { title: 'Frontend Developer', dept: 'Technology', location: 'Remote', type: 'Full-time' },
  { title: 'Account Manager', dept: 'Business Development', location: 'Cairo / Dubai', type: 'Full-time' },
];

export const Careers: React.FC = () => {
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
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>Careers at Kontivio</div>
            <h1>Build the future<br />of customer care.</h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              Join a team that genuinely cares about people — both our customers and our colleagues.
            </p>
          </div>
        </section>
        <section className="k-section" style={{ background: 'white' }} id="positions">
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="k-reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="k-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>Open Positions</div>
              <h2 className="k-sec-h" style={{ textAlign: 'center' }}>We're hiring across teams</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }} className="k-reveal">
              {positions.map((p) => (
                <div key={p.title} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.5rem 1.7rem', border: '1px solid #c8e8ee', borderRadius: 12, background: 'white' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0e2433' }}>{p.title}</div>
                    <div style={{ marginTop: 4, fontSize: '.78rem', color: '#5c8892' }}>{p.dept} · {p.location} · {p.type}</div>
                  </div>
                  <Link to={`/careers/apply?position=${encodeURIComponent(p.title)}`}><button className="k-btn-contact">Apply →</button></Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
