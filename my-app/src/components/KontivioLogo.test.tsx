import { render, screen } from '@testing-library/react';
import { KontivioLogo } from './KontivioLogo';

describe('KontivioLogo', () => {
  it('renders the logo with brand text', () => {
    render(<KontivioLogo />);
    expect(screen.getByText('Kontivio')).toBeInTheDocument();
    expect(screen.getByLabelText('Kontivio logo')).toBeInTheDocument();
  });

  it('hides text when showText is false', () => {
    const { container } = render(<KontivioLogo showText={false} />);
    expect(container.querySelector('span.k-logo-text')).toBeFalsy();
  });

  it('respects custom size prop', () => {
    render(<KontivioLogo size={64} />);
    expect(screen.getByLabelText('Kontivio logo')).toHaveAttribute('width', '64');
  });
});
