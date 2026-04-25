import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pricing } from "./Pricing";
import { vi } from "vitest";

describe("Pricing Component", () => {
  test("renders Per Contact pricing section", () => {
    render(<Pricing onNavigateHome={vi.fn()} />);

    const perContactHeading =
      screen.getByRole("heading", {
        name: /Per Contact Pricing/i
      });

    expect(perContactHeading).toBeInTheDocument();

    // Scope inside Per Contact section
    const section =
      perContactHeading.closest("section")!;

    expect(
      within(section).getByText("Professional")
    ).toBeInTheDocument();
  });

  test("renders Per Agent pricing section", () => {
    render(<Pricing onNavigateHome={vi.fn()} />);

    const perAgentHeading =
      screen.getByRole("heading", {
        name: /Per Agent Head Pricing/i
      });

    expect(perAgentHeading).toBeInTheDocument();

    const section =
      perAgentHeading.closest("section")!;

    expect(
      within(section).getByText("Elite Agent")
    ).toBeInTheDocument();
  });

  test("renders comparison table", () => {
    render(<Pricing onNavigateHome={vi.fn()} />);

    const comparisonHeading =
      screen.getByRole("heading", {
        name: /Which Model is Right for You/i
      });

    expect(comparisonHeading).toBeInTheDocument();

    const section =
      comparisonHeading.closest("section")!;

    expect(
      within(section).getByText("Scalability")
    ).toBeInTheDocument();
  });

  test("calls onNavigateHome when Back to Home clicked", async () => {
    const mockNavigate = vi.fn();

    render(
      <Pricing onNavigateHome={mockNavigate} />
    );

    const button =
      screen.getByRole("button", {
        name: /Back to Home/i
      });

    await userEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  test("calls onNavigateHome when Contact Sales Team clicked", async () => {
    const mockNavigate = vi.fn();

    render(
      <Pricing onNavigateHome={mockNavigate} />
    );

    const button =
      screen.getByRole("button", {
        name: /Contact Sales Team/i
      });

    await userEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});