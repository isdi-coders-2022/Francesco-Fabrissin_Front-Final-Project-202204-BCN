import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockToast } from "../../mocks/mockHooks";
import store from "../../redux/store/store";
import AddEditRecordForm from "./AddEditRecordForm";

const mockDispatch = jest.fn();
const mockUseNavigate = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-hot-toast", () => ({
  error: mockToast,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a AddEditRecordForm component function", () => {
  describe("When invoked", () => {
    test("Then it should render 3 input fields, 2 number inputs fields, 2 select fields and 1 button", () => {
      const expectedNumberOfInputs = 3;
      const expectedNumberOfNumberInputs = 2;
      const expectedNumberOfSelects = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditRecordForm />
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
      const numberInputs = screen.getAllByRole("spinbutton");
      const genre = screen.getByLabelText("Genre");
      const conditions = screen.getByLabelText("Record Conditions");
      const button = screen.getByRole("button", { name: "Add record" });

      inputs.forEach((input) => {
        userEvent.type(input, "hola");
      });

      numberInputs.forEach((input) => {
        userEvent.type(input, "1");
      });

      userEvent.selectOptions(genre, "Rock");
      userEvent.selectOptions(conditions, "VG");
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked and the user click on the info icon", () => {
    test("Then the useNavigate hook should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditRecordForm />
          </Provider>
        </BrowserRouter>
      );

      const infoIcon = screen.getByTestId("icon-info");

      userEvent.click(infoIcon);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });

  describe("When invoked passing a recordId in the props and the user clics on the 'Edit' button withput filling the required fills", () => {
    test("Then the dispatch and the toast's error methos should be invoked", async () => {
      const recordId = "62a0a706efdbe05210132d43";

      const actionLoadRecord = {
        type: "record/loadRecord",
        payload: {
          title: "Neptune's Lair",
          artist: "Drexciya",
          year: "1999",
          genre: "Electronic",
          price: "25",
          conditions: "VG",
          youtube_url: "https://www.youtube.com/watch?v=btOstAZFJTI",
          image: "images/1654759451150Drexciya-Neptune's Lair.jpeg",
          imageBackup:
            "https://firebasestorage.googleapis.com/v0/b/recordswapp-e0444.appspot.com/o/1654759451150Drexciya-Neptune's%20Lair.jpeg?alt=media&token=12330f23-f1d7-49b5-bc20-69601273b185",
          owner: "62a0a3ad54725136008cb9d8",
          id: "62a0a706efdbe05210132d43",
        },
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddEditRecordForm recordId={recordId} />
          </Provider>
        </BrowserRouter>
      );

      await waitFor(() => {
        store.dispatch(actionLoadRecord);
      });

      const button = screen.getByRole("button", { name: "Edit" });

      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
      expect(mockToast).toHaveBeenCalled();
    });
  });
});
