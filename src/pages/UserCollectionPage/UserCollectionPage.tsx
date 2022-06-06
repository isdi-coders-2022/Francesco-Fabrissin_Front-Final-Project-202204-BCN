import { useParams } from "react-router-dom";
import User from "../../components/User/User";
import { useAppSelector } from "../../redux/hooks";
import UsersCollectionsPageStyled from "../UsersCollectionsPage/UsersCollectionPageStyled";

const UserCollectionPage = () => {
  const { userId } = useParams();
  const users = useAppSelector((state) => state.users);
  const userInfo = users
    .filter((user) => user.id === userId)
    .map((user) => ({
      username: user.username,
      image: user.image,
    }));

  return (
    <UsersCollectionsPageStyled>
      <User userInfo={userInfo[0]} />
    </UsersCollectionsPageStyled>
  );
};

export default UserCollectionPage;
