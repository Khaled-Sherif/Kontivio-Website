import React from 'react';

const services = [
  {
    title: 'Live Chat Support',
    desc: 'Real-time agents trained on your product and brand voice. Instant, accurate, and always professional.',
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
  {
    title: 'Voice & Call Center',
    desc: 'Native-speaking agents providing premium phone support with full CRM integration and call recording.',
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 5.55 5.55l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  },
  {
    title: 'Email & Ticket Support',
    desc: 'SLA-guaranteed responses with intelligent routing, escalation protocols, and full audit trails.',
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </>
    ),
  },
  {
    title: 'Social Media Support',
    desc: 'Monitor, respond, and resolve across all social platforms before issues escalate publicly.',
    icon: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </>
    ),
  },
  {
    title: 'AI-Augmented Agents',
    desc: 'Human agents powered by AI tools — faster resolutions, fewer errors, smarter escalations at scale.',
    icon: (
      <>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <line x1="12" y1="7" x2="12" y2="11" />
        <line x1="8" y1="15" x2="8" y2="17" />
        <line x1="16" y1="15" x2="16" y2="17" />
      </>
    ),
  },
  {
    title: 'Analytics & QA',
    desc: 'Real-time dashboards, monthly insight reports, and QA scoring to continuously improve your CX.',
    icon: (
      <>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </>
    ),
  },
];

export const Services: React.FC = () => {
  return (
    <section className="k-section k-services" id="services">
      <div className="k-row k-reveal">
        <div>
          <div className="k-eyebrow">What We Offer</div>
          <h2 className="k-sec-h">
            Every channel your<br />
            customers use — covered.
          </h2>
        </div>
        <p className="k-sec-sub">
          From live chat to multilingual voice, we handle the full spectrum so nothing slips through.
        </p>
      </div>
      <div className="k-svc-grid k-reveal">
        {services.map((s) => (
          <div key={s.title} className="k-svc">
            <div className="k-svc-ic">
              <svg viewBox="0 0 24 24">{s.icon}</svg>
            </div>
            <div className="k-svc-t">{s.title}</div>
            <div className="k-svc-d">{s.desc}</div>
            <div className="k-svc-lnk">Learn more →</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
