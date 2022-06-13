import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockNavigate } from "../../mocks/mockHooks";
import store from "../../redux/store/store";
import PageNotFound from "./PageNotFound";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a PageNotFound component function", () => {
  describe("When invoked", () => {
    test("Then it should render a 2 span elements with the text 'Sorry,' and 'page not found'", () => {
      const expectedText = ["Sorry,", "page not found"];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PageNotFound />
          </Provider>
        </BrowserRouter>
      );

      const text1 = screen.getByText(expectedText[0]);
      const text2 = screen.getByText(expectedText[1]);

      expect(text1).toBeInTheDocument();
      expect(text2).toBeInTheDocument();
    });
  });

  describe("When invoked and the user clicks on the home icon", () => {
    test("Then the useNavigate hook should be called", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <PageNotFound />
          </Provider>
        </BrowserRouter>
      );

      const homeIcon = screen.getByTestId("icon-home");

      userEvent.click(homeIcon);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
