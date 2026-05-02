import { render, screen } from '@testing-library/react';
import { TechnologySolutions } from './TechnologySolutions';

describe('TechnologySolutions', () => {
  it('renders all 4 tech solutions', () => {
    render(<TechnologySolutions />);
    expect(screen.getByText(/CRM Integration/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-Time Dashboards/i)).toBeInTheDocument();
    expect(screen.getByText(/AI-Powered Routing/i)).toBeInTheDocument();
    expect(screen.getByText(/Quality Assurance Tools/i)).toBeInTheDocument();
  });
});
