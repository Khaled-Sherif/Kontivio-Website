import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ContactForm } from './ContactForm';
import { useT } from '../i18n';

export const ContactUs: React.FC = () => {
  const t = useT();
  const [params] = useSearchParams();
  const isScheduleCall = params.get('intent') === 'schedule-call';

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('on')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.k-reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="k-hero" style={{ minHeight: '50vh', background: 'linear-gradient(132deg, #0e2433 0%, #0f4456 60%, #0a7a8a 100%)' }}>
          <div className="k-hero-left k-reveal" style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>
              {isScheduleCall ? t('contact.schedule.eyebrow') : t('contact.eyebrow')}
            </div>
            <h1>
              {isScheduleCall ? (
                <>{t('contact.schedule.h1.line1')}<br />{t('contact.schedule.h1.line2')}</>
              ) : (
                <>{t('contact.h1.line1')}<br />{t('contact.h1.line2')}</>
              )}
            </h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              {isScheduleCall ? t('contact.schedule.sub') : t('contact.sub')}
            </p>
          </div>
        </section>

        <section className="k-section" style={{ background: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem' }} className="k-reveal">
            <div>
              <h2 className="k-sec-h" style={{ fontSize: '1.7rem', marginBottom: '1rem' }}>
                {isScheduleCall ? t('contact.schedule.expect') : t('contact.reach')}
              </h2>
              {isScheduleCall ? (
                <>
                  <p className="k-sec-sub" style={{ marginBottom: '2rem' }}>{t('contact.schedule.expectSub')}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {([1, 2, 3] as const).map((n) => (
                      <div key={n}>
                        <div className="k-eyebrow">{t(`contact.schedule.step${n}` as Parameters<typeof t>[0])}</div>
                        <div style={{ fontSize: '.9rem', fontWeight: 600, color: '#0e2433' }}>{t(`contact.schedule.step${n}.title` as Parameters<typeof t>[0])}</div>
                        <div style={{ fontSize: '.78rem', color: '#5c8892', marginTop: 4 }}>{t(`contact.schedule.step${n}.desc` as Parameters<typeof t>[0])}</div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="k-sec-sub" style={{ marginBottom: '2rem' }}>{t('contact.reachSub')}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                      <div className="k-eyebrow">{t('contact.label.email')}</div>
                      <a href="mailto:contactus@kontivio.com" style={{ fontSize: '.9rem', fontWeight: 600, color: '#0e2433', textDecoration: 'none' }}>contactus@kontivio.com</a>
                    </div>
                    <div>
                      <div className="k-eyebrow">{t('contact.label.hq')}</div>
                      <div style={{ fontSize: '.9rem', fontWeight: 600, color: '#0e2433' }}>{t('contact.value.hq')}</div>
                    </div>
                    <div>
                      <div className="k-eyebrow">{t('contact.label.hours')}</div>
                      <div style={{ fontSize: '.9rem', fontWeight: 600, color: '#0e2433' }}>{t('contact.value.hours')}</div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <ContactForm scheduleCall={isScheduleCall} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
