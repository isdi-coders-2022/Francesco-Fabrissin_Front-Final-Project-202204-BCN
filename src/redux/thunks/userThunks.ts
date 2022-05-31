import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

interface UserLogin {
  username: string;
  password: string;
}

interface ResponseApi {
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
      }: ResponseApi = await axios.post(`${url}user/login` as string, userData);

      if (token) {
        const { username, image }: DecodeToken = jwtDecode(token);
        dispatch(loginActionCreator({ username, image }));
        debugger;
        localStorage.setItem("token", token);
      }
    } catch (error: any) {
      return error.message;
    }
  };
