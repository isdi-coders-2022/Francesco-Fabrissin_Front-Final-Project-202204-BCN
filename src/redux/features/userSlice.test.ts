import { mockUserLogin } from "../../mocks/mockUser";
import userSlice, {
  loginActionCreator,
  logoutActionCreator,
} from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives an inital user status and a login action with the login user credentials", () => {
    test("Then it should return the new user state with the received user credential and the logged property set to true", () => {
      const initialStatus = {
        userInfo: {
          username: "",
          image: "",
        },
        logged: false,
      };

      const userInfo = mockUserLogin;

      const expectedStatus = {
        userInfo: mockUserLogin,
        logged: true,
      };

      const loginAction = loginActionCreator(userInfo);

      const userStatus = userSlice(initialStatus, loginAction);

      expect(userStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an inital user status with user inofs and a logout action", () => {
    test("Then it should return the new empty state logged property set to false", () => {
      const initialStatus = {
        userInfo: {
          username: "fra432",
          image: "image",
        },
        logged: true,
      };

      const expectedStatus = {
        userInfo: {
          username: "",
          image: "",
        },
        logged: false,
      };

      const logoutAction = logoutActionCreator();

      const userStatus = userSlice(initialStatus, logoutAction);

      expect(userStatus).toEqual(expectedStatus);
    });
  });
});
