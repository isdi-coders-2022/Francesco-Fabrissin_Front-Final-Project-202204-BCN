import axios from "axios";
import { loadRecordActionCreator } from "../features/recordSlice";
import {
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../features/uiSlice";
import { AppDispatch } from "../store/store";

export const loadRecordThunk =
  (recordId: string) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;
    try {
      setLoadingOnActionCreator();
      const {
        data: { recordInfo },
      } = await axios.get(`${url}records/${recordId}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      await dispatch(loadRecordActionCreator(recordInfo));
      setLoadingOffActionCreator();
    } catch (error: any) {
      setLoadingOffActionCreator();
      return error.message;
    }
  };
