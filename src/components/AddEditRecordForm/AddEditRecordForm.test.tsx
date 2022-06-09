import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AddEditRecordForm from "./AddEditRecordForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest
    .fn()
    .mockResolvedValueOnce(null)
    .mockResolvedValueOnce(null)
    .mockReturnValueOnce({ recordId: "3" }),
}));

describe("Given a AddEditRecordForm component function", () => {
  describe("When invoked", () => {
    test("Then it should render 7 input fields, 2 select fields and 1 button", () => {
      const expectedNumberOfInputs = 5;
      const expectedNumberOfSelects = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditRecordForm />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const selects = screen.getAllByRole("combobox");
      const button = screen.getByRole("button");

      expect(inputs).toHaveLength(expectedNumberOfInputs);
      expect(selects).toHaveLength(expectedNumberOfSelects);
      expect(button).toBeInTheDocument();
    });
  });

  describe("When invoked and the user fills all the required fields and clicks on the 'Add record' button", () => {
    test("Then the dispatch and the setFormData should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditRecordForm />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const genre = screen.getByLabelText("Genre");
      const conditions = screen.getByLabelText("Record Conditions");
      const button = screen.getByRole("button", { name: "Add record" });

      inputs.forEach((input) => {
        userEvent.type(input, "hola");
      });

      userEvent.selectOptions(genre, "Rock");
      userEvent.selectOptions(conditions, "VG");
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
