import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { ServicesPage } from './ServicesPage';

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

describe('ServicesPage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<ServicesPage />);
  });

  it('shows English services hero heading', async () => {
    renderWithProviders(<ServicesPage />);
    await screen.findByText('Our Services');
    expect(screen.getByRole('heading', { level: 1, name: /Everything your/i })).toBeInTheDocument();
  });

  it('renders the Technology Solutions section', async () => {
    renderWithProviders(<ServicesPage />);
    await screen.findByText('CRM Integration');
    expect(screen.getByText('AI-Powered Routing')).toBeInTheDocument();
  });

  it('renders the Business Development section', async () => {
    renderWithProviders(<ServicesPage />);
    await screen.findByText(/Strategic CX consulting/i);
  });

  it('shows German hero when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<ServicesPage />);
    await screen.findByText('Unsere Leistungen');
  });
});
