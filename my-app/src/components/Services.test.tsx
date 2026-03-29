import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Services } from "./Services";

/* ================= MOCKS ================= */

// ✅ Mock shadcn Card
vi.mock("@/components/ui/card", () => ({
  Card: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card">{children}</div>
  ),
}));

// ✅ Mock shadcn Button
vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

// ✅ Mock lucide icons
vi.mock("lucide-react", () => ({
  Headphones: () => <svg data-testid="icon-headphones" />,
  MessageSquare: () => <svg data-testid="icon-message" />,
  Clock: () => <svg data-testid="icon-clock" />,
  Users: () => <svg data-testid="icon-users" />,
}));

/* ================= TESTS ================= */

describe("Services component", () => {
  it("renders section heading and subtitle", () => {
    render(<Services onNavigateToServices={vi.fn()} />);

    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Comprehensive customer experience solutions/i)
    ).toBeInTheDocument();
  });

  it("renders 4 service cards", () => {
    render(<Services onNavigateToServices={vi.fn()} />);

    const cards = screen.getAllByTestId("card");
    expect(cards).toHaveLength(4);
  });

  it("renders all service titles", () => {
    render(<Services onNavigateToServices={vi.fn()} />);

    expect(screen.getByText("Customer Support")).toBeInTheDocument();
    expect(screen.getByText("Live Chat Support")).toBeInTheDocument();
    expect(screen.getByText("Technical Support")).toBeInTheDocument();
    expect(screen.getByText("Sales Support")).toBeInTheDocument();
  });

  it("renders Learn More buttons", () => {
    render(<Services onNavigateToServices={vi.fn()} />);

    const buttons = screen.getAllByRole("button", { name: /learn more/i });
    expect(buttons).toHaveLength(4);
  });

  it("calls onNavigateToServices when Learn More is clicked", () => {
    const mockFn = vi.fn();
    render(<Services onNavigateToServices={mockFn} />);

    const button = screen.getAllByRole("button", { name: /learn more/i })[0];
    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("renders all icons", () => {
    render(<Services onNavigateToServices={vi.fn()} />);

    expect(screen.getByTestId("icon-headphones")).toBeInTheDocument();
    expect(screen.getByTestId("icon-message")).toBeInTheDocument();
    expect(screen.getByTestId("icon-clock")).toBeInTheDocument();
    expect(screen.getByTestId("icon-users")).toBeInTheDocument();
  });

  it("has services section id", () => {
    render(<Services onNavigateToServices={vi.fn()} />);

    expect(document.querySelector("#services")).toBeInTheDocument();
  });
});