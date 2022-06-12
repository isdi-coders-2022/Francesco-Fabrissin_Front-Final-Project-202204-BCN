import styled from "styled-components";

const UsersCollectionsPageStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  .page-info {
    @media (min-width: 300px) {
      width: 90%;
      margin-bottom: 1rem;
    }

    @media (min-width: 600px) {
      width: fit-content;
      margin-bottom: 2rem;
    }

    color: #4f4f4f;
    margin-top: 0.2rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .my-collection {
    color: #4f4f4f;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .record-player-logo {
    width: 15rem;
    color: #4f4f4f;
  }

  .not-found {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default UsersCollectionsPageStyled;
