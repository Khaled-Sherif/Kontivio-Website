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
    eyebrow: 'CRM Integration',
    title: 'Seamless CRM Connectivity',
    description:
      'Native integrations with Salesforce, HubSpot, Zendesk, Intercom, Freshdesk and more. Your data stays where it should — synced in real time across every conversation.',
    features: [
      'Two-way sync with leading CRM platforms',
      'Custom field mapping and data validation',
      'Real-time conversation logging',
      'Single sign-on (SSO) and role-based access',
      'Webhook and API connectivity for any custom system',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Real-Time Insights',
    title: 'Custom Analytics Dashboards',
    description:
      'See your CSAT, response times, FCR, ticket volumes, and agent performance in real time. Custom dashboards tailored to your KPIs, accessible from anywhere.',
    features: [
      'Live dashboards updating in real time',
      'Custom KPI tracking aligned to your goals',
      'Mobile and desktop accessible',
      'Scheduled reports delivered to stakeholders',
      'Drill-down analysis on individual conversations',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'AI-Powered Routing',
    title: 'Intelligent Ticket Routing',
    description:
      'Machine learning models analyze every incoming ticket and route it to the agent best equipped to handle it — by skill, language, sentiment, and current workload.',
    features: [
      'ML-powered intent and sentiment detection',
      'Skills-based routing with workload balancing',
      'Auto-prioritization of urgent and VIP tickets',
      'Language detection and native-speaker routing',
      'Continuous learning from agent feedback',
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'Quality Assurance',
    title: 'Built-in QA Tooling',
    description:
      'Automated quality scoring, conversation analysis, and continuous coaching tools — built into every workflow so quality is never an afterthought.',
    features: [
      'Random and targeted QA sampling',
      'AI-assisted conversation scoring',
      'Custom rubrics aligned to your brand voice',
      'Coaching workflows and agent development tracks',
      'Compliance and audit trail for regulated industries',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  },
];

export const TechnologySolutionsPage: React.FC = () => {
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
              Technology Solutions
            </div>
            <h1>
              Built on tools<br />
              <span className="k-hl">you already trust.</span>
            </h1>
            <p
              className="k-hero-sub"
              style={{ margin: '0 auto', maxWidth: '60ch' }}
            >
              Native integrations with your existing stack, real-time analytics, AI-powered routing, and built-in QA — all designed to amplify your team, not replace it.
            </p>
            <div className="k-hero-btns" style={{ justifyContent: 'center', marginTop: '2rem' }}>
              <Link to="/contact">
                <button className="k-btn-hp">Talk to Engineering →</button>
              </Link>
              <Link to="/services/technology-partners">
                <button className="k-btn-hs">View Partners</button>
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

export default TechnologySolutionsPage;
