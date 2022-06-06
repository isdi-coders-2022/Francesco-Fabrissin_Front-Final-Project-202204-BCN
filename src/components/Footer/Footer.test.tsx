import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reactTestRenderer from "react-test-renderer";
import store from "../../redux/store/store";
import Footer from "./Footer";

describe("Given a Footer component function", () => {
  describe("When invoked", () => {
    test("Then it should render correctly a footer with the app logo and a span with '© 2022 RecordSwapp®<'", () => {
      const footer = reactTestRenderer
        .create(
          <BrowserRouter>
            <Provider store={store}>
              <Footer />
            </Provider>
          </BrowserRouter>
        )
        .toJSON();

      expect(footer).toMatchSnapshot();
    });
  });
});
