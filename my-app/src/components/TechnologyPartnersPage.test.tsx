import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { TechnologyPartnersPage } from './TechnologyPartnersPage';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  Object.defineProperty(window, 'IntersectionObserver', { writable: true, configurable: true, value: MockIntersectionObserver });
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('TechnologyPartnersPage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<TechnologyPartnersPage />);
  });

  it('shows English hero heading', async () => {
    renderWithProviders(<TechnologyPartnersPage />);
    await screen.findByRole('heading', { level: 1, name: /We integrate with/i });
  });

  it('renders all partner logos', async () => {
    renderWithProviders(<TechnologyPartnersPage />);
    await screen.findByText('Salesforce');
    expect(screen.getByText('HubSpot')).toBeInTheDocument();
    expect(screen.getByText('Zendesk')).toBeInTheDocument();
  });

  it('shows German hero when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<TechnologyPartnersPage />);
    await screen.findAllByText('Technologiepartner');
  });
});
