import axios from "axios";
import { IRecord } from "../../types/types";
import { loadRecordsActionCreator } from "../features/recordsSlice";
import { AppDispatch } from "../store/store";

export const loadMyRecordsThunk =
  (token: string) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    try {
      const {
        data: { records },
      } = await axios.get(`${url}myCollection`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const dataRecords = records.map((record: IRecord) => ({
        ...record,
        image: `${url}${record.image}`,
      }));

      dispatch(loadRecordsActionCreator(dataRecords));
    } catch (error: any) {
      return error.message;
    }
  };
