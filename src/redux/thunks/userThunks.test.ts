import { mockUserLogin } from "../../mocks/mockUser";
import { loginActionCreator } from "../features/userSlice";
import { loginThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({ username: "fra432", image: "image" }));

describe("Given a loginThunk function", () => {
  describe("When it's called", () => {
    test("It should dispatch the loginActionCreator with the data from the token", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "fra432",
        password: "fra432",
      };

      const loginAction = loginActionCreator(mockUserLogin);

      const thunk = loginThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loginAction);
    });
  });
});
