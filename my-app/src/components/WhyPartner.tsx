import React from 'react';

const metrics = [
  { value: '<60s', label: 'Guaranteed Response', highlight: true },
  { value: '18+', label: 'Languages, Native Speakers', highlight: false },
  { value: '24/7', label: 'Round-the-Clock Coverage', highlight: false },
  { value: 'Zero', label: 'Lock-in Contracts', highlight: true },
];

const pillars = [
  {
    title: 'Brand-First Training',
    desc: 'Every agent undergoes a full 3-week immersion before handling a single customer — your voice, your standards.',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  },
  {
    title: 'No Long-Term Contracts',
    desc: 'Month-to-month only. We earn your business every month — or you walk, penalty-free.',
    icon: (
      <>
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </>
    ),
  },
  {
    title: 'Full Visibility Always',
    desc: 'Live dashboards 24/7. Every ticket, agent, and metric visible to you in real time.',
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
  },
  {
    title: 'Scale in Days',
    desc: 'Handle surges or rapid growth without the cost and delay of in-house hiring.',
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
];

export const WhyPartner: React.FC = () => {
  return (
    <section className="k-section k-why">
      <div className="k-why-grid">
        <div className="k-why-vis k-reveal">
          <div className="k-m-grid">
            {metrics.map((m) => (
              <div key={m.label} className="k-m-box">
                <div className={`k-m-n ${m.highlight ? 'tc' : ''}`}>{m.value}</div>
                <div className="k-m-l">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="k-reveal">
          <div className="k-eyebrow">Why Kontivio</div>
          <h2 className="k-sec-h">
            We don't just answer tickets.<br />
            We represent your brand.
          </h2>
          <div className="k-pillars" style={{ marginTop: '1.8rem' }}>
            {pillars.map((p) => (
              <div key={p.title} className="k-pill">
                <div className="k-pill-ic">
                  <svg viewBox="0 0 24 24">{p.icon}</svg>
                </div>
                <div>
                  <div className="k-pill-t">{p.title}</div>
                  <div className="k-pill-d">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
