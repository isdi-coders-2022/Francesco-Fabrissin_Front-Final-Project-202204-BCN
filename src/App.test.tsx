import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";

export const mockUsers = [
  {
    id: "1",
    username: "fra432",
    image: "",
    imageBackup: "",
    location: "Barcelona",
    genre: "Electronic",
  },
  {
    id: "2",
    username: "nico",
    image: "",
    imageBackup: "",
    location: "Barcelona",
    genre: "Electronic",
  },
];

jest.mock("jwt-decode", () => () => ({
  username: "fra432",
  image: "image",
  imageBackup: "image",
  id: "1",
}));

describe("Given an App component function", () => {
  describe("When invoked and the user is not logged", () => {
    test("Then it should render a login form with a 'LOGIN' button", async () => {
      const expectedButtonText = "LOGIN";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const loginButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When invoked and the user is logged", () => {
    test("Then it should render a navigation element", async () => {
      const actionLogin = {
        type: "user/login",
        payload: {
          username: "fra432",
          image:
            "images/165469482813236653902_310665612808925_5168321888887242752_n.jpg",
          imageBackup:
            "https://firebasestorage.googleapis.com/v0/b/recordswapp-e0444.appspot.com/o/165469482813236653902_310665612808925_5168321888887242752_n.jpg?alt=media&token=e3652399-b6c2-491b-bffe-d4dffbd17631",
          id: "62a0a3ad54725136008cb9d8",
        },
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        store.dispatch(actionLogin);
      });

      const token = "token";

      window.localStorage.setItem("token", token);

      const navElement = screen.getByRole("navigation");

      expect(navElement).toBeInTheDocument();
    });
  });
});
