import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockUserLogin, mockUsers } from "../../mocks/mockUser";
import store from "../../redux/store/store";
import UsersCollectionsPage from "./UsersCollectionsPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ my_collection: true }),
  useNavigate: () => mockNavigate,
}));

describe("Give a UsersCollectionPage component", () => {
  const actionUser = {
    type: "user/login",
    payload: mockUserLogin,
  };

  store.dispatch(actionUser);

  describe("When invoked and the store provides users collections filtered by 'All'", () => {
    test("Then it should render a heading with the text 'Users collections', and a list of 2 users collections", async () => {
      const actionLoadUsers = {
        type: "users/loadCollections",
        payload: mockUsers,
      };
      const actionLoadingOff = {
        type: "ui/setLoadingOff",
      };
      const expectedHeading = "Users Collections";
      const expectedNumberOfUsers = 2;

      store.dispatch(actionLoadUsers);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UsersCollectionsPage />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        store.dispatch(actionLoadingOff);
      });

      const heading = screen.getByRole("heading", { name: expectedHeading });
      const users = screen.getAllByRole("listitem");

      expect(heading).toBeInTheDocument();
      expect(users).toHaveLength(expectedNumberOfUsers);
    });
  });
  describe("When invoked with a filter state 'Classical' and the store provides and empty array of users", () => {
    test("Then it should render a span with the text 'Sorry, no collections found'", async () => {
      const expectedText = "Sorry, no collections found";

      const actionFilter = {
        type: "users/setFilter",
        payload: "Classical",
      };
      const actionLoadUsers = {
        type: "users/loadCollections",
        payload: [],
      };

      const actionLoadingOff = {
        type: "ui/setLoadingOff",
      };

      store.dispatch(actionFilter);
      store.dispatch(actionLoadUsers);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UsersCollectionsPage />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        store.dispatch(actionLoadingOff);
      });

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When invoked with a filter state 'Electronic' and the store provides array of 2 users", () => {
    test("Then it should render a span with the text 'Sorry, no collections found'", async () => {
      const expectedText = "Users Electronic Collections";

      const actionFilter = {
        type: "users/setFilter",
        payload: "Electronic",
      };

      const actionPages = {
        type: "pagination/setPages",
        payload: 3,
      };

      const actionLoadUsers = {
        type: "users/loadCollections",
        payload: mockUsers,
      };

      const actionLoadingOff = {
        type: "ui/setLoadingOff",
      };

      store.dispatch(actionPages);
      store.dispatch(actionFilter);
      store.dispatch(actionLoadUsers);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UsersCollectionsPage />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        store.dispatch(actionLoadingOff);
      });

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
