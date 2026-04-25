import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ApplyNow } from "./ApplyNow";

test("submits form and shows success screen", async () => {
  render(<ApplyNow />);

  fireEvent.change(
    screen.getByLabelText(/first name/i),
    { target: { value: "Test" } }
  );

  fireEvent.change(
    screen.getByLabelText(/last name/i),
    { target: { value: "User" } }
  );

  fireEvent.change(
    screen.getByTestId("resume-upload"),
    {
      target: {
        files: [
          new File(["resume"], "resume.pdf", {
            type: "application/pdf",
          }),
        ],
      },
    }
  );

  fireEvent.submit(
    screen.getByRole("button", {
      name: /submit/i,
    })
  );

  await waitFor(() => {
    expect(
      screen.getByText(
        /application submitted successfully/i
      )
    ).toBeInTheDocument();
  });
});