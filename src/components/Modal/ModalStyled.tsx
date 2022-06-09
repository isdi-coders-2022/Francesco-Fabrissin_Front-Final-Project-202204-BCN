import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(250, 250, 250, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  .modale {
    width: 28rem;
    height: 18rem;
    background-color: #d9d9d9;
    border-radius: 5rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;

    span {
      width: 25rem;
      text-align: center;
    }

    .icon {
      width: 5rem;
    }
  }
`;

export default ModalStyled;
