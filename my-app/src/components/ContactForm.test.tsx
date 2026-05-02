import { render, screen } from '@testing-library/react';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('renders all fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/how can we help/i)).toBeInTheDocument();
  });
  it('renders submit button', () => {
    render(<ContactForm />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });
});
