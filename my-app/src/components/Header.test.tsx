import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header', () => {
  it('renders the Kontivio brand', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    expect(screen.getByText('Kontivio')).toBeInTheDocument();
  });
  it('renders contact email', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    expect(screen.getByText(/contactus@kontivio.com/i)).toBeInTheDocument();
  });
  it('renders Contact Us button', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    expect(screen.getByRole('button', { name: /contact us/i })).toBeInTheDocument();
  });
});
