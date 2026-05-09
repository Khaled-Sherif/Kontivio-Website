import React from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '1,200',
    per: 'per month · up to 500 tickets',
    feats: ['Email & Chat Support', '1 Dedicated Agent', 'Business Hours Coverage', 'Monthly Reports', 'English Language'],
    cta: 'Get Started',
    hot: false,
  },
  {
    name: 'Growth',
    price: '3,800',
    per: 'per month · up to 2,000 tickets',
    feats: ['Email, Chat & Voice', '3 Dedicated Agents', '16/7 Coverage', 'Weekly Reports & QA', '3 Languages Included'],
    cta: 'Get Started',
    hot: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: 'tailored to your volume',
    feats: ['All Channels + Social', 'Dedicated Team', '24/7 Coverage', 'Real-time Dashboard', '18+ Languages'],
    cta: 'Request a Quote',
    hot: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section className="k-section k-pricing" id="pricing">
      <div className="k-row k-reveal">
        <div>
          <div className="k-eyebrow">Pricing</div>
          <h2 className="k-sec-h">Simple, honest pricing.<br />No hidden surprises.</h2>
        </div>
        <p className="k-sec-sub">No setup fees. No hidden costs. Just great support that grows with you.</p>
      </div>
      <div className="k-plan-grid k-reveal">
        {plans.map((p) => (
          <div key={p.name} className={`k-plan ${p.hot ? 'hot' : ''}`}>
            {p.hot && <div className="k-plan-badge">Most Popular</div>}
            <div className="k-plan-name">{p.name}</div>
            <div className="k-plan-price" style={p.price === 'Custom' ? { fontSize: '2rem' } : {}}>
              {p.price !== 'Custom' && <sup>$</sup>}{p.price}
            </div>
            <div className="k-plan-per">{p.per}</div>
            <div className="k-plan-div" />
            <ul className="k-plan-feats">
              {p.feats.map((f) => (<li key={f}><span className="k-ck">✓</span> {f}</li>))}
            </ul>
            <Link to="/contact"><button className="k-plan-btn">{p.cta}</button></Link>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', marginTop: '1.8rem', fontSize: '.8rem', color: '#5c8892' }}>
        💬 Not sure which plan fits?{' '}
        <Link to="/contact" style={{ color: '#00a8a8', fontWeight: 600 }}>Book a free 20-min consultation</Link> — no pressure, no pitch.
      </p>
    </section>
  );
};

export default Pricing;
