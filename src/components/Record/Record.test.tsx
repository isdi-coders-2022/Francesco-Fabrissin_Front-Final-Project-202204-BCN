import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockRecords } from "../../mocks/mockRecords";
import store from "../../redux/store/store";
import Record from "./Record";

describe("Given a Record component function", () => {
  describe("When invoked with a record", () => {
    test("Then it should render an image a title and an artist", () => {
      const record = mockRecords[0];
      const expectedTitle = "Neptune's Lair";
      const expectedArtist = "Drexciya";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Record record={record} />
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
});
