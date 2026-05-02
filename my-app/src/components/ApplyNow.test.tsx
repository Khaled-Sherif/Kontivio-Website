import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ApplyNow } from './ApplyNow';

describe('ApplyNow', () => {
  it('renders the form fields', () => {
    render(<MemoryRouter><ApplyNow /></MemoryRouter>);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit application/i })).toBeInTheDocument();
  });
});
