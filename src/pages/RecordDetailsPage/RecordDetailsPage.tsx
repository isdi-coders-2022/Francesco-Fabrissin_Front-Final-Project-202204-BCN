import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadRecordThunk } from "../../redux/thunks/recordThunk";
import RecordDetailsPageStyled from "./RecordDetailsPageStyled";
import { openModalActionCreator } from "../../redux/features/uiSlice";
import { IoIosArrowRoundBack } from "react-icons/io";

const RecordDetailsPage = () => {
  const { recordId } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const {
    userInfo: { id },
  } = useAppSelector((state) => state.user);

  const {
    imageBackup,
    title,
    artist,
    year,
    genre,
    conditions,
    price,
    youtube_url,
    owner,
  } = useAppSelector((state) => state.record);

  const embedId = youtube_url
    ? youtube_url.replace("https://www.youtube.com/watch?v=", "")
    : "";

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadRecordThunk(recordId as string));
  }, [dispatch, recordId]);

  const showIntrest = () => {
    dispatch(
      openModalActionCreator(
        "The user has been notified about  your intrest and the record was added to your wantlist!"
      )
    );
  };

  return (
    <RecordDetailsPageStyled>
      <IoIosArrowRoundBack
        size={60}
        data-testid="icon-back"
        className="icon-back"
        onClick={goBack}
      />
      <div className="details-container">
        <img
          src={imageBackup ? imageBackup : "/images/generic-record.png"}
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
        <div className="video-container">
          <iframe
            className="video"
            title="favourite owner track YouTube video"
            src={`https://www.youtube.com/embed/${embedId}`}
          ></iframe>
        </div>
        {id !== owner && (
          <Button
            className="button"
            type="button"
            text="Show interest"
            action={showIntrest}
          />
        )}
      </div>
    </RecordDetailsPageStyled>
  );
};

export default RecordDetailsPage;
