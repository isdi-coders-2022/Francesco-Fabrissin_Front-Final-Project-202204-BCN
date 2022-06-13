import styled from "styled-components";

const PageNotFoundStyled = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(250, 250, 250, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .number {
    display: flex;
  }
`;

const PageNotFound = () => {
  return (
    <PageNotFoundStyled>
      <div className="number">
        <span className="number">4</span>
        <img src="/images/record-icon.png" alt="" className="record-icon" />
        <span className="number">4</span>
      </div>
      <span>Sorry, page not found</span>
    </PageNotFoundStyled>
  );
};

export default PageNotFound;
