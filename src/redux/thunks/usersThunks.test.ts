import axios from "axios";
import { mockToast } from "../../mocks/mockHooks";
import { mockUsers } from "../../mocks/mockUser";
import { loadCollectionsActionCreator } from "../features/usersSlice";
import { loadCollectionsThunk } from "./usersThunks";

jest.mock("react-hot-toast", () => ({
  error: mockToast,
}));

describe("Given a loadCollectionsThunk function", () => {
  describe("When it's called with an authorized token", () => {
    test("It should dispatch the loadCollectionsActionCreator with the data from the api", async () => {
      const dispatch = jest.fn();
      const usersCollectionsData = mockUsers.map((user) => ({
        ...user,
        image: user.image
          ? `${process.env.REACT_APP_API_URL}${user.image}`
          : "",
      }));

      const loadCollectionsAction =
        loadCollectionsActionCreator(usersCollectionsData);

      const thunk = loadCollectionsThunk("All", 5);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadCollectionsAction);
    });
  });

  describe("When it's called with an authorized token and the api responds with an error", () => {
    test("Then it should call the toast's reeor method", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockRejectedValue({});

      const thunk = loadCollectionsThunk("All", 5);

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});
