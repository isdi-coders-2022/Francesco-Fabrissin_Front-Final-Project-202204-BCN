import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationState } from "../../types/types";

const initialState: PaginationState = {
  pages: 0,
  currentPage: 1,
  pagination: 8,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPages: (users, action: PayloadAction<number>) => ({
      ...users,
      pages: action.payload,
    }),
    setCurrentPage: (users) => ({
      ...users,
      currentPage: users.currentPage + 1,
    }),
    resetCurrentPage: (users) => ({
      ...users,
      currentPage: 1,
    }),
    setPagination: (users) => ({
      ...users,
      pagination: users.pagination + 8,
    }),
    resetPagination: (users) => ({
      ...users,
      pagination: 8,
    }),
  },
});

export const {
  setPages: setPagesActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
  setPagination: setPaginationActionCreator,
  resetCurrentPage: resetCurrentPageActionCreator,
  resetPagination: resetPaginationActionCreator,
} = paginationSlice.actions;

export default paginationSlice.reducer;
