import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecord } from "../../types/types";

const initialState: IRecord = {
  id: "",
  title: "",
  artist: "",
  year: "",
  genre: "",
  conditions: "",
  image: "",
  price: "",
  owner: "",
  youtube_url: "",
};

const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    loadRecord: (record, action: PayloadAction<IRecord>) => ({
      ...action.payload,
    }),
  },
});

export const { loadRecord: loadRecordActionCreator } = recordSlice.actions;

export default recordSlice.reducer;
