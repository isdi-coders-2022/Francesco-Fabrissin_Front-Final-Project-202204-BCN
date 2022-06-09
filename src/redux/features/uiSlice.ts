import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UI } from "../../types/types";

const initialState: UI = {
  loading: false,
  modal: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoadingOn: (ui) => ({
      ...ui,
      loading: true,
    }),
    setLoadingOff: (ui) => ({
      ...ui,
      loading: false,
    }),
    openModal: (ui, action: PayloadAction<string>) => ({
      ...ui,
      modal: action.payload,
    }),
    closeModal: (ui) => ({
      ...ui,
      modal: "",
    }),
  },
});

export const {
  setLoadingOn: setLoadingOnActionCreator,
  setLoadingOff: setLoadingOffActionCreator,
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;

export default uiSlice.reducer;
