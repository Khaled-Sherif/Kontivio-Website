import { render, screen } from '@testing-library/react';
import { Stats } from './Stats';

describe('Stats', () => {
  it('renders without crashing', () => {
    render(<Stats />);
  });

  it('displays all four stat values', () => {
    render(<Stats />);
    expect(screen.getByText('<60s')).toBeInTheDocument();
    expect(screen.getByText('18+')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('displays all four stat labels', () => {
    render(<Stats />);
    expect(screen.getByText('Response SLA')).toBeInTheDocument();
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Coverage')).toBeInTheDocument();
    expect(screen.getByText('Lock-in')).toBeInTheDocument();
  });
});
