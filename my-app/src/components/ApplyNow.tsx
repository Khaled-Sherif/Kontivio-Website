import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const ApplyNow: React.FC = () => {
  const [params] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: params.get('position') || '',
    coverLetter: '',
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main className="k-section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(0,200,200,.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1rem' }}>✓</div>
            <h1 className="k-sec-h">Application received</h1>
            <p className="k-sec-sub" style={{ margin: '0 auto' }}>We'll review and get back to you within 5 business days.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '.7rem .9rem',
    fontSize: '.88rem',
    border: '1px solid #c8e8ee',
    borderRadius: 8,
    fontFamily: 'Inter, sans-serif',
    color: '#0e2433',
  };

  return (
    <>
      <Header />
      <main className="k-section" style={{ background: 'white' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <div className="k-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>Apply Now</div>
            <h1 className="k-sec-h" style={{ textAlign: 'center' }}>
              {data.position ? `Apply for ${data.position}` : 'Submit your application'}
            </h1>
          </div>

          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {[
              { id: 'fullName', label: 'Full Name', type: 'text', required: true },
              { id: 'email', label: 'Email', type: 'email', required: true },
              { id: 'phone', label: 'Phone', type: 'tel', required: false },
              { id: 'position', label: 'Position', type: 'text', required: true },
            ].map((f) => (
              <div key={f.id}>
                <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor={f.id}>
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required={f.required}
                  style={inputStyle}
                  value={data[f.id as keyof typeof data] as string}
                  onChange={(e) => setData({ ...data, [f.id]: e.target.value })}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor="coverLetter">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                rows={6}
                placeholder="Tell us why you'd be a great fit..."
                style={{ ...inputStyle, resize: 'vertical' }}
                value={data.coverLetter}
                onChange={(e) => setData({ ...data, coverLetter: e.target.value })}
              />
            </div>
            <button type="submit" className="k-btn-hp" style={{ marginTop: '.5rem' }}>
              Submit Application
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ApplyNow;
