import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RecordDetailsPage from "./RecordDetailsPage";

describe("Given a RecordDetailsPage component", () => {
  describe("When invoked with the record 'Nevermind' from Nirvana", () => {
    test("Then it should render an immage with the alt attribute 'Nevermine cover', 2 heading with title and artis and a 'Show intrest button'", () => {
      const expectedTitle = "Nevermind";
      const expectedArtist = "Nirvana";
      const expectedButtonText = "Show intrest";

      const loadRecordAction = {
        type: "record/loadRecord",
        payload: {
          title: "Nevermind",
          artist: "Nirvana",
          year: "1991",
          genre: "Rock",
          price: "30",
          conditions: "VG",
          youtube_url: "video",
          image: "image",
          imageBackup: "image",
          owner: "62a0a3ad54725136008cb9d8",
          id: "62a0a7efc41785994dfa740a",
        },
      };

      store.dispatch(loadRecordAction);

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RecordDetailsPage />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", { name: expectedTitle });
      const artist = screen.getByRole("heading", { name: expectedArtist });
      const image = screen.getByAltText(`${expectedTitle} cover`);
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(title).toBeInTheDocument();
      expect(artist).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
