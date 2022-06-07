import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockRecords } from "../../mocks/mockRecords";
import { mockUsers } from "../../mocks/mockUser";
import store from "../../redux/store/store";
import UserCollectionPage from "./UserCollectionPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ userId: "2" }),
}));

describe("Given a UserCollectionPage component", () => {
  describe("When invoked with the user Nico user id in the params", () => {
    test("Then it should render a heading with 'Nico Collection' and the list of record in his collection", () => {
      const expectedHeading = "nico Collection";
      const expectedNumberOfRecords = 3;

      const actionUsers = {
        type: "users/loadCollections",
        payload: mockUsers,
      };
      const actionRecords = {
        type: "records/loadRecords",
        payload: mockRecords,
      };

      store.dispatch(actionUsers);
      store.dispatch(actionRecords);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserCollectionPage />
          </Provider>
        </BrowserRouter>
      );

      const username = screen.getByRole("heading", { name: expectedHeading });
      const records = screen.getAllByRole("listitem");

      expect(username).toBeInTheDocument();
      expect(records).toHaveLength(expectedNumberOfRecords);
    });
  });
});
