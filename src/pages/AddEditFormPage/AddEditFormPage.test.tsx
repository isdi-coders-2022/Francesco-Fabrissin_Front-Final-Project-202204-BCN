import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AddEditFormPage from "./AddEditFormPage";

describe("Given an AddEditFormPage component", () => {
  describe("When invoked with no edit params", () => {
    test("Then it should render an image and an addRecord form with 7 input fields", () => {
      const expectedNumberOfInputs = 7;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditFormPage />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const addButton = screen.getByRole("button", { name: "Add record" });

      expect(inputs).toHaveLength(expectedNumberOfInputs);
      expect(addButton).toBeInTheDocument();
    });
  });
});
