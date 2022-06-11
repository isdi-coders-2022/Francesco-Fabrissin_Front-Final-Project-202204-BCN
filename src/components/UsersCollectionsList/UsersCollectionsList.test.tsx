import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockUsers } from "../../mocks/mockUser";
import store from "../../redux/store/store";
import UsersCollectionsList from "./UsersCollectionsList";

describe("Given a UsersCollectionsList component function", () => {
  describe("When invoked with an array of 2 users", () => {
    test("Then it should render 2 li elements", () => {
      const expectedNumberOfUsers = 2;

      const collections = mockUsers;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UsersCollectionsList collections={collections} />
          </Provider>
        </BrowserRouter>
      );

      const usersList = screen.getAllByRole("listitem");

      expect(usersList).toHaveLength(expectedNumberOfUsers);
    });
  });
});
