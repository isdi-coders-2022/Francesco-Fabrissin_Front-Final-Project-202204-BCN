import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecordsList from "../../components/RecordsList/RecordsList";
import User from "../../components/User/User";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadUserCollectionThunk } from "../../redux/thunks/recordsThunks";
import { loadCollectionsThunk } from "../../redux/thunks/usersThunks";
import UsersCollectionsPageStyled from "../UsersCollectionsPage/UsersCollectionsPageStyled";

const UserCollectionPage = () => {
  const { userId } = useParams();
  const users = useAppSelector((state) => state.users);
  const records = useAppSelector((state) => state.records);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(loadUserCollectionThunk(userId as string));
    dispatch(loadCollectionsThunk(token as string));
  }, [dispatch, token, userId]);

  const userInfo = users
    .filter((user) => user.id === userId)
    .map((user) => ({
      username: user.username,
      image: user.image,
    }));

  return (
    <UsersCollectionsPageStyled>
      <User userInfo={userInfo[0]} />
      <RecordsList ownCollection={false} records={records} />
    </UsersCollectionsPageStyled>
  );
};

export default UserCollectionPage;
