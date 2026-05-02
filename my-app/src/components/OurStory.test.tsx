import { render, screen } from '@testing-library/react';
import { OurStory } from './OurStory';

describe('OurStory', () => {
  it('renders milestones', () => {
    render(<OurStory />);
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('2025')).toBeInTheDocument();
    expect(screen.getByText('2026')).toBeInTheDocument();
  });
});
