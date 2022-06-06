import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockRecords } from "../../mocks/mockRecords";
import store from "../../redux/store/store";
import RecordsList from "./RecordsList";

describe("Given a RecordsList component function", () => {
  describe("When invoked with 2 records", () => {
    test("Then it should render 2 list elements", () => {
      const expectedNumberOfRecords = 3;
      const records = mockRecords;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RecordsList ownCollection={false} records={records} />
          </Provider>
        </BrowserRouter>
      );

      const listElements = screen.getAllByRole("listitem");
      expect(listElements).toHaveLength(expectedNumberOfRecords);
    });
  });
});
