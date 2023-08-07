import { Link, NavLink } from "react-router-dom";
import xIcon from "../../../assets/icons/x.svg";
import menuIcon from "../../../assets/icons/menu.svg";
import "./styles.scss";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openMobileMenu = () => {
    setShowMenu(true);
  };
  const closeMobileMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
      <nav className="nav">
        <div className="nav__info">
          <h3 className="nav__title">
            yeah<span className="nav__title--accent">Buddy</span>
          </h3>
          <span className="nav__toggle">
            {showMenu ? (
              <img src={xIcon} onClick={closeMobileMenu}></img>
            ) : (
              <img src={menuIcon} onClick={openMobileMenu}></img>
            )}
          </span>
        </div>
        <div className="nav__container">
          {showMenu ? (
            <ul className="nav__list">
              <li className="nav__list-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => "nav__link" + (isActive ? "--active" : "")}
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink
                  to="/exercises"
                  className={({ isActive }) => "nav__link" + (isActive ? "--active" : "")}
                  onClick={closeMobileMenu}
                >
                  Exercise Manager
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink
                  to="/routines"
                  className={({ isActive }) => "nav__link" + (isActive ? "--active" : "")}
                  onClick={closeMobileMenu}
                >
                  Routine Manager
                </NavLink>
              </li>
            </ul>
          ) : null}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
