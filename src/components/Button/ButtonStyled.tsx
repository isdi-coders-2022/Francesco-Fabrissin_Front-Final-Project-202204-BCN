import styled from "styled-components";

const ButtonStyled = styled.button`
  @media (max-width: 768px) {
    width: 32vw;
    font-size: 3vw;
  }

  @media (min-width: 768px) {
    width: 8rem;
    font-size: 1rem;
  }

  background-color: #dae1e9;
  width: 8rem;
  height: 3.2rem;
  border: none;
  border-radius: 0.4rem;
  font-weight: 500;
  color: #4f4f4f;
  z-index: 1;
`;

export default ButtonStyled;
