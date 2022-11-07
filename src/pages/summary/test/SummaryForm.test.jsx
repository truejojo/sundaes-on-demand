import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("checkbox enables button on first click and disables on second click", async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();

    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    const confirmButton = screen.getByRole("button", { name: "Confirm order" });

    await user.click(checkbox);
    expect(confirmButton).toBeEnabled();

    await user.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });

  test("popover responds to hover", async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();

    // popover starts out hidden
    const nullPopover = screen.queryByText(
      /No ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears on mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(
      /No ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
