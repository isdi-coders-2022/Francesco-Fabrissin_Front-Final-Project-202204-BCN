import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Navigation from "./Navigation";
import React from "react";

const mockDispatch = jest.fn();
const mockSetState = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initial: any) => [initial, mockSetState],
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "/users/collections" }),
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

  describe("When invoked and the user clicks on the 'My Collection' link", () => {
    test("Then it should invoke the closeNav function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const myCollectionLink = screen.getByRole("link", {
        name: "My Collection",
      });

      userEvent.click(myCollectionLink);

      expect(mockSetState).toHaveBeenCalled();
    });
  });

  describe("When invoked and the user clicks Nav toggle button", () => {
    test("Then it should invoke the closeNav function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const navToggle = screen.getByRole("button", {
        name: "Toggle navigation",
      });

      userEvent.click(navToggle);

      expect(mockSetState).toHaveBeenCalled();
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

  describe("When invoked and the user select the option 'rock' from the selector and click on the search icon", () => {
    test("Then it should call the dispatch function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const filter = screen.getByLabelText("Filter");
      const iconSearch = screen.getByTestId("icon-search");

      userEvent.selectOptions(filter, "Rock");
      userEvent.click(iconSearch);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked and the user click on the 'Users Collection link'", () => {
    test("Then the dispatch should be called 3 times", () => {
      const expectedNumberOfDispatchCalls = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const usersCollectionsLink = screen.getByRole("link", {
        name: "Users Collection",
      });

      userEvent.click(usersCollectionsLink);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfDispatchCalls);
    });
  });
});
