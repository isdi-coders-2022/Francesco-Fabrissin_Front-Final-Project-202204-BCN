import styled from "styled-components";

const RecordStyled = styled.div`
  width: 90%;
  height: 15rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;

  .body {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
  }
  .icons {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .image-info {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .record {
    &__img {
      width: 10rem;
      margin-right: 0.5rem;
    }

    &__info {
      height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title-artist {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        word-spacing: 0.1px;

        .title {
          font-size: 1.3rem;
        }

        .artist {
          font-size: 1.1rem;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        color: #4f4f4f;
        font-weight: 500;
      }
    }
  }
`;

export default RecordStyled;
