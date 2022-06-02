//import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockUserLogin, mockUsers } from "../../mocks/mockUser";
import store from "../../redux/store/store";
import UsersCollectionsPage from "./UsersCollectionsPage";

beforeEach(() => {
  jest.mock("../../redux/hooks", () => ({
    ...jest.requireActual("../../redux/hooks"),
    useAppSelector: () => () => ({
      userInfo: mockUserLogin,
      logged: true,
    }),
  }));
});

beforeEach(() => {
  jest.mock("../../redux/hooks", () => ({
    ...jest.requireActual("../../redux/hooks"),
    useAppSelector: () => mockUsers,
  }));
});

describe("Give a UsersCollectionPage component", () => {
  describe("When invoked", () => {
    test("Then it should render a heading with the text 'Users collections'", () => {
      const expectedHeading = "Users collections";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UsersCollectionsPage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
