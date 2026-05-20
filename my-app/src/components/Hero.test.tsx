import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { Hero } from './Hero';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('Hero', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Hero />);
  });

  it('shows English badge and headline by default', async () => {
    renderWithProviders(<Hero />);
    await screen.findByText(/Now Accepting New Clients/i);
    expect(screen.getByText(/World-Class/i)).toBeInTheDocument();
  });

  it('shows stat labels in English', async () => {
    renderWithProviders(<Hero />);
    await screen.findByText('Response SLA');
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Coverage')).toBeInTheDocument();
    expect(screen.getByText('Lock-in')).toBeInTheDocument();
  });

  it('renders Get Started and How It Works links', async () => {
    renderWithProviders(<Hero />);
    await screen.findByText(/Get Started/i);
    expect(screen.getByRole('link', { name: /Get Started/i })).toHaveAttribute('href', '/pricing/recommend');
  });

  it('shows German badge when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<Hero />);
    await screen.findByText(/Wir nehmen jetzt neue Kunden auf/i);
    expect(screen.getByText('Antwort-SLA')).toBeInTheDocument();
  });
});
