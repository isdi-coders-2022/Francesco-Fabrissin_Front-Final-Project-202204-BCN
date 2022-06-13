import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import RecordsList from "../../components/RecordsList/RecordsList";
import User from "../../components/User/User";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadMyRecordsThunk } from "../../redux/thunks/recordsThunks";
import UsersCollectionsPageStyled from "../UsersCollectionsPage/UsersCollectionsPageStyled";

const MyCollectionPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.user);
  const records = useAppSelector((state) => state.records);

  const navigateToAddForm = () => {
    navigate("/my_collection/addRecord");
  };

  useEffect(() => {
    dispatch(loadMyRecordsThunk());
  }, [dispatch]);

  return (
    <UsersCollectionsPageStyled>
      <User userInfo={userInfo} />
      <h3 className="my-collection">My Collection</h3>
      <Button
        type="button"
        add={true}
        className="button"
        text="Add record"
        action={navigateToAddForm}
      />
      <RecordsList ownCollection={true} records={records} />
    </UsersCollectionsPageStyled>
  );
};

export default MyCollectionPage;
