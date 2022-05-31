import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

interface UserLogin {
  username: string;
  password: string;
}

interface ResponseApiLogin {
  data: {
    token: string;
  };
}

interface DecodeToken {
  username: string;
  image: string;
}

export const loginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    const url: string | undefined = process.env.REACT_APP_API_URL;

    try {
      const {
        data: { token },
      }: ResponseApiLogin = await axios.post(
        `${url}user/login` as string,
        userData
      );

      if (token) {
        const { username, image }: DecodeToken = jwtDecode(token);
        dispatch(loginActionCreator({ username, image }));
        localStorage.setItem("token", token);
      }
    } catch (error: any) {
      return error.message;
    }
  };

export const registerThunk =
  (userData: any, password: string) => async (dispatch: AppDispatch) => {
    const url: string | undefined = process.env.REACT_APP_API_URL;

    try {
      const { data } = await axios.post(
        `${url}user/register` as string,
        userData
      );

      if (data) {
        const newUser = {
          username: data.newUser.username,
          password: password,
        };
        dispatch(loginThunk(newUser));
      }
    } catch (error: any) {
      return error.message;
    }
  };
