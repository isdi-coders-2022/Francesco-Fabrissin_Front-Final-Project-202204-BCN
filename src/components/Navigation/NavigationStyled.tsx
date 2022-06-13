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
    position: relative;
    padding: 1rem;
  }

  .navbar-nav {
    display: flex;
    align-items: center;
    justify-content: start;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .button-logout {
    border: none;
    border-radius: 0.5rem;
    background-color: #3a4042;
    color: white;
    padding-left: 0.5rem;
    padding-bottom: 0.4rem;
    @media (min-width: 768px) {
      padding-bottom: 0;
    }
  }

  .search {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    height: 2rem;
    @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translate(0, -1rem);
    }
    @media (max-width: 768px) {
      margin-top: 1.8rem;
      padding-bottom: 1.5rem;
      margin-left: 2rem;
    }

    .icon-search {
      cursor: pointer;
    }
  }

  .hidden {
    display: none;
  }
`;

export default NavigationStyled;
