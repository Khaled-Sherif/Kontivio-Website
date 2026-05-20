import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { Services } from './Services';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('Services', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Services />);
  });

  it('shows eyebrow and heading in English', async () => {
    renderWithProviders(<Services />);
    await screen.findByText('What We Offer');
    expect(screen.getByText(/Every channel your/i)).toBeInTheDocument();
  });

  it('renders all six service card titles', async () => {
    renderWithProviders(<Services />);
    await screen.findByText('Live Chat Support');
    expect(screen.getByText('Voice & Call Center')).toBeInTheDocument();
    expect(screen.getByText('Email & Ticket Support')).toBeInTheDocument();
    expect(screen.getByText('Social Media Support')).toBeInTheDocument();
    expect(screen.getByText('AI-Augmented Agents')).toBeInTheDocument();
    expect(screen.getByText('Analytics & QA')).toBeInTheDocument();
  });

  it('shows German service titles when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<Services />);
    await screen.findByText('Was wir bieten');
    expect(screen.getByText('Live-Chat-Support')).toBeInTheDocument();
    expect(screen.getByText('KI-erweiterte Agenten')).toBeInTheDocument();
  });
});
