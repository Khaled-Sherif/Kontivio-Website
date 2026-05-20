import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { CustomerSupportSolutions } from './CustomerSupportSolutions';

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

describe('CustomerSupportSolutions', () => {
  it('renders without crashing', () => {
    renderWithProviders(<CustomerSupportSolutions />);
  });

  it('shows English page hero', async () => {
    renderWithProviders(<CustomerSupportSolutions />);
    await screen.findByText('Customer Support Solutions');
    expect(screen.getByRole('heading', { level: 1, name: /Every channel/i })).toBeInTheDocument();
  });

  it('renders solution section headings', async () => {
    renderWithProviders(<CustomerSupportSolutions />);
    await screen.findByText('Live Chat Support');
    expect(screen.getByText('Voice & Call Center')).toBeInTheDocument();
    expect(screen.getByText('Email & Ticket Support')).toBeInTheDocument();
  });

  it('shows German hero eyebrow when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<CustomerSupportSolutions />);
    await screen.findByText('Kundenservice-Lösungen');
  });
});
