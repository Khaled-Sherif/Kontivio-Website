import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { TechnologyPartners } from './TechnologyPartners';

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

describe('TechnologyPartners', () => {
  it('renders without crashing', () => {
    renderWithProviders(<TechnologyPartners />);
  });

  it('shows English eyebrow and heading by default', async () => {
    renderWithProviders(<TechnologyPartners />);
    await screen.findByText('Technology Partners');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/We integrate with/i);
  });

  it('renders all 8 partner names', async () => {
    renderWithProviders(<TechnologyPartners />);
    const partnerNames = ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Freshdesk', 'Shopify', 'Slack', 'Microsoft Teams'];
    await screen.findByText('Technology Partners');
    partnerNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('shows German eyebrow when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<TechnologyPartners />);
    await screen.findByText('Technologiepartner');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Wir integrieren mit/i);
  });

  it('shows French eyebrow when language is set to fr', async () => {
    localStorage.setItem('kontivio_lang', 'fr');
    renderWithProviders(<TechnologyPartners />);
    await screen.findByText('Partenaires technologiques');
  });

  it('shows Dutch eyebrow when language is set to nl', async () => {
    localStorage.setItem('kontivio_lang', 'nl');
    renderWithProviders(<TechnologyPartners />);
    await screen.findByText('Technologiepartners');
  });

  it('shows Spanish eyebrow when language is set to es', async () => {
    localStorage.setItem('kontivio_lang', 'es');
    renderWithProviders(<TechnologyPartners />);
    await screen.findByText('Socios tecnológicos');
  });

  it('shows Italian eyebrow when language is set to it', async () => {
    localStorage.setItem('kontivio_lang', 'it');
    renderWithProviders(<TechnologyPartners />);
    await screen.findByText('Partner tecnologici');
  });
});
