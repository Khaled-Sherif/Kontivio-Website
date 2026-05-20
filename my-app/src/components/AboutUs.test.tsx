import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { AboutUs } from './AboutUs';

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

describe('AboutUs', () => {
  it('renders without crashing', () => {
    renderWithProviders(<AboutUs />);
  });

  it('shows English page hero', async () => {
    renderWithProviders(<AboutUs />);
    await screen.findByText('About Kontivio');
    expect(screen.getByRole('heading', { level: 1, name: /Built on care/i })).toBeInTheDocument();
  });

  it('shows German hero when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<AboutUs />);
    await screen.findByText('Über Kontivio');
  });
});
