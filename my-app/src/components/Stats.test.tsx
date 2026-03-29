import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stats } from "./Stats";

describe("Stats component", () => {
  it("renders all stat numbers", () => {
    render(<Stats />);

    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("50K+")).toBeInTheDocument();
    expect(screen.getByText("98%")).toBeInTheDocument();
    expect(screen.getByText("24/7")).toBeInTheDocument();
  });

  it("renders all stat labels", () => {
    render(<Stats />);

    expect(screen.getByText("Happy Clients")).toBeInTheDocument();
    expect(screen.getByText("Support Tickets Resolved")).toBeInTheDocument();
    expect(screen.getByText("Customer Satisfaction")).toBeInTheDocument();
    expect(screen.getByText("Support Available")).toBeInTheDocument();
  });

  it("renders 4 stats items", () => {
    render(<Stats />);

    const stats = screen.getAllByText(/Clients|Tickets|Satisfaction|Support/);
    expect(stats.length).toBeGreaterThanOrEqual(4);
  });

  it("has gradient background section", () => {
    render(<Stats />);

    const section = document.querySelector("section");
    expect(section).toBeInTheDocument();
    expect(section?.className).toContain("bg-gradient-to-r");
  });
});