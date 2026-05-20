import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { FAQ } from './FAQ';

const renderWithProviders = (ui: React.ReactElement) =>
  render(<I18nProvider><MemoryRouter>{ui}</MemoryRouter></I18nProvider>);

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('FAQ', () => {
  it('renders without crashing', () => {
    renderWithProviders(<FAQ />);
  });

  it('shows all six questions in English', async () => {
    renderWithProviders(<FAQ />);
    await screen.findByText(/Do I need to be a large company/i);
    expect(screen.getByText(/How do agents learn our product/i)).toBeInTheDocument();
    expect(screen.getByText(/How quickly can we get started/i)).toBeInTheDocument();
    expect(screen.getByText(/Can I see operations in real time/i)).toBeInTheDocument();
    expect(screen.getByText(/Which tools do you integrate with/i)).toBeInTheDocument();
    expect(screen.getByText(/Do you support multilingual customers/i)).toBeInTheDocument();
  });

  it('clicking a question reveals its answer', async () => {
    renderWithProviders(<FAQ />);
    const question = await screen.findByText(/Do I need to be a large company/i);
    fireEvent.click(question.closest('.k-faq-item')!);
    expect(screen.getByText(/We work with businesses of all sizes/i)).toBeVisible();
  });

  it('clicking the same question twice closes it', async () => {
    renderWithProviders(<FAQ />);
    const item = (await screen.findByText(/Do I need to be a large company/i)).closest('.k-faq-item')!;
    fireEvent.click(item);
    expect(item).toHaveClass('open');
    fireEvent.click(item);
    expect(item).not.toHaveClass('open');
  });

  it('shows German questions when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderWithProviders(<FAQ />);
    await screen.findByText(/Muss ich ein großes Unternehmen sein/i);
  });
});
