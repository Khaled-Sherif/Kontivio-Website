import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the headline', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(screen.getByText(/world-class/i)).toBeInTheDocument();
  });
  it('renders the primary CTA', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(screen.getByRole('button', { name: /get a custom quote/i })).toBeInTheDocument();
  });
  it('renders all four hero stats', () => {
    render(<MemoryRouter><Hero /></MemoryRouter>);
    expect(screen.getByText('<60s')).toBeInTheDocument();
    expect(screen.getByText('18+')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
  });
});
