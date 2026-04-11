import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TechnologyPartners } from "./TechnologyPartners";

describe("TechnologyPartners Component", () => {

  it("renders hero heading correctly", () => {
    render(<TechnologyPartners onNavigateHome={() => {}} />);

    // Use role to avoid duplicate text matches
    expect(
      screen.getByRole("heading", { name: "Technology Partners" })
    ).toBeInTheDocument();
  });

  it("renders introduction section", () => {
    render(<TechnologyPartners onNavigateHome={() => {}} />);

    expect(
      screen.getByRole("heading", {
        name: "Powered by Best-in-Class Technology"
      })
    ).toBeInTheDocument();
  });

  it("renders technology categories", () => {
    render(<TechnologyPartners onNavigateHome={() => {}} />);

    expect(
      screen.getByRole("heading", {
        name: "CRM & Customer Management"
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Communication & Phone Systems"
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Cloud & Infrastructure"
      })
    ).toBeInTheDocument();
  });

  it("renders sample technology tools", () => {
    render(<TechnologyPartners onNavigateHome={() => {}} />);

    expect(screen.getByText("Salesforce")).toBeInTheDocument();
    expect(screen.getByText("Twilio")).toBeInTheDocument();
    expect(screen.getByText("Google Analytics")).toBeInTheDocument();
    expect(screen.getByText("Amazon Web Services")).toBeInTheDocument();
  });

  it("renders integration section", () => {
    render(<TechnologyPartners onNavigateHome={() => {}} />);

    expect(
      screen.getByRole("heading", {
        name: "Our Integration Approach"
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Seamless Integration"
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Real-Time Analytics"
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Cloud-Based Security"
      })
    ).toBeInTheDocument();
  });

  it("calls onNavigateHome when Back to Home button is clicked", () => {
    const mockNavigateHome = vi.fn();

    render(
      <TechnologyPartners onNavigateHome={mockNavigateHome} />
    );

    const backButton = screen.getByRole("button", {
      name: /back to home/i
    });

    fireEvent.click(backButton);

    expect(mockNavigateHome).toHaveBeenCalledTimes(1);
  });

  it("calls onNavigateHome when Contact Us button is clicked", () => {
    const mockNavigateHome = vi.fn();

    render(
      <TechnologyPartners onNavigateHome={mockNavigateHome} />
    );

    const contactButton = screen.getByRole("button", {
      name: "Contact Us"
    });

    fireEvent.click(contactButton);

    expect(mockNavigateHome).toHaveBeenCalledTimes(1);
  });

});