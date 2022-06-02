import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserCollection } from "../../types/types";

const initialState: IUserCollection[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadCollections: (users, action: PayloadAction<IUserCollection[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadCollections: loadCollectionsActionCreator } =
  usersSlice.actions;

export default usersSlice.reducer;
