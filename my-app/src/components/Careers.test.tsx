import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { Careers } from './Careers';

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

describe('Careers', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Careers />);
  });

  it('shows English page hero', async () => {
    renderWithProviders(<Careers />);
    await screen.findByText('Careers at Kontivio');
    expect(screen.getByRole('heading', { level: 1, name: /Build the future/i })).toBeInTheDocument();
  });

  it('renders job position titles', async () => {
    renderWithProviders(<Careers />);
    await screen.findByText('Customer Support Specialist');
    expect(screen.getByText('Multilingual Voice Agent')).toBeInTheDocument();
  });

  it('renders Apply buttons for each position', async () => {
    renderWithProviders(<Careers />);
    const applyButtons = await screen.findAllByRole('link', { name: /Apply/i });
    expect(applyButtons.length).toBeGreaterThan(0);
    expect(applyButtons[0]).toHaveAttribute('href', expect.stringContaining('/careers/apply'));
  });

  it('shows German hero when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<Careers />);
    await screen.findByText('Karriere bei Kontivio');
  });
});
