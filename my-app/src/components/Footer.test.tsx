import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Footer } from "./Footer";

/* ================= MOCKS ================= */

// Mock image import
vi.mock("@/assets/White_Logo.png", () => ({
  default: "logo-mock.png",
}));

// Mock shadcn Button (even if not used directly, safe)ff
vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

// Mock lucide icons
vi.mock("lucide-react", () => ({
  Mail: () => <svg data-testid="icon-mail" />,
  Linkedin: () => <svg data-testid="icon-linkedin" />,
  Instagram: () => <svg data-testid="icon-instagram" />,
  Phone: () => <svg data-testid="icon-phone" />,
}));

/* ================= TESTS ================= */

describe("Footer component", () => {
  it("renders company name and description", () => {
    render(<Footer />);

    expect(screen.getByText("Kontivio")).toBeInTheDocument();
    expect(
      screen.getByText(/Leading provider of remote customer support solutions/i)
    ).toBeInTheDocument();
  });

  it("renders quick links", () => {
    render(<Footer />);

    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getAllByText("Services")).toHaveLength(2);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders services list", () => {
    render(<Footer />);

    expect(screen.getByText("Customer Support")).toBeInTheDocument();
    expect(screen.getByText("Live Chat")).toBeInTheDocument();
    expect(screen.getByText("Technical Support")).toBeInTheDocument();
    expect(screen.getByText("Sales Support")).toBeInTheDocument();
  });

  it("renders bottom bar text", () => {
    render(<Footer />);

    expect(
      screen.getByText(/© 2025 Kontivio. All rights reserved./i)
    ).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
    expect(screen.getByText("Cookie Policy")).toBeInTheDocument();
  });

  it("calls onNavigateHome when logo or Home link is clicked", () => {
    const mockHome = vi.fn();
    render(<Footer onNavigateHome={mockHome} />);

    // Click logo wrapper (text)
    fireEvent.click(screen.getByText("Kontivio"));
    expect(mockHome).toHaveBeenCalled();

    // Click Home link
    fireEvent.click(screen.getByText("Home"));
    expect(mockHome).toHaveBeenCalled();
  });

  it("calls onNavigateToContactUs when Contact link is clicked", () => {
    const mockContact = vi.fn();
    render(<Footer onNavigateToContactUs={mockContact} />);

    fireEvent.click(screen.getByText("Contact"));
    expect(mockContact).toHaveBeenCalledTimes(1);
  });

  it("renders social icons", () => {
    render(<Footer />);

    expect(screen.getByTestId("icon-linkedin")).toBeInTheDocument();
    expect(screen.getByTestId("icon-instagram")).toBeInTheDocument();
    expect(screen.getByTestId("icon-phone")).toBeInTheDocument();
  });

  it("renders logo image", () => {
    render(<Footer />);

    const logo = screen.getByAltText("Kontivio Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo-mock.png");
  });
});