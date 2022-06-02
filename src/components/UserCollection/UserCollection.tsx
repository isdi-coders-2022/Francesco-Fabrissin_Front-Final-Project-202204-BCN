import { IUserCollection } from "../../types/types";
import UserCollectionStyled from "./UserCollectionStyled";

const UserCollection = ({
  username,
  location,
  image,
  genre,
}: IUserCollection) => {
  return (
    <UserCollectionStyled className="card">
      <img
        src={image ? image : "/images/no-photo-available.png"}
        alt=""
        className="card__img"
      />
      <div className="card-body">
        <h3 className="card-title">{username} Collection</h3>
        <span className="location">Location: {location}</span>
        <span className="genre">Genre: {genre}</span>
      </div>
    </UserCollectionStyled>
  );
};

export default UserCollection;
