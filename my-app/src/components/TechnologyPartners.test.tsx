import { render, screen } from '@testing-library/react';
import { TechnologyPartners } from './TechnologyPartners';

describe('TechnologyPartners', () => {
  it('renders partner names', () => {
    render(<TechnologyPartners />);
    expect(screen.getByText('Salesforce')).toBeInTheDocument();
    expect(screen.getByText('HubSpot')).toBeInTheDocument();
    expect(screen.getByText('Zendesk')).toBeInTheDocument();
  });
});
