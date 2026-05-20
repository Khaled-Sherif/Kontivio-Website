import { render } from '@testing-library/react';
import { BackgroundGraphics } from './BackgroundGraphics';

describe('BackgroundGraphics', () => {
  it('renders grid variant by default', () => {
    const { container } = render(<BackgroundGraphics />);
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders glow variant', () => {
    const { container } = render(<BackgroundGraphics variant="glow" />);
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders dots variant', () => {
    const { container } = render(<BackgroundGraphics variant="dots" />);
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies custom className', () => {
    const { container } = render(<BackgroundGraphics className="my-class" />);
    expect(container.firstChild).toHaveClass('my-class');
  });
});
