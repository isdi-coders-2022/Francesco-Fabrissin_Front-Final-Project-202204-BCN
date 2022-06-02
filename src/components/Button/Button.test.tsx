import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component function", () => {
  const buttonText = "See collection";
  const action = jest.fn();
  describe("When invoked with the text 'See collection'", () => {
    test("Then it should render a button with the text 'See collection'", () => {
      render(<Button text={buttonText} action={action} />);

      const button = screen.getByRole("button", { name: "See collection" });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When invoked with the text 'See collection' and an action, and the user click on it", () => {
    test("Then it should render a button with the text 'See collection' and it should invoke the received action", () => {
      render(<Button text={buttonText} action={action} />);

      const button = screen.getByRole("button", { name: "See collection" });
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
