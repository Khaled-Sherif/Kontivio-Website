import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { PricingRecommender } from './PricingRecommender';

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

describe('PricingRecommender', () => {
  it('renders without crashing', () => {
    renderWithProviders(<PricingRecommender />);
  });

  it('shows English quiz introduction', async () => {
    renderWithProviders(<PricingRecommender />);
    await screen.findByText('Find Your Plan');
    expect(screen.getByText(/60 seconds/i)).toBeInTheDocument();
    expect(screen.getByText(/6 questions/i)).toBeInTheDocument();
  });

  it('shows first question', async () => {
    renderWithProviders(<PricingRecommender />);
    await screen.findByText(/How many customer support tickets/i);
    expect(screen.getByText(/Question 1 of 6/i)).toBeInTheDocument();
  });

  it('advances to next question when an option is selected', async () => {
    renderWithProviders(<PricingRecommender />);
    await screen.findByText(/How many customer support tickets/i);
    fireEvent.click(screen.getByText(/Less than 500/i));
    expect(await screen.findByText(/Question 2 of 6/i)).toBeInTheDocument();
  });

  it('goes back to previous question when Back is clicked', async () => {
    renderWithProviders(<PricingRecommender />);
    await screen.findByText(/How many customer support tickets/i);
    fireEvent.click(screen.getByText(/Less than 500/i));
    await screen.findByText(/Question 2 of 6/i);
    fireEvent.click(screen.getByText(/Back/i));
    expect(await screen.findByText(/Question 1 of 6/i)).toBeInTheDocument();
  });

  it('shows a plan recommendation after answering all questions', async () => {
    renderWithProviders(<PricingRecommender />);

    // Q1 has no Back button — wait for the question text instead
    await screen.findByText(/How many customer support tickets/i);
    fireEvent.click(screen.getByText(/Less than 500/i));

    // Q2–Q6: Back button is rendered from step > 0, use it as ready signal
    const remaining = [/Steady/, /Email and live chat only/, /Business hours only/, /Just English/, /I want maximum flexibility/];
    for (const answer of remaining) {
      await screen.findByRole('button', { name: /Back/i });
      fireEvent.click(screen.getByText(answer));
    }

    expect(await screen.findByText('Your Recommendation')).toBeInTheDocument();
  });

  it('shows German quiz heading when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<PricingRecommender />);
    await screen.findByText('Finden Sie Ihren Plan');
  });
});
