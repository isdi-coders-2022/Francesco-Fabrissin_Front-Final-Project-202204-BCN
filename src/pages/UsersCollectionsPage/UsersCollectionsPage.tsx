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
  const users = useAppSelector((state) => state.users);
  const { my_collection } = useParams();
  const { userInfo } = useAppSelector((state) => state.user);
  const records = useAppSelector((state) => state.records);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateToAddForm = () => {
    navigate("/my_collection/addRecord");
  };

  useEffect(() => {
    dispatch(loadCollectionsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadMyRecordsThunk());
  }, [dispatch, navigate]);

  return (
    <UsersCollectionsPageStyled>
      <User userInfo={userInfo} />
      <h3 className="list-type">
        {my_collection ? "My Collection" : "Users collections"}
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
      ) : users.length === 0 ? (
        <span>
          Sorry, there are no collections that meet your search criterion
        </span>
      ) : (
        <UsersCollectionsList users={users} />
      )}
    </UsersCollectionsPageStyled>
  );
};

export default UsersCollectionsPage;
