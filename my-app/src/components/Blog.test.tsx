import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Blog } from './Blog';

describe('Blog', () => {
  it('renders blog hero', () => {
    render(<MemoryRouter><Blog /></MemoryRouter>);
    expect(screen.getByText(/the kontivio blog/i)).toBeInTheDocument();
  });
  it('renders posts', () => {
    render(<MemoryRouter><Blog /></MemoryRouter>);
    expect(screen.getByText(/scale customer support/i)).toBeInTheDocument();
  });
});
