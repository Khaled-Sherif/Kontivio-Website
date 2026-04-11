import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { BusinessDevelopment } from "./BusinessDevelopment";

describe("BusinessDevelopment Component", () => {

  it("renders the main heading", () => {
    render(<BusinessDevelopment onNavigateHome={() => {}} />);

    expect(
      screen.getByText("Business Development Solutions")
    ).toBeInTheDocument();
  });

  it("renders service sections", () => {
    render(<BusinessDevelopment onNavigateHome={() => {}} />);

    expect(
      screen.getByText("Dedicated Team Management")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Quality Assurance & Monitoring")
    ).toBeInTheDocument();
  });

  it("calls onNavigateHome when Back to Home button is clicked", async () => {
    const mockNavigate = vi.fn();

    render(<BusinessDevelopment onNavigateHome={mockNavigate} />);

    const button = screen.getByText("← Back to Home");

    await userEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  it("renders CTA section", () => {
    render(<BusinessDevelopment onNavigateHome={() => {}} />);

    expect(
      screen.getByText("Ready to Build Your Dream Team?")
    ).toBeInTheDocument();
  });

});