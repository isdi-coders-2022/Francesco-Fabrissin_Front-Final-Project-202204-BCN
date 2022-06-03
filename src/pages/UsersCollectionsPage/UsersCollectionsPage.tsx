import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import User from "../../components/User/User";
import UsersCollectionsList from "../../components/UsersCollectionsList/UsersCollectionsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadCollectionsThunk } from "../../redux/thunks/usersThunks";

const UsersCollectionsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .list-type {
    color: #4f4f4f;
    margin-bottom: 3rem;
  }
`;

const UsersCollectionsPage = () => {
  const users = useAppSelector((state) => state.users);
  const { myCollection } = useParams();
  const { userInfo } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(loadCollectionsThunk(token as string));
  }, [dispatch, token]);

  return (
    <UsersCollectionsPageStyled>
      <User userInfo={userInfo} />
      <h3 className="list-type">
        {myCollection ? "My Collection" : "Users collections"}
      </h3>
      <UsersCollectionsList users={users} />
    </UsersCollectionsPageStyled>
  );
};

export default UsersCollectionsPage;
