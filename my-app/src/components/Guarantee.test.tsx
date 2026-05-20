import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { Guarantee } from './Guarantee';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('Guarantee', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Guarantee />);
  });

  it('shows English eyebrow, heading, and all four card titles', async () => {
    renderWithProviders(<Guarantee />);
    await screen.findByText('Our Promise');
    expect(screen.getByText('Quality Guaranteed')).toBeInTheDocument();
    expect(screen.getByText('No Lock-in')).toBeInTheDocument();
    expect(screen.getByText('SLA-Backed Response')).toBeInTheDocument();
    expect(screen.getByText('Full Transparency')).toBeInTheDocument();
  });

  it('shows German content when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<Guarantee />);
    await screen.findByText('Unser Versprechen');
    expect(screen.getByText('Qualität garantiert')).toBeInTheDocument();
  });
});
