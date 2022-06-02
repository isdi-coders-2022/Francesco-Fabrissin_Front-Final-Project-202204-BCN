import { IUser } from "../../types/types";
import UserStyled from "./UserStyled";

const User = ({ userInfo: { username, image } }: { userInfo: IUser }) => {
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
