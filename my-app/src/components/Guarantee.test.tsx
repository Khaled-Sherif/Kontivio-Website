import { render, screen } from '@testing-library/react';
import { Guarantee } from './Guarantee';

describe('Guarantee', () => {
  it('renders all guarantee cards', () => {
    render(<Guarantee />);
    expect(screen.getByText(/Quality Guaranteed/i)).toBeInTheDocument();
    expect(screen.getByText(/No Lock-in/i)).toBeInTheDocument();
    expect(screen.getByText(/SLA-Backed Response/i)).toBeInTheDocument();
    expect(screen.getByText(/Full Transparency/i)).toBeInTheDocument();
  });
});
