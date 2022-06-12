import styled from "styled-components";

const FooterStyled = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #dae1e9;
  display: flex;
  align-items: center;

  .logo {
    width: 6rem;
  }

  span {
    position: absolute;
    left: 50%;
    @media (min-width: 250px) {
      width: 8rem;
      transform: translate(-4rem);
      font-size: 0.7rem;
    }
    @media (min-width: 350px) {
      width: 11rem;
      transform: translate(-5.5rem);
      font-size: 1rem;
    }
    @media (min-width: 600px) {
      width: 13rem;
      transform: translate(-6.5rem);
      font-size: 1rem;
    }
    width: 13rem;
    font-weight: 500;
    justify-self: center;
  }
`;

export default FooterStyled;
