import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the brand', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText('Kontivio')).toBeInTheDocument();
  });
  it('renders link headings', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>);
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});
