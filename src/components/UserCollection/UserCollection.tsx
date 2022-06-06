import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { loadUserCollectionThunk } from "../../redux/thunks/recordsThunks";
import { IUserCollection } from "../../types/types";
import Button from "../Button/Button";
import UserCollectionStyled from "./UserCollectionStyled";

const UserCollection = ({
  user: { id, username, location, image, genre },
}: {
  user: IUserCollection;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateAndLoadRecords = () => {
    dispatch(loadUserCollectionThunk(id));
    navigate(`/users/${id}`);
  };

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
