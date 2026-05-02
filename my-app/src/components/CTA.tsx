import React from 'react';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  return (
    <section className="k-cta-sec">
      <h2>
        Ready to give your customers<br />
        the support they deserve?
      </h2>
      <p>Tell us about your business — we'll build a plan that fits.</p>
      <p className="k-cta-note">
        Limited onboarding spots available to ensure quality for every client.
      </p>
      <div className="k-cta-btns">
        <Link to="/contact"><button className="k-btn-cta-d">Get a Custom Quote →</button></Link>
        <Link to="/contact"><button className="k-btn-cta-o">Schedule a Call</button></Link>
      </div>
    </section>
  );
};

export default CTA;
