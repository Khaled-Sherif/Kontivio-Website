import { render, screen, fireEvent } from '@testing-library/react';
import { ImageWithFallback } from './ImageWithFallback';

describe('ImageWithFallback', () => {
  it('renders the image with correct src and alt', () => {
    render(<ImageWithFallback src="/test.jpg" alt="Test image" />);
    const img = screen.getByRole('img', { name: 'Test image' });
    expect(img).toHaveAttribute('src', '/test.jpg');
  });

  it('switches to fallbackSrc on error', () => {
    render(<ImageWithFallback src="/bad.jpg" alt="Test" fallbackSrc="/fallback.jpg" />);
    fireEvent.error(screen.getByRole('img'));
    expect(screen.getByRole('img')).toHaveAttribute('src', '/fallback.jpg');
  });

  it('renders placeholder div when no fallback and image errors', () => {
    render(<ImageWithFallback src="/bad.jpg" alt="Broken image" />);
    fireEvent.error(screen.getByRole('img'));
    expect(screen.getByRole('img', { name: 'Broken image' })).toBeInTheDocument();
  });

  it('passes extra props to the img element', () => {
    render(<ImageWithFallback src="/test.jpg" alt="Test" className="my-img" loading="lazy" />);
    const img = screen.getByRole('img');
    expect(img).toHaveClass('my-img');
    expect(img).toHaveAttribute('loading', 'lazy');
  });
});
