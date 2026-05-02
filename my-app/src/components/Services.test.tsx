import { render, screen } from '@testing-library/react';
import { Services } from './Services';

describe('Services', () => {
  it('renders all 6 services', () => {
    render(<Services />);
    expect(screen.getByText(/Live Chat Support/i)).toBeInTheDocument();
    expect(screen.getByText(/Voice & Call Center/i)).toBeInTheDocument();
    expect(screen.getByText(/Email & Ticket Support/i)).toBeInTheDocument();
    expect(screen.getByText(/Social Media Support/i)).toBeInTheDocument();
    expect(screen.getByText(/AI-Augmented Agents/i)).toBeInTheDocument();
    expect(screen.getByText(/Analytics & QA/i)).toBeInTheDocument();
  });
});
