import styled from "styled-components";

const RecordDetailsPageStyled = styled.div`
  background-color: #6a7478;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon-back {
    margin-top: 1rem;
    color: #fff;
    cursor: pointer;

    @media (min-width: 800px) {
      display: none;
    }
  }

  .details-container {
    margin: 2rem 0;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #fff;

    .record-cover {
      width: 12rem;

      @media (min-width: 1000px) {
        width: 14rem;
      }
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
        font-size: 1.1rem;
      }

      @media (min-width: 700px) {
        width: 50%;
        font-size: 1.2rem;
      }

      font-weight: 600;
      margin-bottom: 1rem;

      .year-genre {
        display: flex;
        flex-direction: column;
        text-align: left;

        @media (min-width: 700px) {
          text-align: center;
        }
      }

      .conditions-price {
        display: flex;
        flex-direction: column;
        text-align: left;

        @media (min-width: 700px) {
          text-align: center;
        }
      }
    }

    .video-container {
      position: relative;
      @media (min-width: 300px) {
        width: 95%;
      }
      @media (min-width: 1000px) {
        width: 80%;
      }

      height: 0;
      padding: 0% 0% 56.25%;
      overflow: hidden;
    }
    .video-container > iframe {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }

    .button {
      margin-bottom: 1rem;
    }
  }
`;

export default RecordDetailsPageStyled;
