import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Pricing } from './Pricing';

describe('Pricing', () => {
  it('renders all 3 plans', () => {
    render(<MemoryRouter><Pricing /></MemoryRouter>);
    expect(screen.getByText('Starter')).toBeInTheDocument();
    expect(screen.getByText('Growth')).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();
  });
  it('renders Most Popular badge', () => {
    render(<MemoryRouter><Pricing /></MemoryRouter>);
    expect(screen.getByText(/most popular/i)).toBeInTheDocument();
  });
});
