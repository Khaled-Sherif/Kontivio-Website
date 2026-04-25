import { render, screen, fireEvent } from '@testing-library/react';
import { Blog } from './Blog';

describe('Blog Component', () => {
  const mockNavigateHome = vi.fn();

  beforeEach(() => {
    render(<Blog onNavigateHome={mockNavigateHome} />);
  });

  test('renders main hero heading', () => {
    expect(
      screen.getByRole('heading', {
        name: /Blog & Insights/i,
        level: 1
      })
    ).toBeInTheDocument();
  });

  test('renders featured post section', () => {
    expect(
      screen.getByText(/Featured Post/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /10 Best Practices for Remote Customer Support Teams/i
      })
    ).toBeInTheDocument();
  });

  test('renders latest articles heading', () => {
    expect(
      screen.getByRole('heading', {
        name: /Latest Articles/i
      })
    ).toBeInTheDocument();
  });

  test('renders newsletter section', () => {
    expect(
      screen.getByRole('heading', {
        name: /Stay Updated/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/Enter your email/i)
    ).toBeInTheDocument();
  });

  test('renders CTA section', () => {
    expect(
      screen.getByRole('heading', {
        name: /Ready to Transform Your Customer Support/i
      })
    ).toBeInTheDocument();
  });

  test('calls onNavigateHome when Back to Home button clicked', () => {
    const backButton = screen.getByRole('button', {
      name: /Back to Home/i
    });

    fireEvent.click(backButton);

    expect(mockNavigateHome).toHaveBeenCalledTimes(1);
  });

  test('calls onNavigateHome when Contact Us button clicked', () => {
    const contactButton = screen.getAllByRole('button', {
      name: /Contact Us/i
    })[0];

    fireEvent.click(contactButton);

    expect(mockNavigateHome).toHaveBeenCalled();
  });

  test('renders featured image with correct alt text', () => {
    expect(
      screen.getByAltText(
        /10 Best Practices for Remote Customer Support Teams/i
      )
    ).toBeInTheDocument();
  });

  test('renders multiple blog article cards', () => {
    const readMoreButtons = screen.getAllByRole('button', {
      name: /Read More/i
    });

    expect(readMoreButtons.length).toBeGreaterThan(0);
  });
});