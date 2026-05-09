import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CTA } from './CTA';

interface Industry {
  name: string;
  description: string;
  image: string;
  gradient: string;
}

/**
 * Industry data — uses Unsplash as primary image source, with a unique
 * gradient fallback that's always visible even if the image is blocked.
 *
 * To use your own photos: swap the `image` URL with your file path
 * (e.g. '/images/industries/ecommerce.jpg' from your public/ folder).
 */
const industries: Industry[] = [
  {
    name: 'E-commerce',
    description:
      'Order tracking, returns, refunds, and product Q&A handled with care — keeping cart abandonment low and customer loyalty high.',
    image:
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    gradient: 'linear-gradient(135deg, #2c5364 0%, #203a43 50%, #0f2027 100%)',
  },
  {
    name: 'Healthcare',
    description:
      'HIPAA-aware support for patient inquiries, appointment scheduling, and medical billing — with empathy and precision.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
  },
  {
    name: 'Financial Services',
    description:
      'Secure, compliant support for banking, fintech, and investment platforms — handling sensitive queries with discretion.',
    image:
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    gradient: 'linear-gradient(135deg, #1f4068 0%, #1b1b2f 100%)',
  },
  {
    name: 'Sales',
    description:
      'Lead qualification, outbound calling, demo scheduling, and follow-up — converting interest into revenue at scale.',
    image:
      'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80',
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #3282b8 100%)',
  },
  {
    name: 'Automotive',
    description:
      'Service appointments, parts inquiries, recall management, and roadside assistance — keeping drivers moving forward.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    gradient: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
  },
  {
    name: 'SaaS',
    description:
      'Technical support, onboarding, billing, and feature questions — keeping your users productive and your churn low.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    gradient: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)',
  },
  {
    name: 'Booking & Travel',
    description:
      'Reservations, modifications, cancellations, and travel emergencies — supporting customers across time zones, 24/7.',
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    gradient: 'linear-gradient(135deg, #1d3557 0%, #457b9d 100%)',
  },
  {
    name: 'Hospitality',
    description:
      'Front-desk overflow, concierge support, guest requests, and post-stay follow-up — protecting your hospitality reputation.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    gradient: 'linear-gradient(135deg, #355c7d 0%, #6c5b7b 50%, #c06c84 100%)',
  },
];

export const Industries: React.FC = () => {
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
        <section
          className="k-hero"
          style={{
            minHeight: '60vh',
            background: 'linear-gradient(132deg, #0e2433 0%, #0f4456 60%, #0a7a8a 100%)',
          }}
        >
          <div
            className="k-hero-left k-reveal"
            style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}
          >
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>Industries</div>
            <h1>
              Trusted across<br />
              <span className="k-hl">every industry.</span>
            </h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              From e-commerce to healthcare, hospitality to SaaS — our agents are trained for the unique demands of your industry, with deep domain expertise and compliance know-how.
            </p>
          </div>
        </section>

        <section className="k-section k-ind">
          <div className="k-row k-reveal">
            <div>
              <div className="k-eyebrow">Industries We Serve</div>
              <h2 className="k-sec-h">
                Specialized expertise<br />
                for your sector.
              </h2>
            </div>
            <p className="k-sec-sub">
              Each industry has unique workflows, compliance needs, and customer expectations. Our agents are trained accordingly.
            </p>
          </div>

          <div className="k-ind-grid k-reveal">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="k-ind-card"
                style={{ background: ind.gradient }}
              >
                {/* Image overlay — if it loads, it covers the gradient. If blocked, gradient remains visible. */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
                <div className="k-ind-card-body">
                  <div className="k-ind-card-title">{ind.name}</div>
                  <div className="k-ind-card-desc">{ind.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Industries;
