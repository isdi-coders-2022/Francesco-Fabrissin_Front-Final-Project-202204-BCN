import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Record {
  title: String;
  artist: String;
  year: Number;
  genre: String;
  price: Number;
  conditions: String;
  youtube_url: String;
  image: String;
  owner: User;
}

interface User {
  username: String;
  email: String;
  image: String;
  location: String;
  records_collection: Record[];
  wantlist: Record[];
}

interface State {
  userInfo: User;
  logged: Boolean;
}

const initialState: State = {
  userInfo: {
    username: "",
    email: "",
    image: "",
    location: "",
    records_collection: [],
    wantlist: [],
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
