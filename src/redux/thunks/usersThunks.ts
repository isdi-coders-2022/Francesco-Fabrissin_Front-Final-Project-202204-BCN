import axios from "axios";
import toast from "react-hot-toast";
import { IUserCollection } from "../../types/types";
import { setPagesActionCreator } from "../features/paginationSlice";
import {
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../features/uiSlice";

import { loadCollectionsActionCreator } from "../features/usersSlice";
import { AppDispatch } from "../store/store";

export const loadCollectionsThunk =
  (filter: string, limit: number) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    try {
      dispatch(setLoadingOnActionCreator());

      const {
        data: { usersCollection, pages },
      } = await axios.get(
        `${url}users/?filter=${filter === "All" ? "" : filter}&limit=${limit}`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );

      dispatch(setLoadingOffActionCreator());

      const dataCollections = usersCollection.map((user: IUserCollection) => ({
        ...user,
        image: user.image ? `${url}${user.image}` : "",
      }));

      dispatch(loadCollectionsActionCreator(dataCollections));
      dispatch(setPagesActionCreator(pages));
    } catch (error: any) {
      dispatch(setLoadingOffActionCreator());
      toast.error("Error while loading users collections");
      return error.message;
    }
  };
