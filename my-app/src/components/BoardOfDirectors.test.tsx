import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BoardOfDirectors } from "./BoardOfDirectors";

describe("BoardOfDirectors Component", () => {

  it("renders main hero heading", () => {
    render(<BoardOfDirectors onNavigateHome={() => {}} />);

    expect(
      screen.getByRole("heading", {
        name: "Board of Directors"
      })
    ).toBeInTheDocument();
  });

  it("renders introduction heading", () => {
    render(<BoardOfDirectors onNavigateHome={() => {}} />);

    expect(
      screen.getByRole("heading", {
        name: "Leadership That Drives Excellence"
      })
    ).toBeInTheDocument();
  });

  it("renders board member names", () => {
    render(<BoardOfDirectors onNavigateHome={() => {}} />);

    expect(screen.getByText("Robert Anderson")).toBeInTheDocument();
    expect(screen.getByText("Sarah Mitchell")).toBeInTheDocument();
    expect(screen.getByText("David Chen")).toBeInTheDocument();
    expect(screen.getByText("Maria Rodriguez")).toBeInTheDocument();
    expect(screen.getByText("James Thompson")).toBeInTheDocument();
    expect(screen.getByText("Emily Carter")).toBeInTheDocument();
  });

  it("renders governance section", () => {
    render(<BoardOfDirectors onNavigateHome={() => {}} />);

    expect(
      screen.getByRole("heading", {
        name: "Our Governance Principles"
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Transparency" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Accountability" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Ethics" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Innovation" })
    ).toBeInTheDocument();
  });

  it("renders board member images", () => {
    render(<BoardOfDirectors onNavigateHome={() => {}} />);

    expect(
      screen.getByAltText("Robert Anderson")
    ).toBeInTheDocument();

    expect(
      screen.getByAltText("Sarah Mitchell")
    ).toBeInTheDocument();
  });

  it("renders LinkedIn and Email links", () => {
    render(<BoardOfDirectors onNavigateHome={() => {}} />);

    expect(
      screen.getByLabelText("Robert Anderson's LinkedIn")
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Email Robert Anderson")
    ).toBeInTheDocument();
  });

  it("calls onNavigateHome when Back to Home button is clicked", () => {
    const mockNavigateHome = vi.fn();

    render(
      <BoardOfDirectors onNavigateHome={mockNavigateHome} />
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
      <BoardOfDirectors onNavigateHome={mockNavigateHome} />
    );

    const contactButton = screen.getByRole("button", {
      name: "Contact Us"
    });

    fireEvent.click(contactButton);

    expect(mockNavigateHome).toHaveBeenCalledTimes(1);
  });

});