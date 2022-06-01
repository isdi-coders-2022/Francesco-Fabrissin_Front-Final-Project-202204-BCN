import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Navigation from "./Navigation";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Navbar component function", () => {
  describe("When invoked", () => {
    test("Then it should render a nav  and a logout button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const navbar = screen.getByRole("navigation");
      const logoutButton = screen.getByRole("button", { name: "Logout" });

      expect(navbar).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });
  });

  describe("When invoked and the user clicks on the logout button", () => {
    test("Then it should invoke the logout function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const logoutButton = screen.getByRole("button", { name: "Logout" });
      userEvent.click(logoutButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
