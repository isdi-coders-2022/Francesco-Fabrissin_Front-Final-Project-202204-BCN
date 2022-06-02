import styled from "styled-components";

const FormStyled = styled.div`
  margin: 1rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #fafafa;
  border-radius: 4rem;

  .logo {
    width: 12rem;
    margin: 1.5rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 16rem;
    margin: 0 2rem;
  }

  label {
    margin: 0;
  }

  .button-main {
    margin-top: 1rem;
    width: 10rem;
    height: 3rem;
    background-color: #3a4042;
    border: none;
    border-radius: 0.3rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
  }

  .button-secondary {
    margin-top: -0.8rem;
    border: none;
    background-color: inherit;
    color: #2674e9;
    cursor: pointer;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
`;

export default FormStyled;
