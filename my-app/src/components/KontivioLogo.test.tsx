import { render, screen } from '@testing-library/react';
import { KontivioLogo } from './KontivioLogo';

describe('KontivioLogo', () => {
  it('renders the SVG with aria-label', () => {
    render(<KontivioLogo />);
    expect(screen.getByRole('img', { name: 'Kontivio logo' })).toBeInTheDocument();
  });

  it('shows the Kontivio text by default', () => {
    render(<KontivioLogo />);
    expect(screen.getByText('Kontivio')).toBeInTheDocument();
  });

  it('hides text when showText is false', () => {
    render(<KontivioLogo showText={false} />);
    expect(screen.queryByText('Kontivio')).not.toBeInTheDocument();
  });

  it('applies custom textClass', () => {
    render(<KontivioLogo textClass="my-text-class" />);
    expect(screen.getByText('Kontivio')).toHaveClass('my-text-class');
  });

  it('applies custom className to wrapper', () => {
    const { container } = render(<KontivioLogo className="custom-wrap" />);
    expect(container.firstChild).toHaveClass('custom-wrap');
  });

  it('renders SVG at specified size', () => {
    render(<KontivioLogo size={48} />);
    const svg = screen.getByRole('img', { name: 'Kontivio logo' });
    expect(svg).toHaveAttribute('width', '48');
  });
});
