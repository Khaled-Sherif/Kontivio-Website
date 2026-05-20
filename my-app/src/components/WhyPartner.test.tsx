import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { WhyPartner } from './WhyPartner';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('WhyPartner', () => {
  it('renders without crashing', () => {
    renderWithProviders(<WhyPartner />);
  });

  it('shows English eyebrow and heading', async () => {
    renderWithProviders(<WhyPartner />);
    await screen.findByText('Why Kontivio');
    expect(screen.getByText(/We don't just answer tickets/i)).toBeInTheDocument();
  });

  it('renders all four metric labels', async () => {
    renderWithProviders(<WhyPartner />);
    await screen.findByText('Guaranteed Response');
    expect(screen.getByText('Languages, Native Speakers')).toBeInTheDocument();
    expect(screen.getByText('Round-the-Clock Coverage')).toBeInTheDocument();
    expect(screen.getByText('Lock-in Contracts')).toBeInTheDocument();
  });

  it('renders all four pillar titles', async () => {
    renderWithProviders(<WhyPartner />);
    await screen.findByText('Brand-First Training');
    expect(screen.getByText('No Long-Term Contracts')).toBeInTheDocument();
    expect(screen.getByText('Full Visibility Always')).toBeInTheDocument();
    expect(screen.getByText('Scale in Days')).toBeInTheDocument();
  });

  it('shows German content when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<WhyPartner />);
    await screen.findByText('Warum Kontivio');
    expect(screen.getByText('Markenorientierte Schulung')).toBeInTheDocument();
  });
});
