import { useParams } from "react-router-dom";
import { IUser } from "../../types/types";
import UserStyled from "./UserStyled";

const User = ({ userInfo: { username, image } }: { userInfo: IUser }) => {
  const { userId } = useParams();
  return (
    <UserStyled>
      <div className="user">
        <img
          src={image ? image : "/images/no-photo-available.png"}
          alt={image ? `${username} avatar` : "unknown avatar"}
          className="user__avatar"
        />
        <h2 className="user__username">
          {username}
          {userId && " Collection"}
        </h2>
      </div>
    </UserStyled>
  );
};

export default User;
