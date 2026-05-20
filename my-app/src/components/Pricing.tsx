import React from 'react';
import { Link } from 'react-router-dom';
import { useT } from '../i18n';

interface PricingProps { hideHeader?: boolean; }

export const Pricing: React.FC<PricingProps> = ({ hideHeader = false }) => {
  const t = useT();
  const plans = [
    {
      name: t('pricing.starter.name'),
      tagline: t('pricing.starter.tagline'),
      description: t('pricing.starter.desc'),
      feats: [t('pricing.starter.f1'), t('pricing.starter.f2'), t('pricing.starter.f3'), t('pricing.starter.f4'), t('pricing.starter.f5')],
      cta: t('pricing.cta.getStarted'),
      hot: false,
    },
    {
      name: t('pricing.percontact.name'),
      tagline: t('pricing.percontact.tagline'),
      description: t('pricing.percontact.desc'),
      feats: [t('pricing.percontact.f1'), t('pricing.percontact.f2'), t('pricing.percontact.f3'), t('pricing.percontact.f4'), t('pricing.percontact.f5')],
      cta: t('pricing.cta.getStarted'),
      hot: true,
    },
    {
      name: t('pricing.enterprise.name'),
      tagline: t('pricing.enterprise.tagline'),
      description: t('pricing.enterprise.desc'),
      feats: [t('pricing.enterprise.f1'), t('pricing.enterprise.f2'), t('pricing.enterprise.f3'), t('pricing.enterprise.f4'), t('pricing.enterprise.f5')],
      cta: t('pricing.cta.requestQuote'),
      hot: false,
    },
  ];
  return (
    <section className="k-section k-pricing" id="pricing">
      {!hideHeader && (
        <div className="k-row k-reveal">
          <div>
            <div className="k-eyebrow">{t('pricing.eyebrow')}</div>
            <h2 className="k-sec-h">{t('pricing.h2.line1')}<br />{t('pricing.h2.line2')}</h2>
          </div>
          <p className="k-sec-sub">{t('pricing.sub')}</p>
        </div>
      )}
      <div className="k-plan-grid k-reveal">
        {plans.map((p, i) => (
          <div key={i} className={`k-plan ${p.hot ? 'hot' : ''}`}>
            {p.hot && <div className="k-plan-badge">{t('pricing.badge.popular')}</div>}
            <div className="k-plan-name">{p.name}</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3, color: p.hot ? 'white' : '#0e2433', marginBottom: '.5rem', marginTop: '.4rem' }}>{p.tagline}</div>
            <p style={{ fontSize: '.82rem', lineHeight: 1.7, color: p.hot ? 'rgba(255,255,255,.65)' : '#5c8892', marginBottom: '1.4rem' }}>{p.description}</p>
            <div className="k-plan-div" />
            <ul className="k-plan-feats">
              {p.feats.map((f, j) => (<li key={j}><span className="k-ck">✓</span> {f}</li>))}
            </ul>
            <Link to="/contact"><button className="k-plan-btn">{p.cta}</button></Link>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', marginTop: '1.8rem', fontSize: '.8rem', color: '#5c8892' }}>
        💬 {t('pricing.notSure')}{' '}
        <Link to="/pricing/recommend" style={{ color: '#00a8a8', fontWeight: 600 }}>{t('pricing.takeQuiz')}</Link>{' '}
        {t('pricing.recommendIntro')}
      </p>
    </section>
  );
};

export default Pricing;
