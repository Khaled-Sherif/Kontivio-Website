import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { HomePage } from './HomePage';

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

describe('HomePage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<HomePage />);
  });

  it('renders key homepage sections', async () => {
    renderWithProviders(<HomePage />);
    await screen.findByText(/Now Accepting New Clients/i);
    expect(screen.getAllByText(/What We Offer/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/How It Works/i).length).toBeGreaterThan(0);
  });

  it('renders header navigation', async () => {
    renderWithProviders(<HomePage />);
    await screen.findAllByText('Services');
    expect(screen.getAllByText('Pricing').length).toBeGreaterThan(0);
  });

  it('renders footer', async () => {
    renderWithProviders(<HomePage />);
    const year = new Date().getFullYear();
    await screen.findByText(new RegExp(`${year} Kontivio`));
  });
});
