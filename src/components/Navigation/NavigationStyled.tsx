import styled from "styled-components";

const NavigationStyled = styled.div`
  background-color: #3a4042!;
  width: 100%;
  color: white;
  font-size: 1.1rem;

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
    border: none;
    border-radius: 0.5rem;
    background-color: #3a4042;
    color: white;
    padding: 0;
    padding-left: 0.5rem;
    @media (max-width: 768px) {
      padding-bottom: 2rem;
    }
  }
`;

export default NavigationStyled;
