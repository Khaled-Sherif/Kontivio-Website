import { render, screen } from '@testing-library/react';
import { Marquee } from './Marquee';

describe('Marquee', () => {
  it('renders marquee items', () => {
    render(<Marquee />);
    expect(screen.getAllByText(/live chat support/i).length).toBeGreaterThan(0);
  });
});
