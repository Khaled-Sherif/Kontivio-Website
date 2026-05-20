import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { ContactUs } from './ContactUs';

const renderAt = (path: string) =>
  render(
    <I18nProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </MemoryRouter>
    </I18nProvider>
  );

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

describe('ContactUs', () => {
  it('renders without crashing', () => {
    renderAt('/contact');
  });

  it('shows default contact hero heading', async () => {
    renderAt('/contact');
    await screen.findByText("Get In Touch");
    expect(screen.getByRole('heading', { level: 1, name: /Let's talk about/i })).toBeInTheDocument();
  });

  it('shows schedule-call hero when intent param is set', async () => {
    renderAt('/contact?intent=schedule-call');
    await screen.findByRole('heading', { level: 1, name: /Let's pick a time/i });
  });

  it('renders the contact form', async () => {
    renderAt('/contact');
    await screen.findByLabelText(/Your Name/i);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });

  it('shows German heading when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderAt('/contact');
    await screen.findByText('Kontaktieren Sie uns');
  });
});
