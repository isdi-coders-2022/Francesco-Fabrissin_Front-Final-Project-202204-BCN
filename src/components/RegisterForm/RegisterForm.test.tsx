import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

describe("Given a FormLogin component function", () => {
  describe("When invoked", () => {
    test("Then it should render 2 input fields and 2 buttons", () => {
      const expectedNumberOfButtons = 2;

      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const buttons = screen.getAllByRole("button");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(buttons).toHaveLength(expectedNumberOfButtons);
    });
  });

  describe("When the user types 'Gianna' in the username input field", () => {
    test("Then its value should be 'Gianna", () => {
      const inputText = "fra432";

      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const inputField = screen.getByLabelText("Username");

      expect(inputField).toBeInTheDocument();

      userEvent.type(inputField, inputText);

      expect(inputField).toHaveValue(inputText);
    });
  });

  describe("When the user doesn't fill the name, username or password field", () => {
    test("Then the register button should be disabled", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const registerButton = screen.getByRole("button", { name: "Register" });

      expect(registerButton).toBeDisabled();
    });
  });

  describe("When the user fills the name, username and password fields", () => {
    test("Then the register button should be enabled", () => {
      const textInput = ["fra432", "fra432", "fra@gmail.com", "Barcelona"];

      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const usernameField = screen.getByLabelText("Username");
      const passwordField = screen.getByLabelText("Password");
      const emailField = screen.getByLabelText("Email");
      const locationField = screen.getByLabelText(
        "Location (City or closer city)"
      );
      const registerButton = screen.getByRole("button", { name: "Register" });

      userEvent.type(usernameField, textInput[0]);
      userEvent.type(passwordField, textInput[1]);
      userEvent.type(emailField, textInput[2]);
      userEvent.type(locationField, textInput[3]);

      expect(registerButton).not.toBeDisabled();
    });
  });
});
