import RecordConditionsPageStyled from "./RecordConditionsPageStyled";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const RecordConditionsPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <RecordConditionsPageStyled>
      <h1 className="title">Record conditions rate</h1>
      <div className="conditions">
        <div className="conditions-description">
          <h4 className="condition-grade">Mint(M)</h4>
          <p className="description">
            Absolutely perfect in every way. Certainly never been played,
            possibly even still sealed. Should be used sparingly as a grade, if
            at all.
          </p>
        </div>
        <div className="conditions-description">
          <h4 className="condition-grade">Near Mint(NM)</h4>
          <p className="description">
            A nearly perfect record. A NM or M- record has more than likely
            never been played, and the vinyl will play perfectly, with no
            imperfections during playback. Many dealers won't give a grade
            higher than this implying (perhaps correctly) that no record is ever
            truly perfect. The record should show no obvious signs of wear.
          </p>
        </div>
        <div className="conditions-description">
          <h4 className="condition-grade">Very Good Plus(VG+)</h4>
          <p className="description">
            Generally worth 50% of the Near Mint value. A Very Good Plus record
            will show some signs that it was played and otherwise handled by a
            previous owner who took good care of it. Defects should be more of a
            cosmetic nature, not affecting the actual playback as a whole.
          </p>
        </div>
        <div className="conditions-description">
          <h4 className="condition-grade">Very Good(VG)</h4>
          <p className="description">
            Generally worth 25% of Near Mint value. Many of the defects found in
            a VG+ record will be more pronounced in a VG disc. Surface noise
            will be evident upon playing, especially in soft passages and during
            a song's intro and fade,.
          </p>
        </div>
        <div className="conditions-description">
          <h4 className="condition-grade">Good(G)</h4>
          <p className="description">
            Generally worth 10-15% of the Near Mint value. A record in Good or
            Good Plus condition can be played through without skipping. But it
            will have significant surface noise, scratches, and visible groove
            wear.
          </p>
        </div>
        <div className="conditions-description">
          <h4 className="condition-grade">Poor(P)</h4>
          <p className="description">
            Generally worth 0-5% of the Near Mint price. The record is cracked,
            badly warped, and won't play through without skipping or repeating.
          </p>
        </div>
      </div>
      <ImCancelCircle
        size={30}
        data-testid="icon-back"
        className="icon-back"
        onClick={goBack}
      />
    </RecordConditionsPageStyled>
  );
};

export default RecordConditionsPage;
