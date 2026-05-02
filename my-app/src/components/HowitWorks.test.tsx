import { render, screen } from '@testing-library/react';
import { HowItWorks } from './HowItWorks';

describe('HowItWorks', () => {
  it('renders headline', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/live in 3 weeks/i)).toBeInTheDocument();
  });
  it('renders all 4 steps', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/Discovery Call/i)).toBeInTheDocument();
    expect(screen.getByText(/Agent Training/i)).toBeInTheDocument();
    expect(screen.getByText(/Supervised Launch/i)).toBeInTheDocument();
    expect(screen.getByText(/Full Operations/i)).toBeInTheDocument();
  });
});
