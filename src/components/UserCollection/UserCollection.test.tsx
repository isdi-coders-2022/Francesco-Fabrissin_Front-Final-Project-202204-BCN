import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import UserCollection from "./UserCollection";

describe("Given a UserCollection component", () => {
  describe("When invoked with the username 'Nico', location 'Barcelona', and genre 'Electronic'", () => {
    test("Then it should render a card with the information received and an avatar", () => {
      const user = {
        username: "Nico",
        image: "",
        location: "Barcelona",
        genre: "Electronic",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserCollection user={user} />
          </Provider>
        </BrowserRouter>
      );

      const username = screen.getByRole("heading", {
        name: `${user.username} Collection`,
      });
      const image = screen.getByRole("img");
      const location = screen.getByRole("heading", {
        name: `Location: ${user.location}`,
      });
      const genre = screen.getByRole("heading", {
        name: `Genre: ${user.genre}`,
      });

      expect(username).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(location).toBeInTheDocument();
      expect(genre).toBeInTheDocument();
    });
  });
});
