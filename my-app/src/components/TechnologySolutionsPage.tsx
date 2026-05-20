import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CTA } from './CTA';
import { useT } from '../i18n';

export const TechnologySolutionsPage: React.FC = () => {
  const t = useT();

  const solutions = [
    {
      eyebrow: t('tsp.sol1.eyebrow'),
      title: t('tsp.sol1.title'),
      description: t('tsp.sol1.desc'),
      features: [t('tsp.sol1.f1'), t('tsp.sol1.f2'), t('tsp.sol1.f3'), t('tsp.sol1.f4'), t('tsp.sol1.f5')],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      eyebrow: t('tsp.sol2.eyebrow'),
      title: t('tsp.sol2.title'),
      description: t('tsp.sol2.desc'),
      features: [t('tsp.sol2.f1'), t('tsp.sol2.f2'), t('tsp.sol2.f3'), t('tsp.sol2.f4'), t('tsp.sol2.f5')],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      eyebrow: t('tsp.sol3.eyebrow'),
      title: t('tsp.sol3.title'),
      description: t('tsp.sol3.desc'),
      features: [t('tsp.sol3.f1'), t('tsp.sol3.f2'), t('tsp.sol3.f3'), t('tsp.sol3.f4'), t('tsp.sol3.f5')],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      eyebrow: t('tsp.sol4.eyebrow'),
      title: t('tsp.sol4.title'),
      description: t('tsp.sol4.desc'),
      features: [t('tsp.sol4.f1'), t('tsp.sol4.f2'), t('tsp.sol4.f3'), t('tsp.sol4.f4'), t('tsp.sol4.f5')],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
  ];

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
        <section className="k-hero" style={{ minHeight: '60vh', background: 'linear-gradient(132deg, #0e2433 0%, #0f4456 60%, #0a7a8a 100%)' }}>
          <div className="k-hero-left k-reveal" style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>{t('tsp.eyebrow')}</div>
            <h1>
              {t('tsp.h1.line1')}<br />
              <span className="k-hl">{t('tsp.h1.line2')}</span>
            </h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              {t('tsp.sub')}
            </p>
            <div className="k-hero-btns" style={{ justifyContent: 'center', marginTop: '2rem' }}>
              <Link to="/contact">
                <button className="k-btn-hp">{t('tsp.cta.engineering')} →</button>
              </Link>
              <Link to="/services/technology-partners">
                <button className="k-btn-hs">{t('tsp.cta.viewPartners')}</button>
              </Link>
            </div>
          </div>
        </section>

        {solutions.map((sol) => (
          <section key={sol.title} className="k-sol-section">
            <div className="k-sol-grid k-reveal">
              <div className="k-sol-img">
                <img src={sol.image} alt={sol.title} loading="lazy" />
              </div>
              <div className="k-sol-text">
                <div className="k-eyebrow">{sol.eyebrow}</div>
                <h3>{sol.title}</h3>
                <p>{sol.description}</p>
                <ul className="k-sol-feats">
                  {sol.features.map((f) => (
                    <li key={f}>
                      <span className="k-ck">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default TechnologySolutionsPage;
