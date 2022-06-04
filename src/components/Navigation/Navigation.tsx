import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = useState(false);

  const navToggle = () => {
    setExpanded(expanded ? false : true);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  const logout = () => {
    dispatch(logoutActionCreator());
    localStorage.removeItem("token");
  };

  return (
    <NavigationStyled>
      <Navbar
        collapseOnSelect
        expand="md"
        className="navbar navbar-dark bg-dark"
        expanded={expanded}
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={navToggle}
        />
        <Navbar.Collapse className="navbar-collapse">
          <Nav>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/users/collections"
                  onClick={closeNav}
                >
                  Users Collection
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/myCollection"
                  onClick={closeNav}
                >
                  My Collection
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="button-logout" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavigationStyled>
  );
};

export default Navigation;
