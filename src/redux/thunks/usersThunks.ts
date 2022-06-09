import axios from "axios";
import { IUserCollection } from "../../types/types";
import {
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../features/uiSlice";

import { loadCollectionsActionCreator } from "../features/usersSlice";
import { AppDispatch } from "../store/store";

export const loadCollectionsThunk = () => async (dispatch: AppDispatch) => {
  const url = process.env.REACT_APP_API_URL;
  dispatch(setLoadingOnActionCreator());
  const {
    data: { usersCollection },
  } = await axios.get(`${url}users`, {
    headers: { Authorization: `Bearer ${localStorage.token}` },
  });
  dispatch(setLoadingOffActionCreator());
  const dataCollections = usersCollection.map((user: IUserCollection) => ({
    ...user,
    image: user.image ? `${url}${user.image}` : "",
  }));

  dispatch(loadCollectionsActionCreator(dataCollections));
};
