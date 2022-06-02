import { mockUsers } from "../../mocks/mockUser";
import { loadCollectionsActionCreator } from "../features/usersSlice";
import { loadCollectionsThunk } from "./usersThunks";

describe("Given a loadCollectionsThunk function", () => {
  describe("When it's called", () => {
    test("It should dispatch the loadCollectionsActionCreator with the data from the api", async () => {
      const dispatch = jest.fn();
      const usersCollectionsData = mockUsers;
      const token = "right token";

      const loadCollectionsAction =
        loadCollectionsActionCreator(usersCollectionsData);

      const thunk = loadCollectionsThunk(token);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadCollectionsAction);
    });
  });
});
