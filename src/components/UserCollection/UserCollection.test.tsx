import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import UserCollection from "./UserCollection";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a UserCollection component", () => {
  const user = {
    id: "1",
    username: "Nico",
    image: "",
    imageBackup: "",
    location: "Barcelona",
    genre: "Electronic",
  };
  describe("When invoked with the username 'Nico', location 'Barcelona', and genre 'Electronic'", () => {
    test("Then it should render a card with the information received and an avatar", () => {
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

  describe("When invoked and the user click on the 'See collection' button", () => {
    test("Then the useNavigate function should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserCollection user={user} />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: "See collection" });

      userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
