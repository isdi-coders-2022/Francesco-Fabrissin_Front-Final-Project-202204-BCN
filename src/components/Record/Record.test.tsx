import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockAppDispatch, mockNavigate } from "../../mocks/mockHooks";
import { mockRecords } from "../../mocks/mockRecords";
import store from "../../redux/store/store";
import Record from "./Record";

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockAppDispatch,
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Record component function", () => {
  const record = mockRecords[0];
  describe("When invoked with a record", () => {
    test("Then it should render an image a title and an artist", () => {
      const expectedTitle = "Neptune's Lair";
      const expectedArtist = "Drexciya";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Record ownCollection={false} record={record} />
          </Provider>
        </BrowserRouter>
      );

      const recordCover = screen.getByRole("img");
      const title = screen.getByText(expectedTitle);
      const artist = screen.getByText(expectedArtist);

      expect(recordCover).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(artist).toBeInTheDocument();
    });
  });

  describe("Whrn invoked with a record , with the ownCollection prop set to true and the user click on the delete icon", () => {
    test("Then the useAppDispatch action should be invoked", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Record ownCollection={true} record={record} />
          </Provider>
        </BrowserRouter>
      );

      const deleteIcon = screen.getByTestId("icon-delete");

      userEvent.click(deleteIcon);

      expect(mockAppDispatch).toHaveBeenCalled();
    });
  });

  describe("Whrn invoked with a record , with the ownCollection prop set to true and the user click on the edit icon", () => {
    test("Then the useNavigate hook should be invoked", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Record ownCollection={true} record={record} />
          </Provider>
        </BrowserRouter>
      );

      const editIcon = screen.getByTestId("icon-edit");

      userEvent.click(editIcon);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When invoked with a record , and the user click on it", () => {
    test("Then the dispatch should be invoked", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Record ownCollection={true} record={record} />
          </Provider>
        </BrowserRouter>
      );

      const recordComponent = screen.getByRole("listitem");

      userEvent.click(recordComponent);

      expect(mockAppDispatch).toHaveBeenCalled();
    });
  });
});
