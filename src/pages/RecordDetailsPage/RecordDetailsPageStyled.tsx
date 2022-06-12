import styled from "styled-components";

const RecordDetailsPageStyled = styled.div`
  background-color: #6a7478;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    margin: 2rem 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #fff;

    .record-cover {
      width: 12rem;
    }

    .title-artist {
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        font-weight: 700;
      }

      .artist {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }

    .info {
      display: flex;
      justify-content: space-between;
      @media (min-width: 300px) {
        width: 95%;
      }
      @media (min-width: 800px) {
        width: 70%;
      }

      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;

      .year-genre {
        display: flex;
        flex-direction: column;
        text-align: left;
      }

      .conditions-price {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
    }

    .video {
      height: 100%;
      @media (min-width: 300px) {
        width: 95%;
      }
      @media (min-width: 800px) {
        width: 70%;
      }
    }

    .button {
      height: 7.5rem;
    }
  }
`;

export default RecordDetailsPageStyled;
