import { render, screen, fireEvent } from "@testing-library/react";
import { Careers } from "./Careers";
import { describe, it, expect, vi } from "vitest";

describe("Careers Component", () => {

  it("renders hero section heading", () => {
    render(<Careers />);

    expect(
      screen.getByRole("heading", {
        name: /Build Your Career with Kontivio/i
      })
    ).toBeInTheDocument();
  });

  it("renders Why Work section", () => {
    render(<Careers />);

    expect(
      screen.getByRole("heading", {
        name: /Why Work at Kontivio/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/100% Remote Work/i)
    ).toBeInTheDocument();
  });

  it("renders Core Values section", () => {
    render(<Careers />);

    expect(
      screen.getByRole("heading", {
        name: /Our Core Values/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Integrity/i)
    ).toBeInTheDocument();
  });

  it("renders Open Positions section", () => {
    render(<Careers />);

    expect(
      screen.getByRole("heading", {
        name: /Open Positions/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /Customer Support Specialist/i
      })
    ).toBeInTheDocument();
  });

  it("renders Hiring Process section", () => {
    render(<Careers />);

    expect(
      screen.getByRole("heading", {
        name: /Our Hiring Process/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Apply Online/i)
    ).toBeInTheDocument();
  });

  it("calls onApplyNow when Apply Now button clicked", () => {
    const mockApply = vi.fn();

    render(<Careers onApplyNow={mockApply} />);

    const applyButtons = screen.getAllByRole("button", {
      name: /Apply Now/i
    });

    fireEvent.click(applyButtons[0]);

    expect(mockApply).toHaveBeenCalledWith(
      "Customer Support Specialist"
    );
  });

  it("renders CTA email link", () => {
    render(<Careers />);

    expect(
      screen.getByRole("link", {
        name: /careers@kontivio.com/i
      })
    ).toBeInTheDocument();
  });

});