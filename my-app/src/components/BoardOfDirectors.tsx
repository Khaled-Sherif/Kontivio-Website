import React from 'react';

const teamPhotoHero = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80';

const members = [
  {
    name: 'Sarah K.',
    role: 'Senior Support Lead',
    bio: '7 years in enterprise CX. Specialises in SaaS and e-commerce accounts across EMEA.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'James M.',
    role: 'Head of Operations',
    bio: 'Oversees agent training, SLA performance, and client onboarding from day one.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Our Agent Network',
    role: '18+ Languages · Global Coverage',
    bio: 'Native-speaking agents across Arabic, French, English, Spanish, German and more — ready to represent your brand.',
    photo: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

const values = [
  'Empathy-first communication in every interaction',
  'Multilingual native speakers — not translators',
  'Continuous QA and performance coaching',
  'Aligned with your brand, tone, and values',
];

export const BoardOfDirectors: React.FC = () => {
  return (
    <section className="k-team">
      <div className="k-team-intro">
        <div className="k-team-photo-hero k-reveal">
          <img src={teamPhotoHero} alt="Kontivio team at work" loading="lazy" />
          <div className="k-team-photo-hero-caption">
            <div className="k-tph-label">Our Operations</div>
            <div className="k-tph-text">
              Real people,<br />
              delivering real results.
            </div>
          </div>
        </div>
        <div className="k-team-text k-reveal">
          <div className="k-eyebrow">Who We Are</div>
          <h2 className="k-sec-h">
            A team built around<br />
            your customers.
          </h2>
          <p>
            Kontivio is a team of customer experience specialists, linguists, and support professionals united by one goal — making your customers feel genuinely cared for, in any language, at any hour.
          </p>
          <p>
            We don't hire generalists. Every agent is selected for empathy, communication skill, and domain expertise — then trained specifically on your product before handling a single interaction.
          </p>
          <div className="k-team-values">
            {values.map((v) => (
              <div key={v} className="k-tv">{v}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="k-team-grid k-reveal">
        {members.map((m) => (
          <div key={m.name} className="k-team-card">
            <div className="k-team-card-img">
              <img src={m.photo} alt={m.name} loading="lazy" />
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
