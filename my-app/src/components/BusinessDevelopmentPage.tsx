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
    eyebrow: 'Strategic Consulting',
    title: 'CX Strategy & Advisory',
    description:
      'Beyond running your support, we help you architect your customer experience strategy from the ground up. Journey mapping, persona research, and KPI design tailored to your business.',
    features: [
      'Customer journey mapping workshops',
      'Persona development and segmentation',
      'KPI and metric design aligned to revenue',
      'CX maturity assessment and roadmap',
      'Quarterly strategic business reviews',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Lead Generation',
    title: 'Outbound Sales Operations',
    description:
      'Trained, native-speaking outbound agents qualifying leads, booking demos, and following up — feeding your sales team a steady pipeline of qualified opportunities.',
    features: [
      'Cold calling and warm lead qualification',
      'Demo and meeting scheduling',
      'Multi-touch email and LinkedIn outreach',
      'CRM-integrated lead handoff',
      'Performance reporting on conversion rates',
    ],
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Account Management',
    title: 'Customer Success Operations',
    description:
      'Proactive customer success teams driving adoption, expansion, and retention. We handle onboarding, QBRs, expansion conversations, and renewal logistics.',
    features: [
      'Onboarding and product adoption coaching',
      'Quarterly Business Reviews (QBRs)',
      'Expansion identification and upsell support',
      'Churn prevention and risk monitoring',
      'Renewal forecasting and execution',
    ],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Growth Operations',
    title: 'Market Research & Expansion',
    description:
      'Entering a new market? We provide on-the-ground research, localized messaging, and the local-language operations to support your global expansion.',
    features: [
      'Market entry research and analysis',
      'Localization of messaging and collateral',
      'Native-language operations from day one',
      'Regulatory and compliance guidance',
      'Cultural advisory and brand adaptation',
    ],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
];

export const BusinessDevelopmentPage: React.FC = () => {
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
              Business Development
            </div>
            <h1>
              Strategic CX consulting<br />
              <span className="k-hl">that drives growth.</span>
            </h1>
            <p
              className="k-hero-sub"
              style={{ margin: '0 auto', maxWidth: '60ch' }}
            >
              Beyond day-to-day support, our consultants help you design end-to-end customer experience strategies — from journey mapping to KPI design and team scaling plans.
            </p>
            <div className="k-hero-btns" style={{ justifyContent: 'center', marginTop: '2rem' }}>
              <Link to="/contact">
                <button className="k-btn-hp">Talk to a Consultant →</button>
              </Link>
            </div>
          </div>
        </section>

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

export default BusinessDevelopmentPage;
