import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Pagination component function", () => {
  describe("When invoked", () => {
    test("Then it should render a button with the text 'Load More'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pagination />
          </Provider>
        </BrowserRouter>
      );

      const loadMore = screen.getByRole("button", { name: "Load More" });

      expect(loadMore).toBeInTheDocument();
    });
  });

  describe("When invoked and the user clicks on it", () => {
    test("Then the dispatch function should be called twice'", () => {
      const expectedNumberOfDispatchCalls = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pagination />
          </Provider>
        </BrowserRouter>
      );

      const loadMore = screen.getByRole("button", { name: "Load More" });

      userEvent.click(loadMore);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfDispatchCalls);
    });
  });
});
