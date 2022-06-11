import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserCollection, UsersState } from "../../types/types";

const initialState: UsersState = {
  collections: [],
  filter: "All",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadCollections: (users, action: PayloadAction<IUserCollection[]>) => ({
      ...users,
      collections: [...action.payload],
    }),
    setFilter: (users, action: PayloadAction<string>) => ({
      ...users,
      filter: action.payload,
    }),
  },
});

export const {
  loadCollections: loadCollectionsActionCreator,
  setFilter: setFilterActionCreator,
} = usersSlice.actions;

export default usersSlice.reducer;
