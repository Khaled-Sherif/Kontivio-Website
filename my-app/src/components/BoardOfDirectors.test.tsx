import { render, screen } from '@testing-library/react';
import { BoardOfDirectors } from './BoardOfDirectors';

describe('BoardOfDirectors', () => {
  it('renders the team headline', () => {
    render(<BoardOfDirectors />);
    expect(screen.getByText(/a team built around/i)).toBeInTheDocument();
  });
  it('renders all team members', () => {
    render(<BoardOfDirectors />);
    expect(screen.getByText('Sarah K.')).toBeInTheDocument();
    expect(screen.getByText('James M.')).toBeInTheDocument();
    expect(screen.getByText(/our agent network/i)).toBeInTheDocument();
  });
});
