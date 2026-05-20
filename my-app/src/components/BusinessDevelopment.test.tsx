import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { BusinessDevelopment } from './BusinessDevelopment';

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <I18nProvider>
      <MemoryRouter>{ui}</MemoryRouter>
    </I18nProvider>
  );

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});

afterAll(() => {
  vi.restoreAllMocks();
});

beforeEach(() => {
  localStorage.clear();
});

describe('BusinessDevelopment', () => {
  it('renders without crashing', () => {
    renderWithProviders(<BusinessDevelopment />);
  });

  it('shows English content by default', async () => {
    renderWithProviders(<BusinessDevelopment />);
    await screen.findByText('Business Development');
    expect(screen.getByText(/Strategic CX consulting/i)).toBeInTheDocument();
    expect(screen.getByText(/that drives growth/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', '/services/business-development');
  });

  it('shows German content when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<BusinessDevelopment />);
    await screen.findByText('Geschäftsentwicklung');
    expect(screen.getByText(/Strategische CX-Beratung/i)).toBeInTheDocument();
  });

  it('shows French content when language is set to fr', async () => {
    localStorage.setItem('kontivio_lang', 'fr');
    renderWithProviders(<BusinessDevelopment />);
    await screen.findByText('Développement commercial');
  });

  it('shows Dutch content when language is set to nl', async () => {
    localStorage.setItem('kontivio_lang', 'nl');
    renderWithProviders(<BusinessDevelopment />);
    await screen.findByText('Bedrijfsontwikkeling');
  });

  it('shows Spanish content when language is set to es', async () => {
    localStorage.setItem('kontivio_lang', 'es');
    renderWithProviders(<BusinessDevelopment />);
    await screen.findByText('Desarrollo de negocio');
  });

  it('shows Italian content when language is set to it', async () => {
    localStorage.setItem('kontivio_lang', 'it');
    renderWithProviders(<BusinessDevelopment />);
    await screen.findByText('Sviluppo aziendale');
  });
});
