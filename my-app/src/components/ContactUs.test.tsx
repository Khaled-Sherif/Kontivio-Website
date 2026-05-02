import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContactUs } from './ContactUs';

describe('ContactUs', () => {
  it('renders contact hero', () => {
    render(<MemoryRouter><ContactUs /></MemoryRouter>);
    expect(screen.getByText(/let's talk about/i)).toBeInTheDocument();
  });
  it('renders contact info', () => {
    render(<MemoryRouter><ContactUs /></MemoryRouter>);
    expect(screen.getByText(/cairo, egypt/i)).toBeInTheDocument();
  });
});
