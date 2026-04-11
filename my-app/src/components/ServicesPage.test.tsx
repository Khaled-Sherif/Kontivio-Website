import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { ServicesPage } from "./ServicesPage"

// Mock external components
vi.mock("./BackgroundGraphics", () => ({
  FloatingCircles: () => <div data-testid="floating-circles" />
}))

vi.mock("./common/ImageWithFallback", () => ({
  ImageWithFallback: ({ src, alt }: any) => <img src={src} alt={alt} />
}))

describe("ServicesPage", () => {

  it("renders hero section", () => {
    render(<ServicesPage onNavigateHome={vi.fn()} />)

    expect(screen.getByText("Our Services")).toBeInTheDocument()

    expect(
      screen.getByText(/Comprehensive customer experience solutions/i)
    ).toBeInTheDocument()
  })

  it("renders service titles", () => {
    render(<ServicesPage onNavigateHome={vi.fn()} />)

    expect(screen.getByText("Customer Support")).toBeInTheDocument()
    expect(screen.getByText("Live Chat Support")).toBeInTheDocument()
    expect(screen.getByText("Technical Support")).toBeInTheDocument()
    expect(screen.getByText("Sales Support")).toBeInTheDocument()
    expect(screen.getByText("Email Support")).toBeInTheDocument()
    expect(screen.getByText("Social Media Support")).toBeInTheDocument()
  })

  it("back button triggers navigation", async () => {
    const user = userEvent.setup()
    const navigateHome = vi.fn()

    render(<ServicesPage onNavigateHome={navigateHome} />)

    const button = screen.getByRole("button", { name: /back to home/i })

    await user.click(button)

    expect(navigateHome).toHaveBeenCalledTimes(1)
  })

  it("contact button triggers navigation", async () => {
    const user = userEvent.setup()
    const contactFn = vi.fn()

    render(
      <ServicesPage
        onNavigateHome={vi.fn()}
        onNavigateToContactUs={contactFn}
      />
    )

    const contactButton = screen.getByRole("button", { name: /contact us/i })

    await user.click(contactButton)

    expect(contactFn).toHaveBeenCalledTimes(1)
  })

  it("renders CTA section", () => {
    render(<ServicesPage onNavigateHome={vi.fn()} />)

    expect(screen.getByText("Ready to Get Started?")).toBeInTheDocument()
  })

})