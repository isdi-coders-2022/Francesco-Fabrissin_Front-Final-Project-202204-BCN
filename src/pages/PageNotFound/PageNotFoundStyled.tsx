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

  .number-404 {
    display: flex;
    align-items: center;
  }
  .number {
    font-size: 10rem;
    color: #000;
  }

  .record-icon {
    width: 8rem;
  }

  .message {
    font-family: Helvetica, sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .home-button {
    position: absolute;
    top: 5%;
    left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  .home-button > span {
    font-size: 0.8rem;
  }
`;

export default PageNotFoundStyled;
