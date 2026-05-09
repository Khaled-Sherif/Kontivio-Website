import React from 'react';

const partners = ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Freshdesk', 'Shopify', 'Slack', 'Microsoft Teams'];

export const TechnologyPartners: React.FC = () => {
  return (
    <section className="k-section" style={{ background: 'white' }}>
      <div className="k-reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="k-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>Technology Partners</div>
        <h2 className="k-sec-h" style={{ textAlign: 'center' }}>We integrate with your stack</h2>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="k-reveal">
        {partners.map((p) => (
          <div key={p} style={{ height: 80, border: '1px solid #c8e8ee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.88rem', fontWeight: 700, color: '#0e2433', background: '#f5fbfc' }}>{p}</div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyPartners;
