import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { Footer } from './Footer';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('Footer', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Footer />);
  });

  it('shows English column headings', async () => {
    renderWithProviders(<Footer />);
    await screen.findByText('Services');
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Get Started' })).toBeInTheDocument();
  });

  it('renders service links with correct hrefs', async () => {
    renderWithProviders(<Footer />);
    await screen.findByText('Customer Support');
    expect(screen.getByRole('link', { name: 'Customer Support' })).toHaveAttribute('href', '/services/customer-support');
    expect(screen.getByRole('link', { name: 'Technology Solutions' })).toHaveAttribute('href', '/services/technology');
  });

  it('renders company links', async () => {
    renderWithProviders(<Footer />);
    await screen.findByText('About Us');
    expect(screen.getByRole('link', { name: 'Careers' })).toHaveAttribute('href', '/careers');
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog');
  });

  it('shows copyright text with current year', async () => {
    renderWithProviders(<Footer />);
    const year = new Date().getFullYear();
    await screen.findByText(new RegExp(`${year} Kontivio`));
  });

  it('shows German column headings when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<Footer />);
    await screen.findByText('Leistungen');
    expect(screen.getByRole('heading', { name: 'Unternehmen' })).toBeInTheDocument();
  });
});
