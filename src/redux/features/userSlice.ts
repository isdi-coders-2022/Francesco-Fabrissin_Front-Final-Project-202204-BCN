import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";
export interface State {
  userInfo: User;
  logged: boolean;
}

const initialState: State = {
  userInfo: {
    username: "",
    image: "",
  },
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action: PayloadAction<User>) => ({
      userInfo: { ...action.payload },
      logged: true,
    }),
    logout: (user) => ({
      userInfo: {
        username: "",
        image: "",
      },
      logged: false,
    }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
