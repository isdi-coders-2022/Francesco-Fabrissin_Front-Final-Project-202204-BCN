import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";
export interface State {
  userInfo: IUser;
  logged: boolean;
  otherUserInfo: IUser;
}

const initialState: State = {
  userInfo: {
    username: "",
    image: "",
  },
  logged: false,
  otherUserInfo: {
    username: "",
    image: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action: PayloadAction<IUser>) => ({
      ...user,
      userInfo: { ...action.payload },
      logged: true,
    }),
    logout: (user) => ({
      ...user,
      userInfo: {
        username: "",
        image: "",
      },
      logged: false,
    }),
    getOtherUserInfo: (user, action: PayloadAction<IUser>) => ({
      ...user,
      otherUserInfo: { ...action.payload },
    }),
  },
});

export const {
  login: loginActionCreator,
  logout: logoutActionCreator,
  getOtherUserInfo: getOtherUserInfoActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
