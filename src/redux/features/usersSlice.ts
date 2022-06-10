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
    filterCollections: (users, action: PayloadAction<string>) =>
      users.filter((users) => users.genre === action.payload),
  },
});

export const {
  loadCollections: loadCollectionsActionCreator,
  filterCollections: filterCollectionsActionCreator,
} = usersSlice.actions;

export default usersSlice.reducer;
