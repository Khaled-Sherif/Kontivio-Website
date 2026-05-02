import React from 'react';

const milestones = [
  { year: '2024', title: 'The Vision', text: 'Founded with a mission to redefine customer support outsourcing — care first, always.' },
  { year: '2025', title: 'Building the Team', text: 'Hand-selected our core team of CX specialists from across the MENA region.' },
  { year: '2026', title: 'Going Global', text: 'Launching with multilingual support across 18+ languages and 24/7 coverage.' },
];

export const OurStory: React.FC = () => {
  return (
    <section className="k-section" style={{ background: 'white' }} id="our-story">
      <div className="k-why-grid">
        <div className="k-team-photo-hero k-reveal" style={{ height: 480 }}>
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
            alt="Our story"
            loading="lazy"
          />
        </div>
        <div className="k-reveal">
          <div className="k-eyebrow">Our Story</div>
          <h2 className="k-sec-h">From a simple belief<br />to a global team.</h2>
          <p className="k-sec-sub" style={{ marginBottom: '2rem' }}>
            Kontivio started with a frustration shared by founders everywhere — that customer support shouldn't feel transactional. Every interaction is a chance to build trust.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {milestones.map((m) => (
              <div key={m.year} style={{ display: 'flex', gap: '1.4rem', borderLeft: '2px solid #00c8c8', paddingLeft: '1.4rem' }}>
                <div style={{ flexShrink: 0, fontSize: '1.5rem', fontWeight: 800, color: '#00c8c8' }}>{m.year}</div>
                <div>
                  <div style={{ fontSize: '.9rem', fontWeight: 700, color: '#0e2433' }}>{m.title}</div>
                  <div style={{ fontSize: '.79rem', lineHeight: 1.7, color: '#5c8892' }}>{m.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
