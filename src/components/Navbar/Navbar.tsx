import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "../../fonts/PoorStory/PoorStory-Regular.ttf";
import "../../fonts/Permanent_Marker/PermanentMarker-Regular.ttf";
import { FaStickyNote, FaUserTie } from "react-icons/fa";
// import { FcAbout } from "react-icons/fc";
import { MdContactMail } from "react-icons/md";
import { IoIosApps } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between bg-gradient-to-br from-stone-800 to-stone-600 h-20 px-2 md:px-4">
        <NavLink className="logo-text" to="/">
          Aaron Hardy
        </NavLink>

        <div className="logo-art"></div>
        <ul>
          <li>
            <NavLink to="/notes">
              <FaStickyNote style={{ color: "#B5B9FF" }} />
              <p>Notes</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <FaUserTie style={{ color: "palegreen" }} />
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">
              <IoIosApps style={{ color: "peachpuff" }} />
              <p>Services</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <MdContactMail style={{ color: "palegreen" }} />
              <p>Contact</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <p>Log in</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
