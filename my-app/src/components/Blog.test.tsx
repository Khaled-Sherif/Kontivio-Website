import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { Blog } from './Blog';

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

describe('Blog', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Blog />);
  });

  it('shows English page hero', async () => {
    renderWithProviders(<Blog />);
    await screen.findByText('The Kontivio Blog');
    expect(screen.getByText(/Strategy, insights/i)).toBeInTheDocument();
  });

  it('renders all three blog post titles', async () => {
    renderWithProviders(<Blog />);
    await screen.findByText('How to Scale Customer Support Without Losing Quality');
    expect(screen.getByText(/AI \+ Human Agents/i)).toBeInTheDocument();
    expect(screen.getByText(/5 Common Mistakes in Multilingual CX/i)).toBeInTheDocument();
  });

  it('renders blog post categories', async () => {
    renderWithProviders(<Blog />);
    await screen.findByText('Operations');
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('CX Strategy')).toBeInTheDocument();
  });

  it('shows German blog heading when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<Blog />);
    await screen.findByText('Der Kontivio-Blog');
  });
});
