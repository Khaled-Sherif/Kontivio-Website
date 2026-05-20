import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useT } from '../i18n';

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string }[];
}

type PlanKey = 'Starter' | 'Per Contact' | 'Enterprise';

interface Recommendation {
  plan: PlanKey;
  why: string[];
}

function recommend(answers: Record<string, string>): Recommendation {
  const score: Record<PlanKey, number> = { Starter: 0, 'Per Contact': 0, Enterprise: 0 };

  if (answers.volume === 'low') score.Starter += 3;
  if (answers.volume === 'medium') { score.Starter += 1; score['Per Contact'] += 2; }
  if (answers.volume === 'high') score.Enterprise += 2;
  if (answers.volume === 'enterprise') score.Enterprise += 4;

  if (answers.predictability === 'stable') { score.Starter += 1; score.Enterprise += 1; }
  if (answers.predictability === 'variable') score['Per Contact'] += 3;
  if (answers.predictability === 'spiky') score['Per Contact'] += 4;

  if (answers.channels === 'basic') score.Starter += 2;
  if (answers.channels === 'voice') { score['Per Contact'] += 1; score.Enterprise += 1; }
  if (answers.channels === 'all') score.Enterprise += 3;

  if (answers.coverage === 'business') score.Starter += 2;
  if (answers.coverage === 'extended') score['Per Contact'] += 2;
  if (answers.coverage === 'always') score.Enterprise += 3;

  if (answers.languages === 'one') score.Starter += 2;
  if (answers.languages === 'few') score['Per Contact'] += 1;
  if (answers.languages === 'many') score.Enterprise += 3;

  if (answers.commitment === 'flexible') score['Per Contact'] += 4;
  if (answers.commitment === 'monthly') score.Starter += 2;
  if (answers.commitment === 'partnership') score.Enterprise += 4;

  const winner = (Object.entries(score) as [PlanKey, number][]).sort((a, b) => b[1] - a[1])[0][0];

  const why: string[] = [];
  if (winner === 'Starter') {
    if (answers.volume === 'low') why.push("Your ticket volume is well within Starter's range");
    if (answers.channels === 'basic') why.push('Email and chat are exactly what Starter is built for');
    if (answers.coverage === 'business') why.push('Business hours coverage matches the plan perfectly');
    if (answers.languages === 'one') why.push('Single-language support is included');
    if (why.length === 0) why.push('Starter offers a great balance of features for getting started');
  } else if (winner === 'Per Contact') {
    if (answers.predictability === 'spiky' || answers.predictability === 'variable')
      why.push('Pay-per-ticket pricing handles your variable volume without overpaying');
    if (answers.commitment === 'flexible')
      why.push('No monthly minimum means you only pay when you actually need support');
    if (answers.volume === 'medium') why.push('Your ticket range is ideal for the per-contact model');
    why.push('You can scale up or down month-to-month with no commitment');
    if (why.length === 0) why.push('Maximum flexibility for businesses with changing needs');
  } else {
    if (answers.volume === 'enterprise' || answers.volume === 'high')
      why.push('Your high ticket volume needs a dedicated team and infrastructure');
    if (answers.coverage === 'always') why.push('24/7 round-the-clock coverage is included');
    if (answers.languages === 'many') why.push('Multilingual support across 18+ languages');
    if (answers.channels === 'all') why.push('All channels including social media monitoring');
    if (answers.commitment === 'partnership') why.push('Built for long-term, deep partnerships');
    if (why.length === 0) why.push('Enterprise-grade reliability for serious operations');
  }

  return { plan: winner, why };
}

export const PricingRecommender: React.FC = () => {
  const t = useT();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const questions: Question[] = [
    {
      id: 'volume',
      question: t('recommender.q1'),
      options: [
        { value: 'low', label: t('recommender.q1.low') },
        { value: 'medium', label: t('recommender.q1.medium') },
        { value: 'high', label: t('recommender.q1.high') },
        { value: 'enterprise', label: t('recommender.q1.enterprise') },
      ],
    },
    {
      id: 'predictability',
      question: t('recommender.q2'),
      options: [
        { value: 'stable', label: t('recommender.q2.stable') },
        { value: 'variable', label: t('recommender.q2.variable') },
        { value: 'spiky', label: t('recommender.q2.spiky') },
      ],
    },
    {
      id: 'channels',
      question: t('recommender.q3'),
      options: [
        { value: 'basic', label: t('recommender.q3.basic') },
        { value: 'voice', label: t('recommender.q3.voice') },
        { value: 'all', label: t('recommender.q3.all') },
      ],
    },
    {
      id: 'coverage',
      question: t('recommender.q4'),
      options: [
        { value: 'business', label: t('recommender.q4.business') },
        { value: 'extended', label: t('recommender.q4.extended') },
        { value: 'always', label: t('recommender.q4.always') },
      ],
    },
    {
      id: 'languages',
      question: t('recommender.q5'),
      options: [
        { value: 'one', label: t('recommender.q5.one') },
        { value: 'few', label: t('recommender.q5.few') },
        { value: 'many', label: t('recommender.q5.many') },
      ],
    },
    {
      id: 'commitment',
      question: t('recommender.q6'),
      options: [
        { value: 'flexible', label: t('recommender.q6.flexible') },
        { value: 'monthly', label: t('recommender.q6.monthly') },
        { value: 'partnership', label: t('recommender.q6.partnership') },
      ],
    },
  ];

  const highlights: Record<PlanKey, string> = {
    Starter: t('recommender.starter.highlight'),
    'Per Contact': t('recommender.percontact.highlight'),
    Enterprise: t('recommender.enterprise.highlight'),
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('on')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.k-reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const currentQ = questions[step];
  const progress = ((step + (done ? 1 : 0)) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQ.id]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  if (done) {
    const result = recommend(answers);

    return (
      <>
        <Header />
        <main>
          <section
            className="k-hero"
            style={{
              minHeight: '40vh',
              background: 'linear-gradient(132deg, #0e2433 0%, #0f4456 60%, #0a7a8a 100%)',
            }}
          >
            <div
              className="k-hero-left k-reveal"
              style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}
            >
              <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>{t('recommender.result.eyebrow')}</div>
              <h1>
                {t('recommender.result.h1.before')}<br />
                <span className="k-hl">{result.plan}</span> {t('recommender.result.h1.after')}
              </h1>
              <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
                {highlights[result.plan]}
              </p>
            </div>
          </section>

          <section className="k-section" style={{ background: 'white' }}>
            <div style={{ maxWidth: 760, margin: '0 auto' }}>
              <div className="k-reveal" style={{ marginBottom: '2.5rem' }}>
                <div className="k-eyebrow">{t('recommender.result.why')}</div>
                <h2 className="k-sec-h" style={{ marginBottom: '1.5rem' }}>
                  {t('recommender.result.basedOn')}
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {result.why.map((reason, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: '.85rem',
                        padding: '1.2rem 1.4rem',
                        background: '#f5fbfc',
                        border: '1px solid #c8e8ee',
                        borderRadius: 12,
                        alignItems: 'flex-start',
                      }}
                    >
                      <span
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          background: '#00c8c8',
                          color: '#0e2433',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '.85rem',
                          fontWeight: 800,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ fontSize: '.92rem', color: '#0e2433', lineHeight: 1.6 }}>
                        {reason}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '.9rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginTop: '2.5rem',
                }}
                className="k-reveal"
              >
                <Link to="/contact">
                  <button className="k-btn-hp">{t('recommender.result.cta.before')} {result.plan} →</button>
                </Link>
                <Link to="/pricing">
                  <button className="k-btn-hs" style={{ color: '#0e2433', border: '1.5px solid #c8e8ee', background: 'white' }}>
                    {t('recommender.result.compare')}
                  </button>
                </Link>
                <button
                  onClick={handleRestart}
                  className="k-btn-hs"
                  style={{ color: '#5c8892', border: '1.5px solid transparent', background: 'transparent' }}
                >
                  {t('recommender.result.retake')}
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section
          className="k-hero"
          style={{
            minHeight: '40vh',
            background: 'linear-gradient(132deg, #0e2433 0%, #0f4456 60%, #0a7a8a 100%)',
          }}
        >
          <div
            className="k-hero-left k-reveal"
            style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}
          >
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>{t('recommender.eyebrow')}</div>
            <h1>
              {t('recommender.h1.line1')} <span className="k-hl">{t('recommender.h1.line2')}</span>
            </h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              {t('recommender.sub')}
            </p>
          </div>
        </section>

        <section className="k-section" style={{ background: 'white', minHeight: '60vh' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '.7rem',
                  fontSize: '.78rem',
                  color: '#5c8892',
                  fontWeight: 600,
                }}
              >
                <span>{t('recommender.questionOf', { current: String(step + 1), total: String(questions.length) })}</span>
                <span>{t('recommender.percentComplete', { percent: String(Math.round(progress)) })}</span>
              </div>
              <div style={{ height: 6, background: '#e0f0f4', borderRadius: 100, overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #00c8c8, #6ef5f5)',
                    borderRadius: 100,
                    transition: 'width .3s ease',
                  }}
                />
              </div>
            </div>

            <div className="k-reveal">
              <h2
                style={{
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
                  fontWeight: 800,
                  color: '#0e2433',
                  marginBottom: '2rem',
                  lineHeight: 1.3,
                }}
              >
                {currentQ.question}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    style={{
                      width: '100%',
                      padding: '1.1rem 1.4rem',
                      background: 'white',
                      border: '1.5px solid #c8e8ee',
                      borderRadius: 12,
                      fontSize: '.95rem',
                      fontWeight: 600,
                      color: '#0e2433',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'all .15s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00c8c8';
                      e.currentTarget.style.background = '#f0fafc';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#c8e8ee';
                      e.currentTarget.style.background = 'white';
                    }}
                  >
                    <span>{opt.label}</span>
                    <span style={{ color: '#00a8a8', fontSize: '1.2rem' }}>→</span>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  style={{
                    marginTop: '1.5rem',
                    padding: '.6rem 1rem',
                    background: 'transparent',
                    border: 'none',
                    color: '#5c8892',
                    fontSize: '.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  ← {t('recommender.back')}
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PricingRecommender;
