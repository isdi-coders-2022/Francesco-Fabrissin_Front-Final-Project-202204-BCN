import { Toaster } from "react-hot-toast";
import { useAppSelector } from "../../redux/hooks";
import UserStyled from "./UserStyled";

const User = () => {
  const {
    userInfo: { username, image },
  } = useAppSelector((state) => state.user);
  return (
    <UserStyled>
      <div className="user">
        <img
          src={image ? image : "/images/no-photo-available.png"}
          alt={image ? `${username} avatar` : "unknown avatar"}
          className="user__avatar"
        />
        <h2 className="user__username">{username}</h2>
      </div>
    </UserStyled>
  );
};

export default User;
