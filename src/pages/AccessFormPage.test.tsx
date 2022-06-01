import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import store from "../redux/store/store";
import AccessFormPage from "./AccesFormPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ register: "register" }),
}));

describe("Given a AccesFormPage component", () => {
  describe("When the param 'register' is present", () => {
    test("Then it should render a RegisterForm", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AccessFormPage />
          </Provider>
        </BrowserRouter>
      );
      const registerButton = screen.getByRole("button", { name: "Register" });

      expect(registerButton).toBeInTheDocument();
    });
  });
});
