import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import store from "../../redux/store/store";
import { Provider } from "react-redux";

describe("Given a FormLogin component function", () => {
  describe("When invoked", () => {
    test("Then it should render 2 input fields and 2 buttons", () => {
      const expectedNumberOfButtons = 2;

      render(
        <Provider store={store}>
          <LoginForm />
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

  describe("When the user types 'Gino' in the username input field", () => {
    test("Then its value should be 'Gino", () => {
      const inputText = "Gino";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const inputField = screen.getByLabelText("Username");

      expect(inputField).toBeInTheDocument();

      userEvent.type(inputField, inputText);

      expect(inputField).toHaveValue(inputText);
    });
  });

  describe("When the user doesn't type any username or password", () => {
    test("Then the login button should be disabled", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const button = screen.getByRole("button", { name: "LOGIN" });

      expect(button).toBeDisabled();
    });
  });

  describe("When the user fill the username and password input fields", () => {
    test("Then the login button should be enabled", () => {
      const username = "Piero";
      const password = "piero";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const loginButton = screen.getByRole("button", { name: "LOGIN" });

      userEvent.type(usernameInput, username);
      userEvent.type(passwordInput, password);

      expect(loginButton).not.toBeDisabled();
    });
  });
});
