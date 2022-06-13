import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { localStorageMock } from "./mocks/mockStorage";
import store from "./redux/store/store";

const gettinUpLocalStorage = localStorageMock;

const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: gettinUpLocalStorage,
});

describe("Given an App component", () => {
  describe("When its invoked with a Login Page and with a real token already in the local storage", () => {
    test("Then it should render the App and dispatch a login action and the store schould contain the user info and all the inital states", () => {
      const expectedTokenData = {
        pagination: {
          currentPage: 1,
          pages: 0,
          pagination: 5,
        },
        record: {
          artist: "",
          conditions: "",
          genre: "",
          id: "",
          image: "",
          imageBackup: "",
          owner: "",
          price: "",
          title: "",
          year: "",
          youtube_url: "",
        },
        records: [],
        ui: {
          loading: true,
          modal: "",
        },
        user: {
          logged: true,
          otherUserInfo: {
            image: "",
            imageBackup: "",
            username: "",
          },
          userInfo: {
            id: "62a0a3ad54725136008cb9d8",
            image:
              "images/165469482813236653902_310665612808925_5168321888887242752_n.jpg",
            imageBackup:
              "https://firebasestorage.googleapis.com/v0/b/recordswapp-e0444.appspot.com/o/165469482813236653902_310665612808925_5168321888887242752_n.jpg?alt=media&token=e3652399-b6c2-491b-bffe-d4dffbd17631",
            username: "fra432",
          },
        },
        users: {
          collections: [],
          filter: "All",
        },
      };

      saveToStorage(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTBhM2FkNTQ3MjUxMzYwMDhjYjlkOCIsInVzZXJuYW1lIjoiZnJhNDMyIiwiaW1hZ2UiOiJpbWFnZXMvMTY1NDY5NDgyODEzMjM2NjUzOTAyXzMxMDY2NTYxMjgwODkyNV81MTY4MzIxODg4ODg3MjQyNzUyX24uanBnIiwiaW1hZ2VCYWNrdXAiOiJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3JlY29yZHN3YXBwLWUwNDQ0LmFwcHNwb3QuY29tL28vMTY1NDY5NDgyODEzMjM2NjUzOTAyXzMxMDY2NTYxMjgwODkyNV81MTY4MzIxODg4ODg3MjQyNzUyX24uanBnP2FsdD1tZWRpYSZ0b2tlbj1lMzY1MjM5OS1iNmMyLTQ5MWItYmZmZS1kNGRmZmJkMTc2MzEiLCJpYXQiOjE2NTUxNDAyODh9.FYsvEpQDJRHfSP8pmL7v9dcIzxeckTwYm5WSa3-WuC8"
      );

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const getStoreActionState = store.getState();

      expect(window.localStorage.getItem("token")).toBe(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTBhM2FkNTQ3MjUxMzYwMDhjYjlkOCIsInVzZXJuYW1lIjoiZnJhNDMyIiwiaW1hZ2UiOiJpbWFnZXMvMTY1NDY5NDgyODEzMjM2NjUzOTAyXzMxMDY2NTYxMjgwODkyNV81MTY4MzIxODg4ODg3MjQyNzUyX24uanBnIiwiaW1hZ2VCYWNrdXAiOiJodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3JlY29yZHN3YXBwLWUwNDQ0LmFwcHNwb3QuY29tL28vMTY1NDY5NDgyODEzMjM2NjUzOTAyXzMxMDY2NTYxMjgwODkyNV81MTY4MzIxODg4ODg3MjQyNzUyX24uanBnP2FsdD1tZWRpYSZ0b2tlbj1lMzY1MjM5OS1iNmMyLTQ5MWItYmZmZS1kNGRmZmJkMTc2MzEiLCJpYXQiOjE2NTUxNDAyODh9.FYsvEpQDJRHfSP8pmL7v9dcIzxeckTwYm5WSa3-WuC8"
      );

      expect(getStoreActionState).toStrictEqual(expectedTokenData);
    });
  });
});
