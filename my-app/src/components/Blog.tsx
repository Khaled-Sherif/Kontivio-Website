import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

const posts = [
  {
    slug: 'how-to-scale-customer-support',
    title: 'How to Scale Customer Support Without Losing Quality',
    excerpt: 'A practical playbook for growing teams without sacrificing the human touch.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'Apr 15, 2026',
    category: 'Operations',
  },
  {
    slug: 'ai-and-human-agents',
    title: 'AI + Human Agents: The Hybrid Model That Wins',
    excerpt: 'Why combining AI tooling with empathetic human agents outperforms either approach alone.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'Apr 8, 2026',
    category: 'Technology',
  },
  {
    slug: 'multilingual-cx-mistakes',
    title: '5 Common Mistakes in Multilingual CX',
    excerpt: 'Translation isn\u2019t enough. Here\u2019s what truly localized customer experience looks like.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: 'Mar 28, 2026',
    category: 'CX Strategy',
  },
];

export const Blog: React.FC = () => {
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
            <div className="k-eyebrow" style={{ color: '#6ef5f5' }}>Insights</div>
            <h1>The Kontivio Blog</h1>
            <p className="k-hero-sub" style={{ margin: '0 auto', maxWidth: '60ch' }}>
              Strategy, insights, and how-tos for building world-class customer experiences.
            </p>
          </div>
        </section>

        <section className="k-section" style={{ background: 'white' }}>
          <div className="k-svc-grid k-reveal" style={{ maxWidth: 1200, margin: '0 auto' }}>
            {posts.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="k-team-card"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className="k-team-card-img" style={{ height: 200 }}>
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="k-team-card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.4rem', fontSize: '.7rem' }}>
                    <span style={{ color: '#00a8a8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>{p.category}</span>
                    <span style={{ color: '#5c8892' }}>{p.date}</span>
                  </div>
                  <div className="k-team-card-name" style={{ marginBottom: '.4rem' }}>{p.title}</div>
                  <div className="k-team-card-bio">{p.excerpt}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
