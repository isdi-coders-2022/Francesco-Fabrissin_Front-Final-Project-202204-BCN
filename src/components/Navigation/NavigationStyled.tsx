import styled from "styled-components";

const NavigationStyled = styled.div`
  background-color: #3a4042!;
  width: 100%;
  color: white;

  .navbar-dark {
    background-color: #3a4042 !important;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .navbar {
    padding: 1rem;
  }

  .navbar-nav {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .button-logout {
    width: 4.5rem;
    height: 2rem;
    border: 1px solid white;
    border-radius: 0.5rem;
    background-color: #3a4042;
    color: white;
    padding: 0;
  }
`;

export default NavigationStyled;
