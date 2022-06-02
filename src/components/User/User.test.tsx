import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import User from "./User";

describe("Given a User component function", () => {
  describe("When invoked and a the user 'Nico' is logged but he has no profile picture", () => {
    test("Then it should render an unknown profile picture image and an heading with 'Nico' inside", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <User />
          </Provider>
        </BrowserRouter>
      );
      const profileImage = screen.getByRole("img");
      const username = screen.getByRole("heading");

      expect(profileImage).toBeInTheDocument();
      expect(username).toBeInTheDocument();
    });
  });
});
