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
    width: 13rem;
    transform: translate(-6.5rem);
    font-weight: 600;
    font-size: 1rem;
    justify-self: center;
  }
`;

export default FooterStyled;
