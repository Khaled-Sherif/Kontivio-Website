import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ContactForm } from "./ContactForm";

/* ================= MOCKS ================= */

// Mock shadcn Card
vi.mock("@/components/ui/card", () => ({
  Card: ({ children }: any) => <div data-testid="card">{children}</div>,
}));

// Mock shadcn Button
vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick, type }: any) => (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  ),
}));

// Mock shadcn Input
vi.mock("@/components/ui/input", () => ({
  Input: (props: any) => <input {...props} />,
}));

// Mock shadcn Textarea
vi.mock("@/components/ui/textarea", () => ({
  Textarea: (props: any) => <textarea {...props} />,
}));

// Mock lucide icons
vi.mock("lucide-react", () => ({
  Mail: () => <svg data-testid="icon-mail" />,
  Phone: () => <svg data-testid="icon-phone" />,
  MapPin: () => <svg data-testid="icon-map" />,
}));

/* ================= TESTS ================= */

describe("ContactForm component", () => {
  it("renders headings and contact info", () => {
    render(<ContactForm />);

    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
    expect(screen.getByText("Contact Information")).toBeInTheDocument();
    expect(screen.getByText("contactus@kontivio.com")).toBeInTheDocument();
    expect(screen.getByText("+1 (555) 123-4567")).toBeInTheDocument();
  });

  it("renders form fields", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Company")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("updates input values on change", () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "Khaled" } });
    fireEvent.change(emailInput, { target: { value: "khaled@test.com" } });

    expect(nameInput.value).toBe("Khaled");
    expect(emailInput.value).toBe("khaled@test.com");
  });

  it("submits the form", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Khaled" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "khaled@test.com" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hello there" },
    });

    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("renders icons", () => {
    render(<ContactForm />);

    expect(screen.getByTestId("icon-mail")).toBeInTheDocument();
    expect(screen.getByTestId("icon-phone")).toBeInTheDocument();
    expect(screen.getByTestId("icon-map")).toBeInTheDocument();
  });

  it("has contact section id", () => {
    render(<ContactForm />);
    expect(document.querySelector("#contact")).toBeInTheDocument();
  });
});