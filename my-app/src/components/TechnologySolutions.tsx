import React from 'react';

const solutions = [
  { title: 'CRM Integration', desc: 'Native integrations with Salesforce, HubSpot, Zendesk, Intercom and more — your data stays where it should.' },
  { title: 'Real-Time Dashboards', desc: 'Custom analytics dashboards giving you full visibility into ticket volume, response times, CSAT and agent performance.' },
  { title: 'AI-Powered Routing', desc: 'Intelligent ticket routing using ML to ensure every customer reaches the right agent in record time.' },
  { title: 'Quality Assurance Tools', desc: 'Automated QA scoring, conversation analysis, and continuous coaching — built into every workflow.' },
];

export const TechnologySolutions: React.FC = () => {
  return (
    <section className="k-section k-how" id="technology">
      <div className="k-reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="k-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>Technology Solutions</div>
        <h2 className="k-sec-h" style={{ textAlign: 'center' }}>Built on tools<br />you already trust.</h2>
      </div>
      <div className="k-svc-grid k-reveal" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {solutions.map((s) => (
          <div key={s.title} className="k-svc">
            <div className="k-svc-t">{s.title}</div>
            <div className="k-svc-d">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologySolutions;
