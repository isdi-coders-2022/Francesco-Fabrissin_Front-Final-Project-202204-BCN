import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  const dispatch = useAppDispatch();

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
              <li className="nav-item active">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/myCollection"
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
