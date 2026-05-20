import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { HowItWorks } from './HowItWorks';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('HowItWorks', () => {
  it('renders without crashing', () => {
    renderWithProviders(<HowItWorks />);
  });

  it('shows English heading and all four steps', async () => {
    renderWithProviders(<HowItWorks />);
    await screen.findByText('Live in 3 weeks. Seriously.');
    expect(screen.getByText('Discovery Call')).toBeInTheDocument();
    expect(screen.getByText('Agent Training')).toBeInTheDocument();
    expect(screen.getByText('Supervised Launch')).toBeInTheDocument();
    expect(screen.getByText('Full Operations')).toBeInTheDocument();
  });

  it('renders step numbers 1 through 4', async () => {
    renderWithProviders(<HowItWorks />);
    await screen.findByText('Discovery Call');
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('shows German step titles when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<HowItWorks />);
    await screen.findByText('In 3 Wochen live. Wirklich.');
    expect(screen.getByText('Erstgespräch')).toBeInTheDocument();
    expect(screen.getByText('Agentenschulung')).toBeInTheDocument();
  });
});
