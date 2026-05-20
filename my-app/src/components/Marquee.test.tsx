import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { Marquee } from './Marquee';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('Marquee', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Marquee />);
  });

  it('displays English marquee items', async () => {
    renderWithProviders(<Marquee />);
    await screen.findAllByText('Live Chat Support');
    expect(screen.getAllByText('Voice & Call Center').length).toBeGreaterThan(0);
    expect(screen.getAllByText('18+ Languages').length).toBeGreaterThan(0);
    expect(screen.getAllByText('SLA Guaranteed').length).toBeGreaterThan(0);
  });

  it('duplicates items for continuous scroll', async () => {
    renderWithProviders(<Marquee />);
    const items = await screen.findAllByText('Live Chat Support');
    expect(items.length).toBe(2);
  });

  it('shows German items when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<Marquee />);
    await screen.findAllByText('Live-Chat');
    expect(screen.getAllByText('18+ Sprachen').length).toBeGreaterThan(0);
  });
});
