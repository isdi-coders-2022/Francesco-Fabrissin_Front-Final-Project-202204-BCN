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
      {records.length === 0 ? (
        <div className="not-found">
          <h3 className="page-info">
            No records in {otherUserInfo.username} collection yet
          </h3>
          <img
            className="record-player-logo"
            src="/images/record-player.png"
            alt="record player logo"
          />
        </div>
      ) : (
        <RecordsList ownCollection={false} records={records} />
      )}
    </UsersCollectionsPageStyled>
  );
};

export default UserCollectionPage;
