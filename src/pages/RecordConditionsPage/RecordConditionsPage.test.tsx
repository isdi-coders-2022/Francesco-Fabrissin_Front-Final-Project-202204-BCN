import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reactTestRenderer from "react-test-renderer";
import { mockNavigate } from "../../mocks/mockHooks";
import store from "../../redux/store/store";
import RecordConditionsPage from "./RecordConditionsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a RecordConditionsPage component function", () => {
  describe("When invoked and the users click on the close icon", () => {
    test("Then the useNavigate hooks should be called", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RecordConditionsPage />
          </Provider>
        </BrowserRouter>
      );

      const goBackIcon = screen.getByTestId("icon-back");

      userEvent.click(goBackIcon);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When invoked", () => {
    test("Then it should render correctly the RecordConditionsPage", () => {
      const recordConditionsPage = reactTestRenderer
        .create(
          <BrowserRouter>
            <Provider store={store}>
              <RecordConditionsPage />
            </Provider>
          </BrowserRouter>
        )
        .toJSON();

      expect(recordConditionsPage).toMatchSnapshot();
    });
  });
});
