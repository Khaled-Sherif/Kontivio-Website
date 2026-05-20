import React from 'react';
import { useT } from '../i18n';

const teamPhotoHero = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80';

const memberPhotos = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
];

export const BoardOfDirectors: React.FC = () => {
  const t = useT();

  const members = [
    { name: 'Sarah K.', role: 'Senior Support Lead', bio: '7 years in enterprise CX. Specialises in SaaS and e-commerce accounts across EMEA.', photo: memberPhotos[0] },
    { name: 'James M.', role: 'Head of Operations', bio: 'Oversees agent training, SLA performance, and client onboarding from day one.', photo: memberPhotos[1] },
    { name: t('team.value2'), role: '18+ Languages · Global Coverage', bio: 'Native-speaking agents across Arabic, French, English, Spanish, German and more — ready to represent your brand.', photo: memberPhotos[2] },
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
          <img src={teamPhotoHero} alt="Kontivio team at work" loading="lazy" />
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
            <div className="k-team-card-img"><img src={m.photo} alt={m.name} loading="lazy" /></div>
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
