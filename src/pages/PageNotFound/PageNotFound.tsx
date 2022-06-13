import PageNotFoundStyled from "./PageNotFoundStyled";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/users/collections");
  };

  return (
    <PageNotFoundStyled>
      <div className="home-button">
        <AiFillHome data-testid="icon-home" onClick={goToHome} size={35} />
        <span>Back to Home</span>
      </div>
      <div className="number-404">
        <span className="number">4</span>
        <img src="/images/record-icon.png" alt="" className="record-icon" />
        <span className="number">4</span>
      </div>
      <span className="message">Sorry,</span>
      <span className="message">page not found</span>
    </PageNotFoundStyled>
  );
};

export default PageNotFound;
