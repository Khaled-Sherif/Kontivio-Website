import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AboutUs } from "./AboutUs";

describe("AboutUs Component", () => {
  const mockNavigateHome = vi.fn();
  const mockNavigateContact = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders hero section", () => {
    render(
      <AboutUs
        onNavigateHome={mockNavigateHome}
        onNavigateToContactUs={mockNavigateContact}
      />
    );

    expect(
      screen.getByRole("heading", {
        name: /about kontivio/i,
        level: 1,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/trusted partner/i)
    ).toBeInTheDocument();
  });

  test("renders mission and vision sections", () => {
    render(
      <AboutUs
        onNavigateHome={mockNavigateHome}
        onNavigateToContactUs={mockNavigateContact}
      />
    );

    expect(
      screen.getByRole("heading", {
        name: /our mission/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /our vision/i,
      })
    ).toBeInTheDocument();
  });

  test("renders core values cards", () => {
    render(
      <AboutUs
        onNavigateHome={mockNavigateHome}
        onNavigateToContactUs={mockNavigateContact}
      />
    );

    expect(
      screen.getByRole("heading", { name: "Customer First" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Excellence" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Teamwork" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Innovation" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Integrity" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Accountability" })
    ).toBeInTheDocument();
  });

  test("calls navigation when Back to Home is clicked", async () => {
    const user = userEvent.setup();

    render(
      <AboutUs
        onNavigateHome={mockNavigateHome}
        onNavigateToContactUs={mockNavigateContact}
      />
    );

    const backButton = screen.getByRole("button", {
      name: /back to home/i,
    });

    await user.click(backButton);

    expect(mockNavigateHome).toHaveBeenCalledTimes(1);
  });

  test("calls navigation when Contact Us is clicked", async () => {
    const user = userEvent.setup();

    render(
      <AboutUs
        onNavigateHome={mockNavigateHome}
        onNavigateToContactUs={mockNavigateContact}
      />
    );

    const contactButton = screen.getByRole("button", {
      name: /contact us/i,
    });

    await user.click(contactButton);

    expect(mockNavigateContact).toHaveBeenCalledTimes(1);
  });
});