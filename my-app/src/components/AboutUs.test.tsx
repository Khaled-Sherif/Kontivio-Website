import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AboutUs } from './AboutUs';

describe('AboutUs', () => {
  it('renders the about hero', () => {
    render(<MemoryRouter><AboutUs /></MemoryRouter>);
    expect(screen.getByText(/built on care/i)).toBeInTheDocument();
  });
});
