import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { ContactForm } from './ContactForm';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('ContactForm', () => {
  it('renders without crashing', () => {
    renderWithProviders(<ContactForm />);
  });

  it('shows English field labels by default', async () => {
    renderWithProviders(<ContactForm />);
    await screen.findByLabelText(/Your Name/i);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/How can we help/i)).toBeInTheDocument();
  });

  it('shows scheduleCall-specific fields when prop is set', async () => {
    renderWithProviders(<ContactForm scheduleCall />);
    await screen.findByLabelText(/Preferred time/i);
    expect(screen.getByLabelText(/Your timezone/i)).toBeInTheDocument();
  });

  it('shows success message after form submit', async () => {
    renderWithProviders(<ContactForm />);
    const name = await screen.findByLabelText(/Your Name/i);
    fireEvent.change(name, { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@test.com' } });
    fireEvent.submit(name.closest('form')!);
    expect(await screen.findByText(/Message received/i)).toBeInTheDocument();
  });

  it('shows German labels when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<ContactForm />);
    await screen.findByLabelText(/Ihr Name/i);
    expect(screen.getByLabelText(/Unternehmen/i)).toBeInTheDocument();
  });
});
