import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { PricingPage } from './PricingPage';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  Object.defineProperty(window, 'IntersectionObserver', { writable: true, configurable: true, value: MockIntersectionObserver });
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('PricingPage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<PricingPage />);
  });

  it('shows English hero heading', async () => {
    renderWithProviders(<PricingPage />);
    await screen.findByRole('heading', { level: 1, name: /Plans that/i });
  });

  it('renders the three pricing plan cards', async () => {
    renderWithProviders(<PricingPage />);
    await screen.findByText('Starter');
    expect(screen.getByText(/Per Contact/i)).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();
  });

  it('shows German hero when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<PricingPage />);
    await screen.findByRole('heading', { level: 1, name: /Pläne, die mit/i });
  });
});
