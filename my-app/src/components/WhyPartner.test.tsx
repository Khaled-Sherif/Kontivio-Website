import { render, screen } from '@testing-library/react';
import { WhyPartner } from './WhyPartner';

describe('WhyPartner', () => {
  it('renders the headline', () => {
    render(<WhyPartner />);
    expect(screen.getByText(/we represent your brand/i)).toBeInTheDocument();
  });
  it('renders all four pillars', () => {
    render(<WhyPartner />);
    expect(screen.getByText(/Brand-First Training/i)).toBeInTheDocument();
    expect(screen.getByText(/No Long-Term Contracts/i)).toBeInTheDocument();
    expect(screen.getByText(/Full Visibility Always/i)).toBeInTheDocument();
    expect(screen.getByText(/Scale in Days/i)).toBeInTheDocument();
  });
});
