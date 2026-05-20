import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { BusinessDevelopmentPage } from './BusinessDevelopmentPage';

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

describe('BusinessDevelopmentPage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<BusinessDevelopmentPage />);
  });

  it('shows English page hero', async () => {
    renderWithProviders(<BusinessDevelopmentPage />);
    await screen.findByRole('heading', { level: 1, name: /Strategic CX consulting/i });
  });

  it('renders solution headings', async () => {
    renderWithProviders(<BusinessDevelopmentPage />);
    await screen.findByText('CX Strategy & Advisory');
    expect(screen.getByText('Outbound Sales Operations')).toBeInTheDocument();
  });

  it('shows German hero when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<BusinessDevelopmentPage />);
    await screen.findAllByText('Geschäftsentwicklung');
  });
});
