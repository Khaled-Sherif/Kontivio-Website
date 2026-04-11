import { render, screen, within } from "@testing-library/react";
import { ContactUs } from "./ContactUs";

describe("ContactUs Component", () => {

  beforeEach(() => {
    render(<ContactUs />);
  });

  it("renders business hours section", () => {
    expect(
      screen.getByText(/Business Hours/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Monday - Friday:/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/8:00 AM - 6:00 PM EET/i)
    ).toBeInTheDocument();
  });

  it("renders Call Us section with phone number", () => {

    // Find the Call Us card first
    const callUsHeading = screen.getByText(/Call Us/i);

    const callUsCard = callUsHeading.closest("div");

    expect(callUsCard).toBeInTheDocument();

    // Search INSIDE that section only
    const phoneLink = within(callUsCard!).getByRole("link", {
      name: "+20 123 456 7890"
    });

    expect(phoneLink).toBeInTheDocument();

    expect(phoneLink).toHaveAttribute(
      "href",
      "tel:+201234567890"
    );
  });

  it("renders Email Us section with email address", () => {

    const emailLink = screen.getByRole("link", {
      name: "info@kontivio.com"
    });

    expect(emailLink).toBeInTheDocument();

    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:info@kontivio.com"
    );
  });

  it("renders Send Us a Message heading", () => {

    expect(
      screen.getByRole("heading", {
        name: /Send Us a Message/i
      })
    ).toBeInTheDocument();

  });

});