import React from 'react';
import { Link } from 'react-router-dom';

export const BusinessDevelopment: React.FC = () => {
  return (
    <section className="k-guarantee" id="business-development">
      <div className="k-reveal" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
        <div className="k-eyebrow" style={{ color: '#6ef5f5', display: 'flex', justifyContent: 'center' }}>
          Business Development
        </div>
        <h2 className="k-sec-h" style={{ color: 'white' }}>
          Strategic CX consulting<br />that drives growth.
        </h2>
        <p className="k-sec-sub" style={{ color: 'rgba(255,255,255,.5)', margin: '1rem auto 2rem' }}>
          Beyond day-to-day support, our consultants help you design end-to-end customer experience strategies — from journey mapping to KPI design and team scaling plans.
        </p>
        <Link to="/contact"><button className="k-btn-hp">Talk to a Consultant →</button></Link>
      </div>
    </section>
  );
};

export default BusinessDevelopment;
