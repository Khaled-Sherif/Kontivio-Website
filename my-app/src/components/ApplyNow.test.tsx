import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { I18nProvider } from '../i18n';
import { ApplyNow } from './ApplyNow';

const renderAt = (path: string) =>
  render(
    <I18nProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/careers/apply" element={<ApplyNow />} />
        </Routes>
      </MemoryRouter>
    </I18nProvider>
  );

beforeAll(() => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, json: async () => ({}) } as Response);
});
afterAll(() => vi.restoreAllMocks());
beforeEach(() => localStorage.clear());

describe('ApplyNow', () => {
  it('renders without crashing', () => {
    renderAt('/careers/apply');
  });

  it('shows generic English heading when no position param', async () => {
    renderAt('/careers/apply');
    await screen.findByText('Apply Now');
    expect(screen.getByRole('heading', { level: 1, name: /Submit your application/i })).toBeInTheDocument();
  });

  it('shows specific heading when position param is provided', async () => {
    renderAt('/careers/apply?position=Customer+Support+Specialist');
    await screen.findByRole('heading', { level: 1, name: /Apply for Customer Support Specialist/i });
  });

  it('renders all form fields', async () => {
    renderAt('/careers/apply');
    await screen.findByLabelText(/Full Name/i);
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Position/i)).toBeInTheDocument();
  });

  it('shows CV error when submitting without a file', async () => {
    renderAt('/careers/apply');
    const btn = await screen.findByRole('button', { name: /Submit Application/i });
    fireEvent.submit(btn.closest('form')!);
    expect(await screen.findByText(/Please upload your CV/i)).toBeInTheDocument();
  });

  it('shows German labels when language is set to de', async () => {
    localStorage.setItem('kontivio_lang', 'de');
    renderAt('/careers/apply');
    await screen.findByText('Jetzt bewerben');
    expect(screen.getByLabelText(/Vollständiger Name/i)).toBeInTheDocument();
  });
});
