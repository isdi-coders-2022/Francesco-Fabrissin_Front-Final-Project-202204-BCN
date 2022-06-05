import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import RecordsList from "../../components/RecordsList/RecordsList";
import User from "../../components/User/User";
import UsersCollectionsList from "../../components/UsersCollectionsList/UsersCollectionsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadMyRecordsThunk } from "../../redux/thunks/recordsThunks";
import { loadCollectionsThunk } from "../../redux/thunks/usersThunks";

const UsersCollectionsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .list-type {
    color: #4f4f4f;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const UsersCollectionsPage = () => {
  const users = useAppSelector((state) => state.users);
  const { myCollection } = useParams();
  const { userInfo } = useAppSelector((state) => state.user);
  const records = useAppSelector((state) => state.records);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateToAddForm = () => {
    navigate("/myCollection/addRecord");
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(loadCollectionsThunk(token as string));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(loadMyRecordsThunk(token as string));
  }, [dispatch, token]);

  return (
    <UsersCollectionsPageStyled>
      <User userInfo={userInfo} />
      <h3 className="list-type">
        {myCollection ? "My Collection" : "Users collections"}
      </h3>
      {myCollection && (
        <Button
          add={true}
          edit={false}
          className="button"
          text="Add record"
          action={navigateToAddForm}
        />
      )}
      {myCollection ? (
        <RecordsList records={records} />
      ) : (
        <UsersCollectionsList users={users} />
      )}
    </UsersCollectionsPageStyled>
  );
};

export default UsersCollectionsPage;
