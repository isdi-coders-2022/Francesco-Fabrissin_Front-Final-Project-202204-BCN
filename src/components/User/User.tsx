import { useParams } from "react-router-dom";
import { IUser, OtherUser } from "../../types/types";
import UserStyled from "./UserStyled";

const User = ({
  userInfo: { username, image, imageBackup },
}: {
  userInfo: IUser | OtherUser;
}) => {
  const { userId } = useParams();

  return (
    <UserStyled>
      <div className="user">
        <img
          src={image ? imageBackup : "/images/no-photo-available.png"}
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
