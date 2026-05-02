import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ServicesPage } from './ServicesPage';

describe('ServicesPage', () => {
  it('renders services page hero', () => {
    render(<MemoryRouter><ServicesPage /></MemoryRouter>);
    expect(screen.getByText(/everything your/i)).toBeInTheDocument();
  });
});
