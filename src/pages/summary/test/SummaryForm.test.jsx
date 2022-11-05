import { render, fireEvent, screen, getByRole } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("Summary Form", () => {
  test("initial conditions", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole("button", { name: "Confirm order" });
    expect(confirmButton).toBeDisabled();
  });

  test("checkbox enables button on first click and disables on second click", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    const confirmButton = screen.getByRole("button", { name: "Confirm order" });

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });
});
