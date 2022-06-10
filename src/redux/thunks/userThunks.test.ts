import { mockUserLogin } from "../../mocks/mockUser";
import { loginActionCreator } from "../features/userSlice";
import { loginThunk, registerThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  username: "fra432",
  image: "image",
  imageBackup: "image",
  id: "1",
}));

describe("Given a loginThunk function", () => {
  describe("When it's called", () => {
    test("It should dispatch 3 actions", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "fra432",
        password: "fra432",
      };

      const numberOfActionDispatched = 3;

      const thunk = loginThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(numberOfActionDispatched);
    });
  });
});

describe("Given a registerThunk function", () => {
  describe("When it's called", () => {
    test("It should dispatch the loginThunk with the new user data", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "fra432",
        password: "fra432",
        email: "frafra@gmail.com",
        location: "Barcelona",
      };

      const thunk = registerThunk(userData, userData.password);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
