import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { TechnologySolutions } from './TechnologySolutions';

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

describe('TechnologySolutions', () => {
  it('renders without crashing', () => {
    renderWithProviders(<TechnologySolutions />);
  });

  it('shows English eyebrow and heading by default', async () => {
    renderWithProviders(<TechnologySolutions />);
    await screen.findByText('Technology Solutions');
    expect(screen.getByText(/Built on tools/i)).toBeInTheDocument();
    expect(screen.getByText(/you already trust/i)).toBeInTheDocument();
  });

  it('renders all four solution card titles in English', async () => {
    renderWithProviders(<TechnologySolutions />);
    await screen.findByText('CRM Integration');
    expect(screen.getByText('Real-Time Dashboards')).toBeInTheDocument();
    expect(screen.getByText('AI-Powered Routing')).toBeInTheDocument();
    expect(screen.getByText('Quality Assurance Tools')).toBeInTheDocument();
  });

  it('renders solution card descriptions', async () => {
    renderWithProviders(<TechnologySolutions />);
    await screen.findByText(/Native integrations with Salesforce/i);
    expect(screen.getByText(/Custom analytics dashboards/i)).toBeInTheDocument();
    expect(screen.getByText(/Intelligent ticket routing/i)).toBeInTheDocument();
    expect(screen.getByText(/Automated QA scoring/i)).toBeInTheDocument();
  });

  it('shows German content when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<TechnologySolutions />);
    await screen.findByText('Technologie-Lösungen');
    expect(screen.getByText('CRM-Integration')).toBeInTheDocument();
    expect(screen.getByText('Echtzeit-Dashboards')).toBeInTheDocument();
    expect(screen.getByText('KI-gestütztes Routing')).toBeInTheDocument();
    expect(screen.getByText('Qualitätssicherungs-Tools')).toBeInTheDocument();
  });

  it('shows French content when language is set to fr', async () => {
    localStorage.setItem('kontivio_lang', 'fr');
    renderWithProviders(<TechnologySolutions />);
    await screen.findByText('Solutions technologiques');
    expect(screen.getByText('Intégration CRM')).toBeInTheDocument();
  });

  it('shows Dutch content when language is set to nl', async () => {
    localStorage.setItem('kontivio_lang', 'nl');
    renderWithProviders(<TechnologySolutions />);
    await screen.findByText('Technologie-oplossingen');
    expect(screen.getByText('CRM-integratie')).toBeInTheDocument();
  });

  it('shows Spanish content when language is set to es', async () => {
    localStorage.setItem('kontivio_lang', 'es');
    renderWithProviders(<TechnologySolutions />);
    await screen.findByText('Soluciones tecnológicas');
    expect(screen.getByText('Integración CRM')).toBeInTheDocument();
  });

  it('shows Italian content when language is set to it', async () => {
    localStorage.setItem('kontivio_lang', 'it');
    renderWithProviders(<TechnologySolutions />);
    await screen.findByText('Soluzioni tecnologiche');
    expect(screen.getByText('Integrazione CRM')).toBeInTheDocument();
  });
});
