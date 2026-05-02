import React, { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export const ImageWithFallback: React.FC<Props> = ({ src, alt, fallbackSrc, className, ...rest }) => {
  const [errored, setErrored] = useState(false);
  if (errored && fallbackSrc) {
    return <img src={fallbackSrc} alt={alt} className={className} {...rest} />;
  }
  if (errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f5fbfc, #d8f6f8)',
          color: '#0e3d4f',
          minHeight: 200,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setErrored(true)} {...rest} />;
};

export default ImageWithFallback;
