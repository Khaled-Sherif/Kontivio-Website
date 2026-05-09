import React from 'react';

const items = [
  'Live Chat Support',
  'Voice & Call Center',
  'Email & Ticketing',
  'Social Media',
  'AI-Augmented Agents',
  '18+ Languages',
  '24/7 Coverage',
  'Zero Lock-in',
  'SLA Guaranteed',
];

export const Marquee: React.FC = () => {
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
