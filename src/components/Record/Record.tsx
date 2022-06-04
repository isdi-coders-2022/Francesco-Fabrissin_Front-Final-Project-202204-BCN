import RecordStyled from "./RecordStyled";
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit2 } from "react-icons/fi";
import { IRecord } from "../../types/types";

const Record = ({
  record: { image, title, artist, year, genre, conditions },
}: {
  record: IRecord;
}) => {
  return (
    <RecordStyled className="record">
      <div className="body">
        <div className="image-info">
          <div className="image">
            <img
              src={image ? image : "/images/generic-record.png"}
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
          <TiDeleteOutline className="icon-delete" size={30} />
          <FiEdit2 className="icon-edit" size={30} />
        </div>
      </div>
    </RecordStyled>
  );
};

export default Record;
