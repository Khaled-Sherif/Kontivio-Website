import React from 'react';

const cards = [
  { t: 'Quality Guaranteed', d: 'We put our SLA commitments in writing. Miss a target? You receive a credit — automatically.' },
  { t: 'No Lock-in', d: 'Month-to-month. Cancel anytime, no penalties, no awkward conversations.' },
  { t: 'SLA-Backed Response', d: 'Miss our SLA? You get a credit automatically. We put it in writing.' },
  { t: 'Full Transparency', d: 'Live dashboards. Weekly reports. You see everything, in real time, always.' },
];

export const Guarantee: React.FC = () => {
  return (
    <section className="k-guarantee">
      <div className="k-g-grid">
        <div className="k-g-left k-reveal">
          <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>Our Promise</div>
          <h2 className="k-sec-h">
            Commitments you can<br />
            hold us to.
          </h2>
          <p className="k-sec-sub" style={{ marginTop: '1rem' }}>
            Every promise is backed by SLAs, written agreements, and full operational transparency from day one.
          </p>
        </div>
        <div className="k-g-cards k-reveal">
          {cards.map((c) => (
            <div key={c.t} className="k-g-card">
              <div className="k-g-ico">—</div>
              <div className="k-g-t">{c.t}</div>
              <div className="k-g-d">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
