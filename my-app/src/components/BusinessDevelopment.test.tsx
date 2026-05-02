import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BusinessDevelopment } from './BusinessDevelopment';

describe('BusinessDevelopment', () => {
  it('renders bizdev section', () => {
    render(<MemoryRouter><BusinessDevelopment /></MemoryRouter>);
    expect(screen.getByText(/strategic cx consulting/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /talk to a consultant/i })).toBeInTheDocument();
  });
});
