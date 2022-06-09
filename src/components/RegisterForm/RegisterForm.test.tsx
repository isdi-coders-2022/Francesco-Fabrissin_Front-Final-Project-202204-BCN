import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockToast } from "../../mocks/mockHooks";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

const mockDispatch = jest.fn();
const mockUseNavigate = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

jest.mock("react-hot-toast", () => ({
  error: mockToast,
}));

describe("Given a FormLogin component function", () => {
  describe("When invoked", () => {
    test("Then it should render 2 input fields and 2 buttons", () => {
      const expectedNumberOfButtons = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
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
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const inputField = screen.getByLabelText("Username");

      expect(inputField).toBeInTheDocument();

      userEvent.type(inputField, inputText);

      expect(inputField).toHaveValue(inputText);
    });
  });

  describe("When the user doesn't type in any fiels and click on the register button", () => {
    test("Then the error toast method should be called", () => {
      /*  jest.spyOn(toast, "error").jest.fn() */

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: "Register" });

      userEvent.click(button);

      expect(mockToast).toHaveBeenCalled();
    });
  });

  describe("When the user fills the name, username and password fields and clicks on the submit button", () => {
    test("Then the dispatch should be invoked", () => {
      const textInput = [
        "fra432",
        "fra432",
        "fra@gmail.com",
        "Barcelona",
        "Electronic",
      ];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameField = screen.getByLabelText("Username");
      const passwordField = screen.getByLabelText("Password");
      const emailField = screen.getByLabelText("Email");
      const genreField = screen.getByLabelText("Collection music genre");
      const locationField = screen.getByLabelText(
        "Location (City or closer city)"
      );
      const registerButton = screen.getByRole("button", { name: "Register" });

      userEvent.type(usernameField, textInput[0]);
      userEvent.type(passwordField, textInput[1]);
      userEvent.type(emailField, textInput[2]);
      userEvent.type(locationField, textInput[3]);
      userEvent.selectOptions(genreField, "Rock");

      userEvent.click(registerButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When the user clicks on the 'Already have an account' button", () => {
    test("Then the dispatch should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const goToLoginButton = screen.getByRole("button", {
        name: "Already have an account?",
      });

      userEvent.click(goToLoginButton);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
