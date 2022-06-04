import { IUserCollection } from "../../types/types";
import Button from "../Button/Button";
import UserCollectionStyled from "./UserCollectionStyled";

const UserCollection = ({
  user: { username, location, image, genre },
}: {
  user: IUserCollection;
}) => {
  return (
    <UserCollectionStyled className="card col-xs-8 col-sm-10 col-md-5 col-lg-5">
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
      <Button
        edit={false}
        add={false}
        className="button button--see-collection"
        text="See collection"
        action={() => {}}
      />
    </UserCollectionStyled>
  );
};

export default UserCollection;
