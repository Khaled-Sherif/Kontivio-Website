import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { OurStory } from './OurStory';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('OurStory', () => {
  it('renders without crashing', () => {
    renderWithProviders(<OurStory />);
  });

  it('shows English heading and all five chapter titles', async () => {
    renderWithProviders(<OurStory />);
    await screen.findByText('Our Journey');
    expect(screen.getByText('The Foundation')).toBeInTheDocument();
    expect(screen.getByText('Building Our Team')).toBeInTheDocument();
    expect(screen.getByText('Scaling Our Operations')).toBeInTheDocument();
    expect(screen.getByText('Global Expansion')).toBeInTheDocument();
    expect(screen.getByText('Recognition & Growth')).toBeInTheDocument();
  });

  it('renders chapter numbers 1 through 5', async () => {
    renderWithProviders(<OurStory />);
    await screen.findByText('The Foundation');
    [1, 2, 3, 4, 5].forEach((n) => expect(screen.getByText(String(n))).toBeInTheDocument());
  });

  it('shows German chapter titles when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<OurStory />);
    await screen.findByText('Unsere Reise');
    expect(screen.getByText('Die Gründung')).toBeInTheDocument();
  });
});
