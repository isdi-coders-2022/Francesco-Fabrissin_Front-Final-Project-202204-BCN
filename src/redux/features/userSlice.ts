import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";
interface State {
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
  },
});

export const { login: loginActionCreator } = userSlice.actions;

export default userSlice.reducer;
