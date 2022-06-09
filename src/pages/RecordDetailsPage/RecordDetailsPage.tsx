import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadRecordThunk } from "../../redux/thunks/recordThunk";
import RecordDetailsPageStyled from "./RecordDetailsPageStyled";

const RecordDetailsPage = () => {
  const { recordId } = useParams();

  const {
    imageBackup,
    title,
    artist,
    year,
    genre,
    conditions,
    price,
    youtube_url,
  } = useAppSelector((state) => state.record);

  const embedId = youtube_url
    ? youtube_url.replace("https://www.youtube.com/watch?v=", "")
    : "";

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadRecordThunk(recordId as string));
  }, [dispatch, recordId]);

  return (
    <RecordDetailsPageStyled>
      <div className="container">
        <img
          src={imageBackup}
          alt={`${title} cover`}
          className="record-cover"
        />
        <div className="title-artist">
          <h2 className="title">{title}</h2>
          <h3 className="artist">{artist}</h3>
        </div>
        <div className="info">
          <div className="year-genre">
            <span className="year">Released in {year}</span>
            <span className="genre">Genre: {genre}</span>
          </div>
          <div className="conditions-price">
            <span className="consitions">Conditions: {conditions}</span>
            <span className="price">Price: {price}€</span>
          </div>
        </div>
        <iframe
          className="video"
          title="favourite owner track YouTube video"
          src={`https://www.youtube.com/embed/${embedId}`}
        ></iframe>
        <Button className="button" type="button" text="Show intrest" />
      </div>
    </RecordDetailsPageStyled>
  );
};

export default RecordDetailsPage;
