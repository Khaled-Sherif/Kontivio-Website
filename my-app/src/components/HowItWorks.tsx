import React from 'react';

const steps = [
  { n: '1', title: 'Discovery Call', desc: 'We learn your product, customers, tone, and goals in a focused 60-minute session.' },
  { n: '2', title: 'Agent Training', desc: 'We hand-pick and train your dedicated team on your exact workflows and brand playbook.' },
  { n: '3', title: 'Supervised Launch', desc: 'We go live with a monitored ramp, adjusting based on real-time quality data.' },
  { n: '4', title: 'Full Operations', desc: 'Your Kontivio team runs independently with ongoing QA, reporting, and on-demand scaling.' },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="k-section k-how" id="how">
      <div className="k-reveal" style={{ textAlign: 'center' }}>
        <div className="k-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>How It Works</div>
        <h2 className="k-sec-h" style={{ textAlign: 'center' }}>Live in 3 weeks. Seriously.</h2>
        <p className="k-sec-sub" style={{ margin: '.4rem auto 0', textAlign: 'center' }}>No lengthy onboarding. No IT headaches. We handle everything.</p>
      </div>
      <div className="k-steps k-reveal">
        {steps.map((s) => (
          <div key={s.n} className="k-step">
            <div className="k-step-n">{s.n}</div>
            <div className="k-step-t">{s.title}</div>
            <div className="k-step-d">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
