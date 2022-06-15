import styled from "styled-components";

const RecordStyled = styled.li`
  width: 90%;
  height: 15rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  cursor: pointer;

  .body {
    width: 100%;
    @media (min-width: 300px) {
      height: 60%;
    }
    @media (min-width: 400px) {
      height: 70%;
    }
    @media (min-width: 600px) {
      height: 80%;
    }

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
    padding: 0.5rem 0;
    cursor: pointer;
  }
  .image-info {
    display: flex;
    @media (min-width: 400px) {
      gap: 0.5rem;
    }

    @media (min-width: 800px) {
      gap: 8rem;
    }
    @media (min-width: 1000px) {
      gap: 14rem;
    }

    @media (min-width: 1200px) {
      gap: 20rem;
    }
    align-items: center;
    height: 100%;
  }

  .record {
    &__img {
      @media (min-width: 300px) {
        width: 8rem;
        margin-right: 0.5rem;
      }
      @media (min-width: 600px) {
        width: 10rem;
        margin-right: 0.5rem;
      }
      @media (min-width: 1200px) {
        width: 12rem;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;

      @media (min-width: 300px) {
        height: 7rem;
        justify-content: flex-start;
      }
      @media (min-width: 400px) {
        height: 8rem;
        justify-content: space-between;
      }
      @media (min-width: 600px) {
        height: 10rem;
        justify-content: space-between;
      }
      @media (min-width: 600px) {
        height: 12rem;
        justify-content: space-between;
      }

      .title-artist {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        word-spacing: 0.1px;
        justify-content: flex-start;

        .title {
          @media (min-width: 300px) {
            font-size: 1rem;
          }
          @media (min-width: 400px) {
            font-size: 1.1rem;
          }
          @media (min-width: 500px) {
            font-size: 1.2rem;
          }
          @media (min-width: 600px) {
            font-size: 1.3rem;
          }
        }

        .artist {
          @media (min-width: 300px) {
            font-size: 0.8rem;
          }
          @media (min-width: 400px) {
            font-size: 0.9rem;
          }
          @media (min-width: 500px) {
            font-size: 1rem;
          }
          @media (min-width: 600px) {
            font-size: 1.1rem;
          }
        }
      }

      .details {
        @media (min-width: 300px) {
          display: none;
        }
        @media (min-width: 400px) {
          display: flex;
          font-size: 0.9rem;
        }
        @media (min-width: 400px) {
          display: flex;
          font-size: 1rem;
        }
        @media (min-width: 600px) {
          display: flex;
          font-size: 1.2rem;
        }

        flex-direction: column;
        color: #4f4f4f;
        font-weight: 500;
      }
    }
  }
`;

export default RecordStyled;
