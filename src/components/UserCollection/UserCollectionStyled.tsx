import styled from "styled-components";

const UserCollectionStyled = styled.li`
  position: relative;

  @media (min-width: 250px) {
    margin: 3.2rem 0;
    width: 100%;
  }

  @media (min-width: 330px) {
    margin: 3rem 0;
    width: 100%;
  }

  @media (min-width: 400px) {
    margin: 2rem 0;
  }

  @media (min-width: 600px) {
    width: 80%;
    margin: 2rem 0;
  }

  @media (min-width: 768px) {
    margin: 3.3rem 1rem;
    max-width: 45%;
  }

  @media (min-width: 1000px) {
    margin: 3rem 1rem;
    max-width: 45%;
  }

  height: 10rem;
  background-image: url("/images/records-collection.jpeg");
  background-size: cover;

  .card {
    display: flex;
    justify-content: center;
    &__img {
      position: absolute;
      object-fit: cover;
      top: 0;
      right: 0;
      @media (min-width: 300px) {
        transform: translate(0, -5rem);
      }
      @media (min-width: 500px) {
        transform: translate(0, -3.5rem);
      }
      @media (min-width: 600px) {
        transform: translate(0, -3.5rem);
      }

      @media (min-width: 768px) {
        transform: translate(0, -5rem);
      }

      @media (min-width: 1000px) {
        transform: translate(0, -4.3rem);
      }

      width: 7rem;
      height: 7rem;
      border: 2px solid white;
      border-radius: 3.5rem;
      background-color: #fff;
    }
  }
  .card-body {
    font-family: Helvetica, sans-serif;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    font-weight: 400;

    .card-title {
      height: 2rem;
      font-weight: 500;
      overflow-y: scroll;
    }

    .location,
    .genre {
      height: 1.5rem;
      font-size: 1.3rem;
      font-weight: 500;
      margin-bottom: 0.3rem;
    }
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3a4042;
    opacity: 0.4;
  }

  .button {
    &--see-collection {
      @media (min-width: 300px) {
        transform: translate(-4rem, 1.6rem);
      }
      @media (min-width: 500px) {
        transform: translate(-5rem, 1.6rem);
      }
      @media (min-width: 600px) {
        transform: translate(-6rem, 1.6rem);
      }

      @media (min-width: 768px) {
        transform: translate(-4rem, 1.6rem);
      }

      @media (min-width: 1000px) {
        transform: translate(-6rem, 1.6rem);
      }
      position: absolute;
      left: 50%;
      bottom: 0;
    }
  }
`;
export default UserCollectionStyled;
