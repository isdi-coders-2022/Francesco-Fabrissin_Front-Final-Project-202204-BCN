import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AddEditRecordForm from "./AddEditRecordForm";

describe("Given a AddEditRecordForm component function", () => {
  describe("When invoked", () => {
    test("Then it should render 6 input fields and 1 button", () => {
      const expectedNumberOfInputs = 6;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditRecordForm />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const button = screen.getByRole("button");

      expect(inputs).toHaveLength(expectedNumberOfInputs);
      expect(button).toBeInTheDocument();
    });
  });

  describe("When invoked and the user doesn't fill all the required fields", () => {
    test("Then the 'Add record' button should be disabled", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditRecordForm />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });

  describe("When invoked and the user fills all the required fields", () => {
    test("Then the 'Add record' button should not be disabled", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditRecordForm />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const button = screen.getByRole("button");

      inputs.forEach((input) => {
        userEvent.type(input, "hola");
      });

      expect(button).not.toBeDisabled();
    });
  });
});
