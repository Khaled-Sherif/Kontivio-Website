import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CTA } from './CTA';

interface Solution {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const solutions: Solution[] = [
  {
    eyebrow: 'Real-Time Engagement',
    title: 'Live Chat Support',
    description:
      'Instant, on-brand conversations that turn website visitors into loyal customers. Our agents are trained on your product, tone, and escalation paths — so every chat feels native to your brand.',
    features: [
      'Sub-60-second response time, guaranteed by SLA',
      'Trained on your knowledge base, FAQs, and brand voice',
      'Multi-language support across 18+ languages',
      'CRM-integrated for full customer context',
      'Real-time co-browse and screen-share capabilities',
    ],
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Voice Operations',
    title: 'Voice & Call Center',
    description:
      'Premium phone support delivered by native-speaking agents. Inbound, outbound, and blended operations — fully recorded, scored for quality, and integrated with your existing call infrastructure.',
    features: [
      'Native speakers in 18+ languages',
      'Inbound, outbound, and blended call handling',
      'Full recording and quality scoring on every call',
      'Integration with leading telephony platforms',
      'Real-time supervisor dashboards and call coaching',
    ],
    image:
      'https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Async Channels',
    title: 'Email & Ticket Support',
    description:
      'Thoughtful, well-written responses with full audit trails. We integrate with your existing helpdesk so customers experience continuity, and your team gets full visibility into every conversation.',
    features: [
      'SLA-backed first response within 1 hour',
      'Native integration with Zendesk, Intercom, Freshdesk',
      'Intelligent ticket routing and escalation rules',
      'Macros, templates, and tone-matched responses',
      'Weekly performance reports with deep insights',
    ],
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Public Engagement',
    title: 'Social Media Support',
    description:
      'Catch customer issues before they go viral. Our social specialists monitor every mention, DM, and comment across platforms — responding with on-brand voice that protects your reputation.',
    features: [
      'Coverage across X, Instagram, Facebook, LinkedIn, TikTok',
      'Sentiment monitoring and trend detection',
      'Crisis escalation protocols with sub-15-min response',
      'Brand voice consistency on every public reply',
      'Monthly social health and reputation reports',
    ],
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Smart Augmentation',
    title: 'AI-Augmented Agents',
    description:
      'The best of both worlds — empathetic human agents enhanced with AI tooling. Smart suggestions, instant translations, automated summaries, and predictive escalation make every interaction faster and more accurate.',
    features: [
      'AI-powered response suggestions in real time',
      'Auto-translation across 100+ languages',
      'Conversation summaries and ticket auto-tagging',
      'Predictive escalation based on sentiment',
      'Continuous learning from your knowledge base',
    ],
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Insights & Quality',
    title: 'Analytics & QA',
    description:
      'Beautiful dashboards and rigorous quality assurance — together. See your CSAT, response times, FCR, and agent performance in real time, and trust that every interaction is being scored against rigorous criteria.',
    features: [
      'Live dashboards: CSAT, FCR, response times, more',
      'Random and targeted QA scoring on every channel',
      'Monthly business reviews with strategic insights',
      'Custom KPI reporting for your unique needs',
      'Continuous coaching and agent development plans',
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
];

export const CustomerSupportSolutions: React.FC = () => {
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
        {/* Hero */}
        <section
          className="k-hero"
          style={{
            minHeight: '60vh',
            background: 'linear-gradient(132deg, #0e2433 0%, #0f4456 60%, #0a7a8a 100%)',
          }}
        >
          <div
            className="k-hero-left k-reveal"
            style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}
          >
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>
              Customer Support Solutions
            </div>
            <h1>
              Every channel.<br />
              <span className="k-hl">Every customer.</span><br />
              Every time.
            </h1>
            <p
              className="k-hero-sub"
              style={{ margin: '0 auto', maxWidth: '60ch' }}
            >
              From real-time chat to multilingual voice, from social listening to AI-augmented agents — Kontivio delivers the full spectrum of customer support, all under one roof.
            </p>
            <div className="k-hero-btns" style={{ justifyContent: 'center', marginTop: '2rem' }}>
              <Link to="/contact">
                <button className="k-btn-hp">Get a Custom Quote →</button>
              </Link>
              <Link to="/pricing">
                <button className="k-btn-hs">View Pricing</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed solution sections — one per channel */}
        {solutions.map((sol) => (
          <section key={sol.title} className="k-sol-section">
            <div className="k-sol-grid k-reveal">
              <div className="k-sol-img">
                <img src={sol.image} alt={sol.title} loading="lazy" />
              </div>
              <div className="k-sol-text">
                <div className="k-eyebrow">{sol.eyebrow}</div>
                <h3>{sol.title}</h3>
                <p>{sol.description}</p>
                <ul className="k-sol-feats">
                  {sol.features.map((f) => (
                    <li key={f}>
                      <span className="k-ck">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default CustomerSupportSolutions;
