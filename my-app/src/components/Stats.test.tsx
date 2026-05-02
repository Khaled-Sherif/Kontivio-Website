import { render, screen } from '@testing-library/react';
import { Stats } from './Stats';

describe('Stats', () => {
  it('renders all stats', () => {
    render(<Stats />);
    expect(screen.getByText('<60s')).toBeInTheDocument();
    expect(screen.getByText('18+')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
