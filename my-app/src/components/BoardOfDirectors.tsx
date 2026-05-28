import React from 'react';
import { useT } from '../i18n';

export const BoardOfDirectors: React.FC = () => {
  const t = useT();

  const members = [
    { name: 'Sarah K.', role: 'Senior Support Lead', bio: '7 years in enterprise CX. Specialises in SaaS and e-commerce accounts across EMEA.' },
    { name: 'James M.', role: 'Head of Operations', bio: 'Oversees agent training, SLA performance, and client onboarding from day one.' },
    { name: t('team.value2'), role: '18+ Languages · Global Coverage', bio: 'Native-speaking agents across Arabic, French, English, Spanish, German and more — ready to represent your brand.' },
  ];

  const values = [
    t('team.value1'),
    t('team.value2'),
    t('team.value3'),
    t('team.value4'),
  ];

  return (
    <section className="k-team">
      <div className="k-team-intro">
        <div className="k-team-photo-hero k-reveal">
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #c8e8ee 0%, #a0d0dc 100%)' }} />
          <div className="k-team-photo-hero-caption">
            <div className="k-tph-label">{t('team.photo.label')}</div>
            <div className="k-tph-text">{t('team.photo.text.line1')}<br />{t('team.photo.text.line2')}</div>
          </div>
        </div>
        <div className="k-team-text k-reveal">
          <div className="k-eyebrow">{t('team.eyebrow')}</div>
          <h2 className="k-sec-h">{t('team.h2.line1')}<br />{t('team.h2.line2')}</h2>
          <p>{t('team.intro1')}</p>
          <p>{t('team.intro2')}</p>
          <div className="k-team-values">
            {values.map((v) => (<div key={v} className="k-tv">{v}</div>))}
          </div>
        </div>
      </div>
      <div className="k-team-grid k-reveal">
        {members.map((m) => (
          <div key={m.name} className="k-team-card">
            <div className="k-team-card-img">
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(160deg, #d6eef5 0%, #b0d8e8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="20" r="12" fill="#7ab8ce" />
                  <ellipse cx="28" cy="46" rx="20" ry="12" fill="#7ab8ce" />
                </svg>
              </div>
            </div>
            <div className="k-team-card-body">
              <div className="k-team-card-name">{m.name}</div>
              <div className="k-team-card-role">{m.role}</div>
              <div className="k-team-card-bio">{m.bio}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoardOfDirectors;
