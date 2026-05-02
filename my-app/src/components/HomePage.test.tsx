import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders the homepage with key sections', () => {
    render(<MemoryRouter><HomePage /></MemoryRouter>);
    expect(screen.getByText(/world-class/i)).toBeInTheDocument();
    expect(screen.getByText(/every channel your/i)).toBeInTheDocument();
  });
});
