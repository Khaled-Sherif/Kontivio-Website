import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { BoardOfDirectors } from './BoardOfDirectors';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('BoardOfDirectors', () => {
  it('renders without crashing', () => {
    renderWithProviders(<BoardOfDirectors />);
  });

  it('shows English team section heading', async () => {
    renderWithProviders(<BoardOfDirectors />);
    await screen.findByText('Who We Are');
    expect(screen.getByText(/A team built around/i)).toBeInTheDocument();
  });

  it('renders all three team member names', async () => {
    renderWithProviders(<BoardOfDirectors />);
    await screen.findByText('Who We Are');
    expect(screen.getByText('Sarah K.')).toBeInTheDocument();
    expect(screen.getByText('James M.')).toBeInTheDocument();
  });

  it('renders team values list', async () => {
    renderWithProviders(<BoardOfDirectors />);
    await screen.findByText('Empathy-first communication in every interaction');
    expect(screen.getByText('Continuous QA and performance coaching')).toBeInTheDocument();
  });

  it('shows German team heading when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<BoardOfDirectors />);
    await screen.findByText('Wer wir sind');
  });
});
