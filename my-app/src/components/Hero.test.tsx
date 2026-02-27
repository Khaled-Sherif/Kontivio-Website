import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Hero } from "./Hero";

describe("Hero component", () => {
  it("renders headline and subheadline", () => {
    render(<Hero />);

    expect(
      screen.getByText(/Exceptional Customer Support/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Scale your customer support/i)
    ).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    render(<Hero />);

    const button = screen.getByRole("button", { name: /get started free/i });
    expect(button).toBeInTheDocument();
  });

  it("calls onGetStarted when button is clicked", () => {
    const mockFn = vi.fn();

    render(<Hero onGetStarted={mockFn} />);

    const button = screen.getByRole("button", { name: /get started free/i });
    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("renders feature pills", () => {
    render(<Hero />);

    expect(screen.getByText(/98% Client Satisfaction/i)).toBeInTheDocument();
    expect(screen.getByText(/24\/7 Support Available/i)).toBeInTheDocument();
    expect(screen.getByText(/2 Min Response Time/i)).toBeInTheDocument();
  });
});