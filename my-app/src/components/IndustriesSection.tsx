import React from 'react';
import { useT } from '../i18n';

const industryImages: Record<string, string> = {
  ecommerce: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
  healthcare: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  financial: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
  sales: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80',
  automotive: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
  saas: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
  booking: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
  hospitality: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
};

const industryGradients: Record<string, string> = {
  ecommerce: 'linear-gradient(135deg, #2c5364 0%, #203a43 50%, #0f2027 100%)',
  healthcare: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
  financial: 'linear-gradient(135deg, #1f4068 0%, #1b1b2f 100%)',
  sales: 'linear-gradient(135deg, #0f4c75 0%, #3282b8 100%)',
  automotive: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
  saas: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)',
  booking: 'linear-gradient(135deg, #1d3557 0%, #457b9d 100%)',
  hospitality: 'linear-gradient(135deg, #355c7d 0%, #6c5b7b 50%, #c06c84 100%)',
};

const industryKeys = ['ecommerce', 'healthcare', 'financial', 'sales', 'automotive', 'saas', 'booking', 'hospitality'] as const;
type IndustryKey = typeof industryKeys[number];

export const IndustriesSection: React.FC = () => {
  const t = useT();

  return (
    <section className="k-section k-ind">
      <div className="k-row k-reveal">
        <div>
          <div className="k-eyebrow">{t('industries.section.eyebrow')}</div>
          <h2 className="k-sec-h">
            {t('industries.section.h2.line1')}<br />
            {t('industries.section.h2.line2')}
          </h2>
        </div>
        <p className="k-sec-sub">{t('industries.section.sub')}</p>
      </div>

      <div className="k-ind-grid k-reveal">
        {industryKeys.map((key: IndustryKey) => (
          <div
            key={key}
            className="k-ind-card"
            style={{ background: industryGradients[key] }}
          >
            <img
              src={industryImages[key]}
              alt={t(`industries.${key}` as Parameters<typeof t>[0])}
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
            />
            <div className="k-ind-card-body">
              <div className="k-ind-card-title">{t(`industries.${key}` as Parameters<typeof t>[0])}</div>
              <div className="k-ind-card-desc">{t(`industries.${key}.desc` as Parameters<typeof t>[0])}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
