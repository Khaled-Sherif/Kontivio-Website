import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CTA } from './CTA';

describe('CTA', () => {
  it('renders the CTA headline', () => {
    render(<MemoryRouter><CTA /></MemoryRouter>);
    expect(screen.getByText(/the support they deserve/i)).toBeInTheDocument();
  });
  it('renders both CTA buttons', () => {
    render(<MemoryRouter><CTA /></MemoryRouter>);
    expect(screen.getByRole('button', { name: /get a custom quote/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /schedule a call/i })).toBeInTheDocument();
  });
});
