// Header.test.tsx
import { render, screen, fireEvent, within } from '@testing-library/react';
import { Header } from './Header';
import { LanguageProvider } from '../contexts/LanguageContext'; // make sure you wrap context
import { vi } from 'vitest'

describe('Header component', () => {
  const mockHandlers = {
    onNavigateToServices: vi.fn(),
    onNavigateHome: vi.fn(),
    onNavigateToTechnology: vi.fn(),
    onNavigateToBusinessDev: vi.fn(),
    onNavigateToAboutUs: vi.fn(),
    onNavigateToOurStory: vi.fn(),
    onNavigateToTechPartners: vi.fn(),
    onNavigateToBlog: vi.fn(),
    onNavigateToPricing: vi.fn(),
    onNavigateToBoardOfDirectors: vi.fn(),
    onNavigateToHowItWorks: vi.fn(),
    onNavigateToCareers: vi.fn(),
    onNavigateToContactUs: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks();
  });

  function renderHeader() {
    return render(
      <LanguageProvider>
        <Header {...mockHandlers} />
      </LanguageProvider>
    );
  }

  it('renders the logo and contact button', () => {
    renderHeader();
    expect(screen.getByAltText('Kontivio Logo')).toBeInTheDocument();
    expect(screen.getByText(/^Kontivio$/)).toBeInTheDocument();
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
  });

  it('calls onNavigateHome when clicking logo', () => {
    renderHeader();
  fireEvent.click(screen.getByAltText("Kontivio Logo"))
  expect(mockHandlers.onNavigateHome).toHaveBeenCalled()
  });

  it('renders top bar with contact email and social icons', () => {
    renderHeader()

    // Top bar container
    const topBar = screen.getByTestId("top-bar")


    // Only look for links inside the top bar
    const links = within(topBar).getAllByRole("link", { hidden: true })
    expect(links).toHaveLength(3);
  })

  it('calls correct handler when clicking Services menu item', () => {
    renderHeader();
    const servicesTrigger = screen.getByText(/services/i);
    fireEvent.click(servicesTrigger);

    // Since the items are in a dropdown, you might need to query by text after clicking
    const customerSupport = screen.getByText(/customer support/i);
    fireEvent.click(customerSupport);
    expect(mockHandlers.onNavigateToServices).toHaveBeenCalled();
  });

  it('changes language when selecting from dropdown', () => {
    renderHeader();
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 'de' } });
    expect(select.value).toBe('de');
  });

  it('calls contact button handler when clicked', () => {
    renderHeader();
    const contactButton = screen.getByText(/contact us/i);
    fireEvent.click(contactButton);
    expect(mockHandlers.onNavigateToContactUs).toHaveBeenCalled();
  });
});
