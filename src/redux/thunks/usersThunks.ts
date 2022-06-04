import axios from "axios";
import { IUserCollection } from "../../types/types";
import { loadCollectionsActionCreator } from "../features/usersSlice";
import { AppDispatch } from "../store/store";

export const loadCollectionsThunk =
  (token: string) => async (dispatch: AppDispatch) => {
    const url = process.env.REACT_APP_API_URL;

    const {
      data: { usersCollection },
    } = await axios.get(`${url}users`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const dataCollections = usersCollection.map((user: IUserCollection) => ({
      ...user,
      image: `${url}${user.image}`,
    }));

    dispatch(loadCollectionsActionCreator(dataCollections));
  };