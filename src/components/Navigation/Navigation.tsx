import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import NavigationStyled from "./NavigationStyled";
import { CgSearch } from "react-icons/cg";
import { filterCollectionsActionCreator } from "../../redux/features/usersSlice";
import { loadCollectionsThunk } from "../../redux/thunks/usersThunks";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = useState(false);
  const [filterOption, setFilterOption] = useState("");
  const { pathname } = useLocation();

  const changeFilterOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value);
  };

  const navToggle = () => {
    setExpanded(expanded ? false : true);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  const applyFilter = async () => {
    if (filterOption === "All") {
      await dispatch(loadCollectionsThunk());
      setFilterOption("");
    } else {
      await dispatch(loadCollectionsThunk());
      dispatch(filterCollectionsActionCreator(filterOption));
      setFilterOption("");
    }
    closeNav();
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
                  to="/my_collection"
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
              {pathname === "/users/collections" && (
                <li className="nav-item active">
                  <div className="search">
                    <select
                      className="form-select"
                      onChange={changeFilterOption}
                      value={filterOption}
                      placeholder="Search by genre"
                    >
                      <option disabled value="">
                        Search by genre
                      </option>
                      <option value="Rock">Rock</option>
                      <option value="Reggae">Reggae</option>
                      <option value="Electronic">Electronic</option>
                      <option value="Disco">Disco</option>
                      <option value="Jazz">Jazz</option>
                      <option value="Funk/Soul">Funk/Soul</option>
                      <option value="Classical">Classical</option>
                      <option value="Latin">Latin</option>
                      <option value="Pop">Pop</option>
                      <option value="Alternative">Alternative</option>
                      <option value="All">All</option>
                    </select>
                    <CgSearch
                      onClick={applyFilter}
                      className="icon-search"
                      size={28}
                    />
                  </div>
                </li>
              )}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavigationStyled>
  );
};

export default Navigation;
