import axios from "axios";
import { loadRecordActionCreator } from "../features/recordSlice";
import { AppDispatch } from "../store/store";

export const loadRecordThunk =
  (recordId: string) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    try {
      const {
        data: { recordInfo },
      } = await axios.get(`${url}records/${recordId}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      const dataRecords = {
        ...recordInfo,
        image: recordInfo.image ? `${url}${recordInfo.image}` : "",
      };

      dispatch(loadRecordActionCreator(dataRecords));
    } catch (error: any) {
      return error.message;
    }
  };
