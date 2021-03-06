import axios from "axios";
import toast from "react-hot-toast";
import { IRecord } from "../../types/types";
import {
  addRecordActionCreator,
  deleteRecordActionCreator,
  editRecordActionCreator,
  loadRecordsActionCreator,
} from "../features/recordsSlice";
import {
  openModalActionCreator,
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../features/uiSlice";

import { getOtherUserInfoActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

const url = process.env.REACT_APP_API_URL;

export const loadMyRecordsThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoadingOnActionCreator());
    const {
      data: { records },
    } = await axios.get(`${url}myCollection`, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    dispatch(setLoadingOffActionCreator());

    const dataRecords = records.map((record: IRecord) => ({
      ...record,
      image: record.image ? `${url}${record.image}` : "",
    }));

    dispatch(loadRecordsActionCreator(dataRecords));
  } catch (error: any) {
    dispatch(setLoadingOffActionCreator());
    toast.error("Error while loading your records");
    return error.message;
  }
};

export const addRecordThunk =
  (recordData: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingOnActionCreator());
      const {
        data: { new_record },
      } = await axios.post(`${url}myCollection`, recordData, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      dispatch(setLoadingOffActionCreator());

      dispatch(addRecordActionCreator(new_record));
      dispatch(loadMyRecordsThunk());

      dispatch(
        openModalActionCreator("Record added succesfully to your collection")
      );
    } catch (error: any) {
      dispatch(setLoadingOffActionCreator());
      toast.error(
        "An error occurred while trying to add this record to your collection"
      );
      return error.message;
    }
  };

export const deleteRecordThunk =
  (recordId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingOnActionCreator());
      const { status } = await axios.delete(`${url}myCollection/${recordId}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      dispatch(setLoadingOffActionCreator());
      if (status === 200) {
        dispatch(deleteRecordActionCreator(recordId));

        dispatch(
          openModalActionCreator(
            "Record succesfully deleted from your collection"
          )
        );
      }
    } catch (error: any) {
      toast.error("Unable to delete the record");
      return error.message;
    }
  };

export const loadUserCollectionThunk =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingOnActionCreator());
      const {
        data: { userInfo, records },
      } = await axios.get(`${url}users/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      dispatch(setLoadingOffActionCreator());

      const dataRecords = records.map((record: IRecord) => ({
        ...record,
        image: record.image ? `${url}${record.image}` : "",
      }));

      dispatch(loadRecordsActionCreator(dataRecords));
      dispatch(getOtherUserInfoActionCreator(userInfo));
    } catch (error: any) {
      dispatch(setLoadingOffActionCreator());
      return error.message;
    }
  };

export const editRecordThunk =
  (recordId: string, recordData: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingOnActionCreator());
      const {
        data: { updatedRecord },
      } = await axios.put(`${url}myCollection/edit/${recordId}`, recordData, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      dispatch(setLoadingOffActionCreator());

      dispatch(editRecordActionCreator(updatedRecord));
      dispatch(loadMyRecordsThunk());
      dispatch(openModalActionCreator("Record edited succesfully!"));
    } catch (error: any) {
      toast.error("Unable to edit te record");
      return error.message;
    }
  };
