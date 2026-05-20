import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { Industries } from './Industries';

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

describe('Industries', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Industries />);
  });

  it('shows English hero heading', async () => {
    renderWithProviders(<Industries />);
    await screen.findByRole('heading', { level: 1, name: /Trusted across/i });
  });

  it('renders all eight industry names', async () => {
    renderWithProviders(<Industries />);
    await screen.findByText('E-commerce');
    expect(screen.getByText('Healthcare')).toBeInTheDocument();
    expect(screen.getByText('Financial Services')).toBeInTheDocument();
    expect(screen.getByText('SaaS')).toBeInTheDocument();
    expect(screen.getByText('Hospitality')).toBeInTheDocument();
  });

  it('shows German industry names when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<Industries />);
    await screen.findAllByText('Branchen');
    expect(screen.getByText('Gesundheitswesen')).toBeInTheDocument();
    expect(screen.getByText('Hotellerie')).toBeInTheDocument();
  });
});
