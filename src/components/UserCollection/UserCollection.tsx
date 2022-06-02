import { IUserCollection } from "../../types/types";
import UserCollectionStyled from "./UserCollectionStyled";

const UserCollection = ({
  user: { username, location, image, genre },
}: {
  user: IUserCollection;
}) => {
  return (
    <UserCollectionStyled className="card">
      <img
        src={image ? image : "/images/no-photo-available.png"}
        alt=""
        className="card__img"
      />
      <div className="card-body">
        <h3 className="card-title">{username} Collection</h3>
        <h4 className="location">Location: {location}</h4>
        <h4 className="genre">Genre: {genre}</h4>
      </div>
    </UserCollectionStyled>
  );
};

export default UserCollection;
