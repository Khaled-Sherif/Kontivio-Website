import { render, screen } from "@testing-library/react";
import { HowItWorks } from "./HowItWorks";

describe("HowItWorks Component", () => {
  test("renders hero section", () => {
    render(<HowItWorks />);

    expect(
      screen.getByRole("heading", {
        name: /how it works/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /from first contact to exceptional service delivery/i
      )
    ).toBeInTheDocument();
  });

  test("renders all steps", () => {
    render(<HowItWorks />);

    const stepTitles = [
      "Initial Contact",
      "Needs Assessment",
      "CRM Setup",
      "Team Assembly & Training",
      "Launch & Ongoing Support",
    ];

    stepTitles.forEach((title) => {
      expect(
        screen.getAllByText(
          new RegExp(title, "i")
        )[0]
      ).toBeInTheDocument();
    });
  });

  test("renders process section", () => {
    render(<HowItWorks />);

    expect(
      screen.getByRole("heading", {
        name: /step-by-step process/i,
      })
    ).toBeInTheDocument();
  });

  test("renders CTA section", () => {
    render(<HowItWorks />);

    expect(
      screen.getByRole("heading", {
        name: /ready to get started/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /contact us today/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /view pricing options/i,
      })
    ).toBeInTheDocument();
  });

  test("renders CRM special section", () => {
    render(<HowItWorks />);

    expect(
      screen.getByText(/no crm\? no problem/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/ticket management system/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/reporting and analytics dashboard/i)
    ).toBeInTheDocument();
  });
});