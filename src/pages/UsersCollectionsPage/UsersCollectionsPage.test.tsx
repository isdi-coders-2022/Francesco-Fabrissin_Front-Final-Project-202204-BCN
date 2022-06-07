import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockRecords } from "../../mocks/mockRecords";
import { mockUserLogin } from "../../mocks/mockUser";
import store from "../../redux/store/store";
import UsersCollectionsPage from "./UsersCollectionsPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ myCollection: true }),
  useNavigate: () => mockNavigate,
}));

describe("Give a UsersCollectionPage component", () => {
  const actionUser = {
    type: "user/login",
    payload: mockUserLogin,
  };

  const actionRecords = {
    type: "records/loadRecords",
    payload: mockRecords,
  };

  store.dispatch(actionUser);
  store.dispatch(actionRecords);
  describe("When invoked with 'myCollection' in the params", () => {
    test("Then it should render a heading with the text 'Users collections', an 'Add record' button and the records in the user collection", () => {
      const expectedHeading = "My Collection";
      const expectedNumberOfRecords = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UsersCollectionsPage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });
      const button = screen.getByRole("button", { name: "Add record" });
      const records = screen.getAllByRole("listitem");

      expect(heading).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(records).toHaveLength(expectedNumberOfRecords);
    });
  });
  describe("When invoked with 'myCollection' in the params and the user clicks on the 'Add record' button", () => {
    test("Then the useNavigate function should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UsersCollectionsPage />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: "Add record" });

      userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
