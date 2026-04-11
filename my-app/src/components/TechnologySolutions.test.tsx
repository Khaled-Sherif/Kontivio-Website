import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { TechnologySolutions } from "./TechnologySolutions";

describe("TechnologySolutions Component", () => {
  
  it("renders the hero section", () => {
    render(
      <TechnologySolutions
        onNavigateHome={vi.fn()}
        onNavigateToContactUs={vi.fn()}
      />
    );

    expect(
      screen.getByRole("heading", { name: /technology solutions/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/empower your business with our comprehensive crm solutions/i)
    ).toBeInTheDocument();
  });

  it("renders CRM section content", () => {
    render(
      <TechnologySolutions
        onNavigateHome={vi.fn()}
        onNavigateToContactUs={vi.fn()}
      />
    );

    expect(
      screen.getByRole("heading", { name: /custom crm solutions/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/we understand that every business has unique needs/i)
    ).toBeInTheDocument();
  });

  it("renders feature cards", () => {
    render(
      <TechnologySolutions
        onNavigateHome={vi.fn()}
        onNavigateToContactUs={vi.fn()}
      />
    );

    expect(screen.getByText(/custom configuration/i)).toBeInTheDocument();
    expect(screen.getByText(/system integration/i)).toBeInTheDocument();
    expect(screen.getByText(/data security/i)).toBeInTheDocument();
    expect(screen.getByText(/cloud-based access/i)).toBeInTheDocument();
    expect(screen.getByText(/analytics & reporting/i)).toBeInTheDocument();
    expect(screen.getByText(/scalable solutions/i)).toBeInTheDocument();
  });

  it("calls onNavigateHome when back button clicked", async () => {
    const user = userEvent.setup();
    const mockNavigateHome = vi.fn();

    render(
      <TechnologySolutions
        onNavigateHome={mockNavigateHome}
        onNavigateToContactUs={vi.fn()}
      />
    );

    const backButton = screen.getByRole("button", { name: /back to home/i });

    await user.click(backButton);

    expect(mockNavigateHome).toHaveBeenCalledTimes(1);
  });

  it("calls onNavigateToContactUs when Contact Us clicked", async () => {
    const user = userEvent.setup();
    const mockContact = vi.fn();

    render(
      <TechnologySolutions
        onNavigateHome={vi.fn()}
        onNavigateToContactUs={mockContact}
      />
    );

    const contactButton = screen.getByRole("button", { name: /contact us/i });

    await user.click(contactButton);

    expect(mockContact).toHaveBeenCalledTimes(1);
  });

});