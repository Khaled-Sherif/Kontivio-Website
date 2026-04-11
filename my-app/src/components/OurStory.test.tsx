import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OurStory } from "./OurStory";

describe("OurStory Component", () => {
  const mockNavigateHome = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders main hero heading", () => {
    render(
      <OurStory onNavigateHome={mockNavigateHome} />
    );

    expect(
      screen.getByRole("heading", {
        name: /our story/i,
        level: 1,
      })
    ).toBeInTheDocument();
  });

  test("renders timeline sections", () => {
    render(
      <OurStory onNavigateHome={mockNavigateHome} />
    );

    expect(
      screen.getByRole("heading", {
        name: /the beginning/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /our journey/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/the foundation/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/building our team/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/scaling our operations/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/global expansion/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/recognition & growth/i)
    ).toBeInTheDocument();
  });

  test("renders culture section items", () => {
    render(
      <OurStory onNavigateHome={mockNavigateHome} />
    );

    expect(
      screen.getByText(/comprehensive training/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/flexible work arrangements/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/diverse and inclusive workplace/i)
    ).toBeInTheDocument();
  });

  test("calls onNavigateHome when Back to Home button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <OurStory onNavigateHome={mockNavigateHome} />
    );

    const backButton = screen.getByRole("button", {
      name: /back to home/i,
    });

    await user.click(backButton);

    expect(mockNavigateHome).toHaveBeenCalledTimes(1);
  });

  test("calls onNavigateHome when Partner With Us button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <OurStory onNavigateHome={mockNavigateHome} />
    );

    const partnerButton = screen.getByRole("button", {
      name: /partner with us/i,
    });

    await user.click(partnerButton);

    expect(mockNavigateHome).toHaveBeenCalledTimes(1);
  });

  test("renders main image with correct alt text", () => {
    render(
      <OurStory onNavigateHome={mockNavigateHome} />
    );

    expect(
      screen.getByAltText(/our beginning/i)
    ).toBeInTheDocument();
  });
});