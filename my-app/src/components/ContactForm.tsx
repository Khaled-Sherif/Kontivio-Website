import React, { useState } from 'react';
import { useT } from '../i18n';

interface ContactFormProps {
  scheduleCall?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ scheduleCall = false }) => {
  const t = useT();
  const [data, setData] = useState({ name: '', email: '', company: '', message: '', preferredTime: '', timezone: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/contacts/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          message: data.message,
          preferred_time: data.preferredTime,
          timezone: data.timezone,
          submission_type: scheduleCall ? 'schedule' : 'contact',
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const firstError = Object.values(body)[0];
        throw new Error(Array.isArray(firstError) ? firstError[0] : 'Submission failed. Please try again.');
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
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
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0e2433', marginBottom: '.4rem' }}>
          {scheduleCall ? t('form.success.schedule') : t('form.success.message')}
        </h3>
        <p style={{ fontSize: '.85rem', color: '#5c8892' }}>
          {scheduleCall ? t('form.success.schedule.sub') : t('form.success.message.sub')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ background: 'white', border: '1px solid #c8e8ee', borderRadius: 16, padding: '2rem', boxShadow: '0 10px 30px rgba(14,36,51,.06)', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor="name">{t('form.name')}</label>
          <input id="name" type="text" required style={inputStyle} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor="email">{t('form.email')}</label>
          <input id="email" type="email" required style={inputStyle} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        </div>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor="company">{t('form.company')}</label>
        <input id="company" type="text" style={inputStyle} value={data.company} onChange={(e) => setData({ ...data, company: e.target.value })} />
      </div>

      {scheduleCall && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor="preferredTime">{t('form.preferredTime')}</label>
            <select id="preferredTime" style={inputStyle} value={data.preferredTime} onChange={(e) => setData({ ...data, preferredTime: e.target.value })}>
              <option value="">{t('form.preferredTime.select')}</option>
              <option>{t('form.preferredTime.morning')}</option>
              <option>{t('form.preferredTime.afternoon')}</option>
              <option>{t('form.preferredTime.evening')}</option>
              <option>{t('form.preferredTime.flexible')}</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor="timezone">{t('form.timezone')}</label>
            <input id="timezone" type="text" placeholder={t('form.timezone.placeholder')} style={inputStyle} value={data.timezone} onChange={(e) => setData({ ...data, timezone: e.target.value })} />
          </div>
        </div>
      )}

      <div>
        <label style={{ display: 'block', marginBottom: '.4rem', fontSize: '.82rem', fontWeight: 600, color: '#0e2433' }} htmlFor="message">
          {scheduleCall ? t('form.message.schedule') : t('form.message')}
        </label>
        <textarea id="message" rows={5} required placeholder={scheduleCall ? t('form.message.placeholder.schedule') : t('form.message.placeholder')} style={{ ...inputStyle, resize: 'vertical' }} value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} />
      </div>
      {error && (
        <p style={{ fontSize: '.83rem', color: '#c0392b', background: '#fdf0ef', border: '1px solid #f5c6c2', borderRadius: 8, padding: '.6rem .9rem', margin: 0 }}>
          {error}
        </p>
      )}
      <button type="submit" className="k-btn-hp" style={{ width: '100%', marginTop: '.4rem', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }} disabled={loading}>
        {loading ? t('form.submitting') : (scheduleCall ? t('form.submit.schedule') : t('form.submit.message'))}
      </button>
    </form>
  );
};

export default ContactForm;
