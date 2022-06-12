import axios from "axios";
import { mockToast } from "../../mocks/mockHooks";
import { setLoadingOffActionCreator } from "../features/uiSlice";
import { loginThunk, registerThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({
  username: "fra432",
  image: "image",
  imageBackup: "image",
  id: "1",
}));

jest.mock("react-hot-toast", () => ({
  error: mockToast,
}));

describe("Given a loginThunk function", () => {
  describe("When it's called", () => {
    test("It should call the dispatch function", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "fra432",
        password: "fra432",
      };

      const thunk = loginThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called and the there's no username match", () => {
    test("Then it should call the toast's error method", async () => {
      const dispatch = jest.fn();

      axios.post = jest.fn().mockRejectedValue({});

      const userData = {
        username: "fra432",
        password: "fra432",
      };

      const thunk = loginThunk(userData);
      const setLoadingOff = setLoadingOffActionCreator();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(setLoadingOff);
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

      const userLoginData = {
        username: "fra432",
        password: "fra432",
      };

      axios.post = jest.fn().mockResolvedValue({
        data: {
          new_user: {
            username: "fra432",
          },
        },
      });

      const thunkRegister = registerThunk(userData, userData.password);
      const thunkLogin = loginThunk(userLoginData);

      await thunkRegister(dispatch);
      await thunkLogin(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called and the user already exists in the database", () => {
    test("It should dispatch the loginThunk with the new user data", async () => {
      const dispatch = jest.fn();

      axios.post = jest.fn().mockRejectedValue({});

      const userData = {
        username: "fra432",
        password: "fra432",
        email: "frafra@gmail.com",
        location: "Barcelona",
      };

      const thunk = registerThunk(userData, userData.password);
      const setLoadingOff = setLoadingOffActionCreator();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(setLoadingOff);
    });
  });
});
