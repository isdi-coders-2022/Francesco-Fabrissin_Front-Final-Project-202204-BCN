import { useAppSelector } from "../../redux/hooks";
import UserStyled from "./UserStyled";

const User = () => {
  const {
    userInfo: { username, image },
  } = useAppSelector((state) => state.user);
  return (
    <UserStyled>
      <div className="user">
        <img src={image} alt="user avatar" className="user__avatar" />
        <span className="user__username">{username}</span>
      </div>
    </UserStyled>
  );
};

export default User;
