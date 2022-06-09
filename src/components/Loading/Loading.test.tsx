import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When invoked", () => {
    test("Then it should render a spinner and a hidden Loading text", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Loading />
          </Provider>
        </BrowserRouter>
      );

      const loading = screen.getByText("Loading");

      expect(loading).toBeInTheDocument();
    });
  });
});
