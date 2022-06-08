import { useNavigate } from "react-router-dom";
import { IUserCollection } from "../../types/types";
import Button from "../Button/Button";
import UserCollectionStyled from "./UserCollectionStyled";

const UserCollection = ({
  user: { id, username, location, image, imageBackup, genre },
}: {
  user: IUserCollection;
}) => {
  const navigate = useNavigate();

  const navigateAndLoadRecords = () => {
    navigate(`/users/${id}`);
  };

  return (
    <UserCollectionStyled className="card col-xs-8 col-sm-10 col-md-5 col-lg-5">
      <img
        src={image ? imageBackup : "/images/no-photo-available.png"}
        alt=""
        className="card__img"
      />
      <div className="card-body">
        <h3 className="card-title">{username} Collection</h3>
        <h4 className="location">Location: {location}</h4>
        <h4 className="genre">Genre: {genre}</h4>
      </div>
      <Button
        type="button"
        disabled={false}
        edit={false}
        add={false}
        className="button button--see-collection"
        text="See collection"
        action={navigateAndLoadRecords}
      />
    </UserCollectionStyled>
  );
};

export default UserCollection;
