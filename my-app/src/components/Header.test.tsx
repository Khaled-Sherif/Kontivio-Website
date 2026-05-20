import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { Header } from './Header';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('Header', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Header />);
  });

  it('shows all top-level nav links in English', async () => {
    renderWithProviders(<Header />);
    await screen.findByText('Services');
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Careers')).toBeInTheDocument();
  });

  it('shows Contact Us button', async () => {
    renderWithProviders(<Header />);
    await screen.findByRole('button', { name: /Contact Us/i });
  });

  it('renders language selector with all six options', async () => {
    renderWithProviders(<Header />);
    const select = await screen.findByRole('combobox', { name: /Language/i });
    expect(select).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'EN' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'DE' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'FR' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'NL' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'ES' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'IT' })).toBeInTheDocument();
  });

  it('switches nav labels when language selector changes', async () => {
    renderWithProviders(<Header />);
    const select = await screen.findByRole('combobox', { name: /Language/i });
    fireEvent.change(select, { target: { value: 'de' } });
    expect(await screen.findByText('Leistungen')).toBeInTheDocument();
    expect(screen.getByText('Über uns')).toBeInTheDocument();
  });

  it('shows German nav links when language is pre-set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<Header />);
    await screen.findByText('Leistungen');
    expect(screen.getByText('Karriere')).toBeInTheDocument();
  });
});
