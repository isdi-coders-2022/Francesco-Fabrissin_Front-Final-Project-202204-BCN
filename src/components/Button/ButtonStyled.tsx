import styled from "styled-components";

const ButtonStyled = styled.button`
  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-16vw, 1.6rem);
    background-color: #dae1e9;
    width: 32vw;
    height: 3.2rem;
    border: none;
    border-radius: 0.4rem;
    font-size: 3.5vw;
    font-weight: 500;
    color: #4f4f4f;
    z-index: 1;
  }

  @media (min-width: 768px) {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-4rem, 1.6rem);
    background-color: #dae1e9;
    width: 8rem;
    height: 3.2rem;
    border: none;
    border-radius: 0.4rem;
    font-size: 1rem;
    font-weight: 500;
    color: #4f4f4f;
    z-index: 1;
  }
`;

export default ButtonStyled;
