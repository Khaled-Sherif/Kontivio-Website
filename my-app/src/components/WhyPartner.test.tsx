import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { WhyPartner } from "./WhyPartner";

// ✅ Mock shadcn Card component
vi.mock("./ui/card", () => ({
  Card: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card">{children}</div>
  ),
}));

// ✅ Mock lucide icons
vi.mock("lucide-react", () => ({
  Globe: () => <svg data-testid="icon-globe" />,
  Shield: () => <svg data-testid="icon-shield" />,
  Cpu: () => <svg data-testid="icon-cpu" />,
  Maximize2: () => <svg data-testid="icon-maximize" />,
}));

describe("WhyPartner component", () => {
  it("renders heading", () => {
    render(<WhyPartner />);
    expect(screen.getByText(/Why Partner with Kontivio/i)).toBeInTheDocument();
  });
});