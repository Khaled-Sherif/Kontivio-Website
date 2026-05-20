import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useT } from '../i18n';

interface Position {
  title: string;
  dept: string;
  location: string;
  type: string;
  level: string;
  salary: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

const positions: Position[] = [
  {
    title: 'Customer Support Specialist',
    dept: 'Operations',
    location: 'Cairo / Remote',
    type: 'Full-time',
    level: 'Mid-level',
    salary: 'Competitive + benefits',
    summary:
      'Be the front line of customer experience. Handle email, chat, and voice support for our brand-trained client accounts.',
    responsibilities: [
      'Respond to customer inquiries across email, chat, and voice channels',
      'Maintain CSAT above 95% on all interactions',
      'Collaborate with QA team on continuous improvement',
      'Document common issues and contribute to knowledge base',
    ],
    requirements: [
      '2+ years of customer service experience',
      'Excellent written and spoken English',
      'Empathy, patience, and active listening skills',
      'Familiarity with CRM tools (Zendesk, Intercom, or similar)',
    ],
  },
  {
    title: 'Multilingual Voice Agent',
    dept: 'Operations',
    location: 'Cairo (On-site)',
    type: 'Full-time',
    level: 'Mid-level',
    salary: 'Competitive + language premiums',
    summary:
      'Provide native-language phone support to international customers. Ideal for native speakers of French, German, Spanish, or Arabic.',
    responsibilities: [
      'Handle inbound and outbound voice calls in your native language',
      'Maintain professional tone and brand voice on every call',
      'Document call outcomes accurately in CRM',
      'Escalate complex issues per protocol',
    ],
    requirements: [
      'Native-level fluency in French / German / Spanish / Arabic',
      'Working proficiency in English',
      '1+ year of phone-based customer service',
      'Strong communication and listening skills',
    ],
  },
  {
    title: 'Quality Assurance Lead',
    dept: 'Operations',
    location: 'Cairo / Hybrid',
    type: 'Full-time',
    level: 'Senior',
    salary: 'Competitive + bonus',
    summary:
      'Own quality across teams. Design QA scoring rubrics, conduct conversation reviews, and coach agents to excellence.',
    responsibilities: [
      'Design and maintain QA scoring rubrics aligned to client brands',
      'Score random and targeted samples of agent conversations',
      'Run weekly coaching sessions with agents and team leads',
      'Report quality trends and improvement initiatives to management',
    ],
    requirements: [
      '4+ years in customer service quality assurance',
      'Experience designing scoring rubrics and KPI frameworks',
      'Strong analytical and coaching skills',
      'Proficiency in conversation analytics tools',
    ],
  },
  {
    title: 'Frontend Developer',
    dept: 'Technology',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid-Senior',
    salary: 'Competitive + equity',
    summary:
      'Build the dashboards, integrations, and tools that make our agents and clients more effective.',
    responsibilities: [
      'Build new features for client dashboards and internal tooling',
      'Collaborate with design on user-facing experiences',
      'Optimize performance and accessibility',
      'Participate in code reviews and architecture decisions',
    ],
    requirements: [
      '3+ years of React / TypeScript experience',
      'Strong CSS and responsive-design skills',
      'Experience integrating with REST and GraphQL APIs',
      'Bonus: Vite, Next.js, or testing frameworks',
    ],
  },
  {
    title: 'Account Manager',
    dept: 'Business Development',
    location: 'Cairo / Dubai',
    type: 'Full-time',
    level: 'Mid-Senior',
    salary: 'Base + commission + benefits',
    summary:
      'Own client relationships from onboarding through renewal. Be the strategic partner clients turn to.',
    responsibilities: [
      'Manage a portfolio of client accounts as primary contact',
      'Run quarterly business reviews and growth conversations',
      'Identify upsell and cross-sell opportunities',
      'Coordinate with operations to ensure client success',
    ],
    requirements: [
      '4+ years in B2B account management or customer success',
      'Excellent communication and negotiation skills',
      'Track record of retention and account growth',
      'Comfortable with data and metrics-driven discussions',
    ],
  },
  {
    title: 'Workforce Manager',
    dept: 'Operations',
    location: 'Cairo (On-site)',
    type: 'Full-time',
    level: 'Senior',
    salary: 'Competitive + bonus',
    summary:
      'Forecast volume, build schedules, and ensure we have the right agents in the right place at the right time.',
    responsibilities: [
      'Forecast support volume across clients and channels',
      'Build agent schedules to optimize coverage and cost',
      'Monitor real-time service levels and adjust as needed',
      'Partner with hiring on capacity planning',
    ],
    requirements: [
      '3+ years in workforce management for contact centers',
      'Strong Excel / Google Sheets and WFM tooling proficiency',
      'Analytical mindset and attention to detail',
      'Experience with Erlang and capacity modeling',
    ],
  },
  {
    title: 'Trainer / Onboarding Specialist',
    dept: 'Operations',
    location: 'Cairo / Hybrid',
    type: 'Full-time',
    level: 'Mid-level',
    salary: 'Competitive + benefits',
    summary:
      'Design and deliver the 3-week training programs that turn new hires into Kontivio agents ready for our clients.',
    responsibilities: [
      'Build training curricula for new client engagements',
      'Deliver classroom and one-on-one training sessions',
      'Run nesting periods with new agents on the floor',
      'Iterate on training materials based on quality data',
    ],
    requirements: [
      '3+ years training adults in operations or customer service',
      'Strong instructional design skills',
      'Excellent communication and presentation abilities',
      'Bonus: instructional design certification',
    ],
  },
  {
    title: 'Sales Development Representative',
    dept: 'Business Development',
    location: 'Cairo / Remote',
    type: 'Full-time',
    level: 'Entry-Mid',
    salary: 'Base + commission',
    summary:
      'Generate qualified opportunities for our sales team via outbound outreach and inbound lead qualification.',
    responsibilities: [
      'Run outbound campaigns via email, LinkedIn, and phone',
      'Qualify inbound leads and book discovery calls',
      'Maintain pipeline hygiene in CRM',
      'Hit weekly meeting and qualified opportunity targets',
    ],
    requirements: [
      '1+ year of B2B SDR or telesales experience',
      'Excellent written and spoken English',
      'Resilience, curiosity, and competitive drive',
      'Familiarity with HubSpot, Salesforce, or similar CRM',
    ],
  },
];

export const Careers: React.FC = () => {
  const t = useT();
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
            style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: 720, margin: '0 auto' }}
          >
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>{t('careers.eyebrow')}</div>
            <h1>{t('careers.h1.line1')}<br />{t('careers.h1.line2')}</h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              {t('careers.sub', { count: positions.length })}
            </p>
          </div>
        </section>

        <section className="k-section" style={{ background: 'white' }} id="positions">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="k-reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="k-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>
                {t('careers.openPositions')}
              </div>
              <h2 className="k-sec-h" style={{ textAlign: 'center' }}>
                {t('careers.h2')}
              </h2>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
              className="k-reveal"
            >
              {positions.map((p) => (
                <div
                  key={p.title}
                  style={{
                    padding: '1.8rem 2rem',
                    border: '1px solid #c8e8ee',
                    borderRadius: 14,
                    background: 'white',
                    transition: 'all .2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00c8c8';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(14,36,51,.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#c8e8ee';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Top: Title + Apply */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0e2433' }}>
                        {p.title}
                      </div>
                      <div
                        style={{
                          marginTop: 6,
                          display: 'flex',
                          gap: '.5rem',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '.7rem',
                            fontWeight: 700,
                            color: '#00a8a8',
                            background: 'rgba(0,200,200,.08)',
                            padding: '.25rem .65rem',
                            borderRadius: 100,
                            letterSpacing: '.04em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {p.dept}
                        </span>
                        <span style={{ fontSize: '.78rem', color: '#5c8892' }}>
                          📍 {p.location}
                        </span>
                        <span style={{ fontSize: '.78rem', color: '#5c8892' }}>
                          💼 {p.type}
                        </span>
                        <span style={{ fontSize: '.78rem', color: '#5c8892' }}>
                          ⭐ {p.level}
                        </span>
                      </div>
                    </div>
                    <Link to={`/careers/apply?position=${encodeURIComponent(p.title)}`}>
                      <button className="k-btn-contact">{t('careers.apply')} →</button>
                    </Link>
                  </div>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: '.9rem',
                      lineHeight: 1.7,
                      color: '#0e2433',
                      marginBottom: '1.2rem',
                    }}
                  >
                    {p.summary}
                  </p>

                  {/* Two columns: responsibilities + requirements */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1.5rem',
                      marginTop: '1rem',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '.7rem',
                          fontWeight: 700,
                          color: '#00a8a8',
                          letterSpacing: '.12em',
                          textTransform: 'uppercase',
                          marginBottom: '.6rem',
                        }}
                      >
                        {t('careers.responsibilities')}
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                        {p.responsibilities.map((r, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: '.82rem',
                              lineHeight: 1.6,
                              color: '#5c8892',
                              display: 'flex',
                              gap: '.5rem',
                            }}
                          >
                            <span style={{ color: '#00c8c8', flexShrink: 0, fontWeight: 800 }}>✓</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '.7rem',
                          fontWeight: 700,
                          color: '#00a8a8',
                          letterSpacing: '.12em',
                          textTransform: 'uppercase',
                          marginBottom: '.6rem',
                        }}
                      >
                        {t('careers.requirements')}
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                        {p.requirements.map((r, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: '.82rem',
                              lineHeight: 1.6,
                              color: '#5c8892',
                              display: 'flex',
                              gap: '.5rem',
                            }}
                          >
                            <span style={{ color: '#00c8c8', flexShrink: 0, fontWeight: 800 }}>•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: '1.2rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid #f0f7f8',
                      fontSize: '.78rem',
                      color: '#5c8892',
                    }}
                  >
                    💰 <strong style={{ color: '#0e2433' }}>{p.salary}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '3rem',
                textAlign: 'center',
                padding: '2rem',
                background: '#f5fbfc',
                borderRadius: 14,
              }}
            >
              <div style={{ fontSize: '.95rem', fontWeight: 700, color: '#0e2433', marginBottom: '.4rem' }}>
                {t('careers.noRole.title')}
              </div>
              <div style={{ fontSize: '.83rem', color: '#5c8892', marginBottom: '1rem' }}>
                {t('careers.noRole.desc')}
              </div>
              <Link to="/careers/apply?position=General%20Application">
                <button className="k-btn-hp">{t('careers.noRole.cta')}</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
