import styled from "styled-components";

const UserCollectionStyled = styled.div`
  position: relative;
  margin-top: 1rem;
  width: 30rem;
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
      border: 2px solid white;
      border-radius: 3.5rem;
    }
  }
  .card-body {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    z-index: 1;
  }

  .card-title {
    font-size: 1.9rem;
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
`;
export default UserCollectionStyled;
