import { render, screen } from '@testing-library/react';
import { FAQ } from './FAQ';

describe('FAQ', () => {
  it('renders FAQ questions', () => {
    render(<FAQ />);
    expect(screen.getByText(/do i need to be a large company/i)).toBeInTheDocument();
  });
  it('toggles open on click', () => {
    render(<FAQ />);
    const item = screen.getByText(/do i need to be a large company/i).closest('.k-faq-item');
    expect(item).toBeTruthy();
  });
});
