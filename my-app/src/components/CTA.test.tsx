import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { CTA } from './CTA';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('CTA', () => {
  it('renders without crashing', () => {
    renderWithProviders(<CTA />);
  });

  it('shows English heading and description', async () => {
    renderWithProviders(<CTA />);
    await screen.findByText(/Ready to give your customers/i);
    expect(screen.getByText(/the support they deserve/i)).toBeInTheDocument();
    expect(screen.getByText(/Limited onboarding spots/i)).toBeInTheDocument();
  });

  it('renders Get Started and Schedule a Call buttons', async () => {
    renderWithProviders(<CTA />);
    await screen.findByText(/Get Started/i);
    expect(screen.getByRole('link', { name: /Get Started/i })).toHaveAttribute('href', '/pricing/recommend');
    expect(screen.getByRole('link', { name: /Schedule a Call/i })).toBeInTheDocument();
  });

  it('shows German content when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<CTA />);
    await screen.findByText(/Bereit, Ihren Kunden/i);
    expect(screen.getByText(/Jetzt starten/i)).toBeInTheDocument();
  });
});
