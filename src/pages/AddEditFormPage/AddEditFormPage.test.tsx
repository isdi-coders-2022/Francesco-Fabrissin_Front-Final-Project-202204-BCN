import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AddEditFormPage from "./AddEditFormPage";

describe("Given an AddEditFormPage component", () => {
  describe("When invoked with no edit params", () => {
    test("Then it should render an image and an addRecord form with 5 input fields and 2 select fields", () => {
      const expectedNumberOfInputs = 3;
      const expectedNumberOfNumberInputs = 2;
      const expectedNumberOfSelects = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditFormPage />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const numberInputs = screen.getAllByRole("spinbutton");
      const selects = screen.getAllByRole("combobox");
      const button = screen.getByRole("button");

      expect(inputs).toHaveLength(expectedNumberOfInputs);
      expect(numberInputs).toHaveLength(expectedNumberOfNumberInputs);
      expect(selects).toHaveLength(expectedNumberOfSelects);
      expect(button).toBeInTheDocument();
    });
  });
});
