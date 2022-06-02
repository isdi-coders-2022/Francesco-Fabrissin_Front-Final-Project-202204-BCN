import { useEffect } from "react";
import styled from "styled-components";
import User from "../../components/User/User";
import UsersCollectionsList from "../../components/UsersCollectionsList/UsersCollectionsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadCollectionsThunk } from "../../redux/thunks/usersThunks";

const UsersCollectionsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UsersCollectionsPage = () => {
  const users = useAppSelector((state) => state.users);
  const { userInfo } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(loadCollectionsThunk(token as string));
  }, [dispatch, token]);

  return (
    <UsersCollectionsPageStyled>
      <User userInfo={userInfo} />
      <UsersCollectionsList users={users} />
    </UsersCollectionsPageStyled>
  );
};

export default UsersCollectionsPage;
