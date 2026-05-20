import React from 'react';

const stats = [
  { v: '<60s', l: 'Response SLA' },
  { v: '18+', l: 'Languages' },
  { v: '24/7', l: 'Coverage' },
  { v: '0', l: 'Lock-in' },
];

export const Stats: React.FC = () => {
  return (
    <div className="k-hstats">
      {stats.map((s) => (
        <div key={s.l} className="k-hs">
          <div className="k-hs-n">{s.v}</div>
          <div className="k-hs-l">{s.l}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
