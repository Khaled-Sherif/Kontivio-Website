import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [data, setData] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '.7rem .9rem', fontSize: '.88rem',
    border: '1px solid #c8e8ee', borderRadius: 8,
    fontFamily: 'Inter, sans-serif', color: '#0e2433',
  };

  if (sent) {
    return (
      <div style={{ background: 'white', border: '1px solid #00c8c8', borderRadius: 16, padding: '2.5rem', textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(0,200,200,.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1rem' }}>✓</div>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0e2433', marginBottom: '.4rem' }}>Message received!</h3>
        <p style={{ fontSize: '.85rem', color: '#5c8892' }}>We'll be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ background: 'white', border: '1px solid #c8e8ee', borderRadius: 16, padding: '2rem', boxShadow: '0 10px 30px rgba(14,36,51,.06)', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor="name">Your Name</label>
          <input id="name" type="text" required style={inputStyle} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor="email">Email</label>
          <input id="email" type="email" required style={inputStyle} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        </div>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor="company">Company</label>
        <input id="company" type="text" style={inputStyle} value={data.company} onChange={(e) => setData({ ...data, company: e.target.value })} />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor="message">How can we help?</label>
        <textarea id="message" rows={5} required placeholder="Tell us about your customer support needs..." style={{ ...inputStyle, resize: 'vertical' }} value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} />
      </div>
      <button type="submit" className="k-btn-hp" style={{ width: '100%', marginTop: '.4rem' }}>Send Message</button>
    </form>
  );
};

export default ContactForm;
