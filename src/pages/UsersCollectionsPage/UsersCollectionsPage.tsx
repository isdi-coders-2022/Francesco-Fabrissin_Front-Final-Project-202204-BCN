import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import RecordsList from "../../components/RecordsList/RecordsList";
import User from "../../components/User/User";
import UsersCollectionsList from "../../components/UsersCollectionsList/UsersCollectionsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadMyRecordsThunk } from "../../redux/thunks/recordsThunks";
import { loadCollectionsThunk } from "../../redux/thunks/usersThunks";
import UsersCollectionsPageStyled from "./UsersCollectionsPageStyled";

const UsersCollectionsPage = () => {
  const { collections, filter } = useAppSelector((state) => state.users);
  const { my_collection } = useParams();
  const { userInfo } = useAppSelector((state) => state.user);
  const records = useAppSelector((state) => state.records);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateToAddForm = () => {
    navigate("/my_collection/addRecord");
  };

  useEffect(() => {
    dispatch(loadCollectionsThunk(filter, 8));
  }, [dispatch, filter]);

  useEffect(() => {
    dispatch(loadMyRecordsThunk());
  }, [dispatch, navigate]);

  return (
    <UsersCollectionsPageStyled>
      <User userInfo={userInfo} />
      <h3 className="page-info">
        {my_collection
          ? "My Collection"
          : collections.length !== 0
          ? `Users ${filter} Collections`
          : "Sorry, no collections found"}
      </h3>
      {my_collection && (
        <Button
          type="button"
          add={true}
          className="button"
          text="Add record"
          action={navigateToAddForm}
        />
      )}
      {my_collection ? (
        <RecordsList ownCollection={true} records={records} />
      ) : collections.length === 0 ? (
        <img
          className="record-player-logo"
          src="/images/record-player.png"
          alt="record player logo"
        />
      ) : (
        <UsersCollectionsList collections={collections} />
      )}
    </UsersCollectionsPageStyled>
  );
};

export default UsersCollectionsPage;
