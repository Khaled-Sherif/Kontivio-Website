import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { TechnologySolutionsPage } from './TechnologySolutionsPage';

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <I18nProvider>
      <MemoryRouter>{ui}</MemoryRouter>
    </I18nProvider>
  );

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);

  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
});

afterAll(() => {
  vi.restoreAllMocks();
});

beforeEach(() => {
  localStorage.clear();
});

describe('TechnologySolutionsPage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<TechnologySolutionsPage />);
  });

  it('shows English page hero content by default', async () => {
    renderWithProviders(<TechnologySolutionsPage />);
    await screen.findByRole('heading', { level: 1, name: /Built on tools/i });
    expect(screen.getByText(/Native integrations with your existing stack/i)).toBeInTheDocument();
  });

  it('renders all four solution section headings in English', async () => {
    renderWithProviders(<TechnologySolutionsPage />);
    await screen.findByText('Seamless CRM Connectivity');
    expect(screen.getByText('Custom Analytics Dashboards')).toBeInTheDocument();
    expect(screen.getByText('Intelligent Ticket Routing')).toBeInTheDocument();
    expect(screen.getByText('Built-in QA Tooling')).toBeInTheDocument();
  });

  it('renders feature list items for the first solution', async () => {
    renderWithProviders(<TechnologySolutionsPage />);
    await screen.findByText('Two-way sync with leading CRM platforms');
    expect(screen.getByText('Custom field mapping and data validation')).toBeInTheDocument();
    expect(screen.getByText('Real-time conversation logging')).toBeInTheDocument();
  });

  it('renders solution images with correct alt text', async () => {
    renderWithProviders(<TechnologySolutionsPage />);
    await screen.findByAltText('Seamless CRM Connectivity');
    expect(screen.getByAltText('Custom Analytics Dashboards')).toBeInTheDocument();
    expect(screen.getByAltText('Intelligent Ticket Routing')).toBeInTheDocument();
    expect(screen.getByAltText('Built-in QA Tooling')).toBeInTheDocument();
  });

  it('shows German solution headings when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<TechnologySolutionsPage />);
    await screen.findByText('Nahtlose CRM-Konnektivität');
    expect(screen.getByText('Benutzerdefinierte Analyse-Dashboards')).toBeInTheDocument();
    expect(screen.getByText('Intelligentes Ticket-Routing')).toBeInTheDocument();
    expect(screen.getByText('Integrierte QS-Tools')).toBeInTheDocument();
  });

  it('shows German feature list items when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<TechnologySolutionsPage />);
    await screen.findByText('Bidirektionale Synchronisierung mit führenden CRM-Plattformen');
  });

  it('shows French solution headings when language is set to fr', async () => {
    localStorage.setItem('kontivio_lang', 'fr');
    renderWithProviders(<TechnologySolutionsPage />);
    await screen.findByText('Connectivité CRM transparente');
    expect(screen.getByText('Tableaux de bord analytiques personnalisés')).toBeInTheDocument();
  });

  it('shows Dutch solution headings when language is set to nl', async () => {
    localStorage.setItem('kontivio_lang', 'nl');
    renderWithProviders(<TechnologySolutionsPage />);
    await screen.findByText('Naadloze CRM-connectiviteit');
  });

  it('shows Spanish solution headings when language is set to es', async () => {
    localStorage.setItem('kontivio_lang', 'es');
    renderWithProviders(<TechnologySolutionsPage />);
    await screen.findByText('Conectividad CRM sin fisuras');
  });

  it('shows Italian solution headings when language is set to it', async () => {
    localStorage.setItem('kontivio_lang', 'it');
    renderWithProviders(<TechnologySolutionsPage />);
    await screen.findByText('Connettività CRM senza interruzioni');
  });
});
