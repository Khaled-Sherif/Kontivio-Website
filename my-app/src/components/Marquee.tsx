import React from 'react';
import { useT } from '../i18n';

export const Marquee: React.FC = () => {
  const t = useT();
  const items = [
    t('marquee.liveChat'),
    t('marquee.voice'),
    t('marquee.email'),
    t('marquee.social'),
    t('marquee.ai'),
    t('marquee.languages'),
    t('marquee.coverage'),
    t('marquee.zeroLockIn'),
    t('marquee.sla'),
  ];
  const allItems = [...items, ...items];
  return (
    <div className="k-mq">
      <div className="k-mq-inner">
        {allItems.map((label, i) => (
          <div key={i} className="k-mi">{label}</div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
