import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useT } from '../i18n';

export const ApplyNow: React.FC = () => {
  const t = useT();
  const [params] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: params.get('position') || '',
    linkedIn: '',
    coverLetter: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvError('');
    const file = e.target.files?.[0];
    if (!file) {
      setCvFile(null);
      return;
    }
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const validExt = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!validTypes.includes(file.type) && !validExt) {
      setCvError(t('apply.field.cv.error.type'));
      setCvFile(null);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setCvError(t('apply.field.cv.error.size'));
      setCvFile(null);
      return;
    }
    setCvFile(file);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      setCvError(t('apply.field.cv.error.required'));
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main
          className="k-section"
          style={{
            textAlign: 'center',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(0,200,200,.15)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                marginBottom: '1rem',
              }}
            >
              ✓
            </div>
            <h1 className="k-sec-h">{t('apply.success.h1')}</h1>
            <p className="k-sec-sub" style={{ margin: '0 auto' }}>
              {t('apply.success.sub')}
            </p>
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

  const fields = [
    { id: 'fullName', label: t('apply.field.fullName'), type: 'text', required: true },
    { id: 'email', label: t('apply.field.email'), type: 'email', required: true },
    { id: 'phone', label: t('apply.field.phone'), type: 'tel', required: false },
    { id: 'position', label: t('apply.field.position'), type: 'text', required: true },
    { id: 'linkedIn', label: t('apply.field.linkedin'), type: 'url', required: false },
  ] as const;

  return (
    <>
      <Header />
      <main className="k-section" style={{ background: 'white' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <div className="k-eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>
              {t('apply.eyebrow')}
            </div>
            <h1 className="k-sec-h" style={{ textAlign: 'center' }}>
              {data.position
                ? t('apply.h1.specific', { position: data.position })
                : t('apply.h1.generic')}
            </h1>
          </div>

          <form
            onSubmit={submit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
          >
            {fields.map((f) => (
              <div key={f.id}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '.4rem',
                    fontSize: '.82rem',
                    fontWeight: 600,
                    color: '#0e2433',
                  }}
                  htmlFor={f.id}
                >
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
              <label
                style={{
                  display: 'block',
                  marginBottom: '.4rem',
                  fontSize: '.82rem',
                  fontWeight: 600,
                  color: '#0e2433',
                }}
                htmlFor="cv"
              >
                {t('apply.field.cv')} <span style={{ color: '#e15a5a' }}>*</span>
              </label>
              <label
                htmlFor="cv"
                style={{
                  display: 'block',
                  border: cvError ? '2px dashed #e15a5a' : cvFile ? '2px solid #00c8c8' : '2px dashed #c8e8ee',
                  borderRadius: 10,
                  padding: '1.5rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: cvFile ? 'rgba(0,200,200,.05)' : '#fafdfd',
                  transition: 'all .2s',
                }}
              >
                {cvFile ? (
                  <>
                    <div style={{ fontSize: '1.4rem', marginBottom: '.4rem' }}>📄</div>
                    <div style={{ fontSize: '.88rem', fontWeight: 700, color: '#0e2433' }}>
                      {cvFile.name}
                    </div>
                    <div style={{ fontSize: '.75rem', color: '#5c8892', marginTop: '.3rem' }}>
                      {(cvFile.size / 1024).toFixed(1)} KB · {t('apply.field.cv.change')}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: '1.4rem', marginBottom: '.4rem' }}>📎</div>
                    <div style={{ fontSize: '.88rem', fontWeight: 600, color: '#0e2433' }}>
                      {t('apply.field.cv.upload')}
                    </div>
                    <div style={{ fontSize: '.75rem', color: '#5c8892', marginTop: '.3rem' }}>
                      {t('apply.field.cv.types')}
                    </div>
                  </>
                )}
                <input
                  id="cv"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </label>
              {cvError && (
                <div
                  style={{
                    fontSize: '.78rem',
                    color: '#e15a5a',
                    marginTop: '.4rem',
                    fontWeight: 600,
                  }}
                >
                  ⚠ {cvError}
                </div>
              )}
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  marginBottom: '.4rem',
                  fontSize: '.82rem',
                  fontWeight: 600,
                  color: '#0e2433',
                }}
                htmlFor="coverLetter"
              >
                {t('apply.field.coverLetter')}
              </label>
              <textarea
                id="coverLetter"
                rows={6}
                placeholder={t('apply.field.coverLetter.placeholder')}
                style={{ ...inputStyle, resize: 'vertical' }}
                value={data.coverLetter}
                onChange={(e) => setData({ ...data, coverLetter: e.target.value })}
              />
            </div>

            <button type="submit" className="k-btn-hp" style={{ marginTop: '.5rem' }}>
              {t('apply.submit')}
            </button>

            <p style={{ fontSize: '.72rem', color: '#5c8892', textAlign: 'center', marginTop: '.5rem' }}>
              {t('apply.disclaimer')}
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ApplyNow;
