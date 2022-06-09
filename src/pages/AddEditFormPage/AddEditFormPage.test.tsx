import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AddEditFormPage from "./AddEditFormPage";

describe("Given an AddEditFormPage component", () => {
  describe("When invoked with no edit params", () => {
    test("Then it should render an image and an addRecord form with 5 input fields and 2 select fields", () => {
      const expectedNumberOfInputs = 5;
      const expectedNumberOfSelects = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditFormPage />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const selects = screen.getAllByRole("combobox");
      const addButton = screen.getByRole("button", { name: "Add record" });

      expect(inputs).toHaveLength(expectedNumberOfInputs);
      expect(selects).toHaveLength(expectedNumberOfSelects);
      expect(addButton).toBeInTheDocument();
    });
  });
});
