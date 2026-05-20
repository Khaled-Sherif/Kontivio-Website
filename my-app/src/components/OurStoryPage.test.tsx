import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { OurStoryPage } from './OurStoryPage';

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

describe('OurStoryPage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<OurStoryPage />);
  });

  it('shows English hero heading', async () => {
    renderWithProviders(<OurStoryPage />);
    await screen.findByRole('heading', { level: 1, name: /How we got/i });
  });

  it('shows German hero when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<OurStoryPage />);
    await screen.findAllByText('Unsere Geschichte');
  });
});
