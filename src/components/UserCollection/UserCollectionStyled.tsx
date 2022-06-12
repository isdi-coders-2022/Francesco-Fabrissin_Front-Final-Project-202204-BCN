import styled from "styled-components";

const UserCollectionStyled = styled.li`
  position: relative;

  @media (min-width: 250px) {
    margin: 2.5rem 0;
    width: 100%;
  }

  @media (min-width: 330px) {
    margin: 2rem 0;
    width: 100%;
  }

  @media (min-width: 400px) {
    margin: 1.5rem 0;
  }

  @media (min-width: 600px) {
    width: 70%;
    margin: 2rem 0;
  }

  @media (min-width: 768px) {
    margin: 2.8rem 1rem;
    max-width: 42%;
  }

  height: 10rem;
  background-image: url("/images/records-banner.jpeg");
  background-size: cover;

  .card {
    &__img {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(0, -3.5rem);
      width: 7rem;
      height: 7rem;
      border: 2px solid white;
      border-radius: 3.5rem;
      background-color: #fff;
    }
  }
  .card-body {
    color: #fff;
    display: flex;
    flex-direction: column;
    z-index: 1;
    font-weight: 400;

    .card-title {
      width: 70%;
      height: 2rem;
      overflow: scroll;
    }
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
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
