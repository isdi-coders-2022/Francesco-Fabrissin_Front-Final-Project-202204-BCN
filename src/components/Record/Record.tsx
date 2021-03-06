import RecordStyled from "./RecordStyled";
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit2 } from "react-icons/fi";
import { IRecord } from "../../types/types";
import { deleteRecordThunk } from "../../redux/thunks/recordsThunks";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { loadRecordThunk } from "../../redux/thunks/recordThunk";

const Record = ({
  record: { id, image, imageBackup, title, artist, year, genre, conditions },
  ownCollection,
}: {
  record: IRecord;
  ownCollection: boolean;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteRecord = (event: React.FormEvent) => {
    event.stopPropagation();
    dispatch(deleteRecordThunk(id as string));
  };

  const goToEditForm = (event: React.FormEvent) => {
    event.stopPropagation();
    navigate(`/my_collection/edit/${id}`);
  };

  const goToRecordDetails = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(loadRecordThunk(id as string));
    navigate(`/records/${id}`);
  };

  return (
    <RecordStyled onClick={goToRecordDetails} className="record">
      <div className="body">
        <div className="image-info">
          <div className="image">
            <img
              width="11rem"
              height="11rem"
              src={image ? imageBackup : "/images/generic-record.png"}
              alt="record cover"
              className="record__img"
            />
          </div>
          <div className="record__info">
            <div className="title-artist">
              <span className="title">{title}</span>
              <span className="artist">{artist}</span>
            </div>
            <div className="details">
              <span>Released in {year}</span>
              <span>Genre: {genre}</span>
              <span>Conditions: {conditions}</span>
            </div>
          </div>
        </div>
        <div className="icons">
          {ownCollection && (
            <TiDeleteOutline
              data-testid="icon-delete"
              className="icon-delete"
              size={30}
              onClick={deleteRecord}
            />
          )}
          {ownCollection && (
            <FiEdit2
              data-testid="icon-edit"
              className="icon-edit"
              size={30}
              onClick={goToEditForm}
            />
          )}
        </div>
      </div>
    </RecordStyled>
  );
};

export default Record;
