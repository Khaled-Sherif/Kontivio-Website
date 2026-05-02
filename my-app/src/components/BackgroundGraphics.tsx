import React from 'react';

interface Props {
  variant?: 'grid' | 'glow' | 'dots';
  className?: string;
}

export const BackgroundGraphics: React.FC<Props> = ({ variant = 'grid', className = '' }) => {
  if (variant === 'glow') {
    return (
      <div
        aria-hidden="true"
        className={className}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 58% 55% at 72% 46%, rgba(0,200,200,.18) 0%, transparent 68%), radial-gradient(ellipse 35% 38% at 16% 80%, rgba(0,200,200,.09) 0%, transparent 60%)',
        }}
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',
        backgroundSize: '54px 54px',
      }}
    />
  );
};

export default BackgroundGraphics;
