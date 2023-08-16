import React, { useState } from "react";
import img from "../../assets/ieeeLogo.svg";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleNavbar = () => {
    setMenuOpened(!menuOpened);
  };
  return (
    <>
      <div className="navbar">
        <ul className="navcontainer">
          <div className="imgdiv">
            <img className="ieeelogo" src={img} alt="" />
          </div>
          <div
            className={menuOpened ? "headingcontainer" : "headingcontaineropen"}
            activeClassName="active"
          >
            {menuOpened ? (
              <CloseIcon onClick={() => toggleNavbar()} fontSize="large" />
            ) : (
              ""
            )}
            <li
              className={`${pathname === "/" ? "active" : ""}`}
              onClick={toggleNavbar}
            >
              <Link to="/">HOME</Link>
              <div className="underline"></div>
            </li>
            <li
              className={`${pathname === "/about" ? "active" : ""}`}
              onClick={toggleNavbar}
            >
              <Link to="/about">ABOUT</Link>
              <div className="underline"></div>
            </li>
            <li
              className={`${pathname === "/events" ? "active" : ""}`}
              onClick={toggleNavbar}
            >
              <Link to="/events">EVENTS</Link>
              <div className="underline"></div>
            </li>
            <li
              className={`${pathname === "/teams" ? "active" : ""}`}
              onClick={toggleNavbar}
            >
              <Link to="/teams">TEAM</Link>
              <div className="underline"></div>
            </li>
            <li
              className={`${pathname === "/gallery" ? "active" : ""}`}
              onClick={toggleNavbar}
            >
              <Link to="/gallery">GALLERY</Link>
              <div className="underline"></div>
            </li>
            <li
              className={`${pathname === "/contact" ? "active" : ""}`}
              onClick={toggleNavbar}
            >
              <Link to="/contact">CONTACT</Link>
              <div className="underline"></div>
            </li>
          </div>
          {menuOpened ? (
            ""
          ) : (
            <MenuIcon onClick={() => toggleNavbar()} fontSize="large" />
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
