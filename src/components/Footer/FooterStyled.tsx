import styled from "styled-components";

const FooterStyled = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 5rem;
  background-color: #dae1e9;
  display: flex;
  align-items: center;

  .logo {
    width: 7rem;
  }

  span {
    position: absolute;
    left: 50%;
    width: 13rem;
    transform: translate(-6.5rem);
    font-weight: 600;
    font-size: 1.2rem;
    justify-self: center;
  }
`;

export default FooterStyled;
