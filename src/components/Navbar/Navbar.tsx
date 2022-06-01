import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navigation = () => {
  return (
    <NavbarStyled>
      <Navbar
        collapseOnSelect
        expand="md"
        className="navbar navbar-dark bg-dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/users/collections"
                >
                  Users Collection
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="button-logout">Logout</button>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarStyled>
  );
};

export default Navigation;
