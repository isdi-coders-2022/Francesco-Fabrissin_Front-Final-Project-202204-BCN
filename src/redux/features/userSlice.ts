import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, OtherUser } from "../../types/types";
export interface State {
  userInfo: IUser;
  logged: boolean;
  otherUserInfo: OtherUser;
}

const initialState: State = {
  userInfo: {
    username: "",
    image: "",
    imageBackup: "",
    id: "",
  },
  logged: false,
  otherUserInfo: {
    username: "",
    image: "",
    imageBackup: "",
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
        imageBackup: "",
        id: "",
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
