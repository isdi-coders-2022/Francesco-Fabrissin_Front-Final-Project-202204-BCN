import { mockUsers } from "../../mocks/mockUser";
import { loadCollectionsActionCreator } from "../features/usersSlice";
import { loadCollectionsThunk } from "./usersThunks";

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
      const token = "right token";

      const loadCollectionsAction =
        loadCollectionsActionCreator(usersCollectionsData);

      const thunk = loadCollectionsThunk(token);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadCollectionsAction);
    });
  });
});
