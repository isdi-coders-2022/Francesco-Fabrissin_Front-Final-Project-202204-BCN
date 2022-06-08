import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecordsList from "../../components/RecordsList/RecordsList";
import User from "../../components/User/User";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadUserCollectionThunk } from "../../redux/thunks/recordsThunks";
import UsersCollectionsPageStyled from "../UsersCollectionsPage/UsersCollectionsPageStyled";

const UserCollectionPage = () => {
  const { userId } = useParams();
  const { otherUserInfo } = useAppSelector((state) => state.user);
  const records = useAppSelector((state) => state.records);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(loadUserCollectionThunk(userId as string));
  }, [dispatch, token, userId]);

  return (
    <UsersCollectionsPageStyled>
      <User userInfo={otherUserInfo} />
      <RecordsList ownCollection={false} records={records} />
    </UsersCollectionsPageStyled>
  );
};

export default UserCollectionPage;
