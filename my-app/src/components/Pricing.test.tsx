import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { Pricing } from './Pricing';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('Pricing', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Pricing />);
  });

  it('shows section heading by default', async () => {
    renderWithProviders(<Pricing />);
    await screen.findByText('Pricing');
    expect(screen.getByText(/Flexible plans for/i)).toBeInTheDocument();
  });

  it('hides heading when hideHeader is true', async () => {
    renderWithProviders(<Pricing hideHeader />);
    await screen.findByText('Starter');
    expect(screen.queryByText('Pricing')).not.toBeInTheDocument();
  });

  it('renders all three plan names', async () => {
    renderWithProviders(<Pricing />);
    await screen.findByText('Starter');
    expect(screen.getByText(/Per Contact/i)).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();
  });

  it('shows the Most Flexible badge on the Per Contact plan', async () => {
    renderWithProviders(<Pricing />);
    await screen.findByText('Most Flexible');
  });

  it('shows German plan names when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<Pricing />);
    await screen.findByText('Starter');
    expect(screen.getByText('Pro Kontakt')).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();
  });
});
