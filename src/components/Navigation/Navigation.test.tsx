import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Navigation from "./Navigation";

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
});
