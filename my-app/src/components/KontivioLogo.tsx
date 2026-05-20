import React from 'react';

interface KontivioLogoProps {
  size?: number;
  showText?: boolean;
  textClass?: string;
  className?: string;
}

export const KontivioLogo: React.FC<KontivioLogoProps> = ({
  size = 36,
  showText = true,
  textClass = 'k-logo-text',
  className = '',
}) => {
  const height = (size * 44) / 36;
  return (
    <span className={`k-logo-wrap ${className}`}>
      <svg
        width={size}
        height={height}
        viewBox="0 0 384 465"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Kontivio logo"
        role="img"
      >
        <polygon points="129,7 332,7 13,332 13,130" fill="#01c7c8" />
        <polygon points="120,195 340,440 135,440 10,320" fill="#0e3d4f" />
      </svg>
      {showText && <span className={textClass}>Kontivio</span>}
    </span>
  );
};

export default KontivioLogo;
