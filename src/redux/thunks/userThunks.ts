import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import { DecodeToken, ResponseApiLogin, UserLogin } from "../../types/types";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const loginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    try {
      toast.loading("Loading...");
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
        toast.dismiss();
        toast.success("Successfully loggedIn");
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error("Wrong username or password");
      return error.message;
    }
  };

export const registerThunk =
  (userData: any, password: string) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    try {
      toast.loading("Loading...");
      const { data } = await axios.post(
        `${url}user/register` as string,
        userData
      );

      toast.dismiss();
      toast.success("You have succesfully registered!");

      if (data) {
        const newUser = {
          username: data.new_user.username,
          password: password,
        };
        dispatch(loginThunk(newUser));
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error("Something went wrong");
      return error.message;
    }
  };
