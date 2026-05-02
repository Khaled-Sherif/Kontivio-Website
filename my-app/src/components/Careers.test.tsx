import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Careers } from './Careers';

describe('Careers', () => {
  it('renders careers hero', () => {
    render(<MemoryRouter><Careers /></MemoryRouter>);
    expect(screen.getByText(/build the future/i)).toBeInTheDocument();
  });
  it('renders open positions', () => {
    render(<MemoryRouter><Careers /></MemoryRouter>);
    expect(screen.getByText(/customer support specialist/i)).toBeInTheDocument();
    expect(screen.getByText(/multilingual voice agent/i)).toBeInTheDocument();
  });
});
