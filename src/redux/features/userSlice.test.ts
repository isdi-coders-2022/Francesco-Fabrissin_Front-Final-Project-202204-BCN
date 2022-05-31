import { mockUserLogin } from "../../mocks/mockUser";
import userSlice, { loginActionCreator } from "./userSlice";

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
});
