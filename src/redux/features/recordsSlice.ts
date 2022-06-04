import { createSlice } from "@reduxjs/toolkit";
import { IRecord } from "../../types/types";

const initialState: IRecord[] = [];

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    loadRecords: (records, action) => [...action.payload],
  },
});

export const { loadRecords: loadRecordsActionCreator } = recordsSlice.actions;

export default recordsSlice.reducer;
