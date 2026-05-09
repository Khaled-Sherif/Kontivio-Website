import React, { useState } from 'react';

const faqs = [
  { q: 'Do I need to be a large company?', a: 'Not at all. We work with businesses of all sizes — from solo founders to scaling companies.' },
  { q: 'How do agents learn our product?', a: 'Through a 3-week structured training using your documentation, past tickets, and live sessions with your team.' },
  { q: 'How quickly can we get started?', a: 'From your first call to a fully operational team takes around 3 weeks. We handle agent selection, training, and tool setup — you just review and approve.' },
  { q: 'Can I see operations in real time?', a: 'Yes. Every client gets a live dashboard showing ticket volumes, response times, CSAT, and agent performance — 24/7.' },
  { q: 'Which tools do you integrate with?', a: "Zendesk, Intercom, Freshdesk, HubSpot, Salesforce, Shopify and most major CRMs. Don't see yours? Ask us." },
  { q: 'Do you support multilingual customers?', a: 'Yes — native speakers in 18+ languages. Arabic, French, Spanish, German and more available from day one.' },
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="k-section k-faq">
      <div className="k-row k-reveal">
        <div>
          <div className="k-eyebrow">FAQ</div>
          <h2 className="k-sec-h">Questions before<br />you sign up.</h2>
        </div>
      </div>
      <div className="k-faq-grid k-reveal">
        {faqs.map((f, i) => (
          <div key={i} className={`k-faq-item ${openIdx === i ? 'open' : ''}`} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            <div className="k-faq-q">{f.q} <span className="k-faq-ico">+</span></div>
            <div className="k-faq-a">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
