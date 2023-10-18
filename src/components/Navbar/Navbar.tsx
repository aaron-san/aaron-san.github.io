import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "../../fonts/PoorStory/PoorStory-Regular.ttf";
import "../../fonts/Permanent_Marker/PermanentMarker-Regular.ttf";
import { FaStickyNote, FaUserTie } from "react-icons/fa";
// import { FcAbout } from "react-icons/fc";
import { MdContactMail } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <header className="sticky top-0 z-10 flex p-3 bg-gradient-to-br from-stone-800 to-stone-500">
      <div className="flex justify-between w-[1000px] mx-auto px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex"
        >
          <NavLink
            id="site-logo"
            className="text-3xl text-transparent w-content bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-clip-text "
            to="/"
          >
            Aaron Hardy
          </NavLink>

          <div className="absolute md:left-[275px] top-[55px] z-400 w-[165px] h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </motion.div>

        <nav className="max-w-[50%] flex flex-wrap">
          <div className="" onClick={toggleSidebar}>
            <FaBars className="z-50 w-6 h-6 mt-1 text-white cursor-pointer" />
          </div>
          {/* <ul
            className="flex-col items-center justify-center hidden gap-4 mt-4 text-white list-none sm:flex flex-nowrap"
            onClick={toggleSidebar}
          >
            <li className="uppercase hover:underline">
              <NavLink to="/notes" className="flex items-baseline">
                <FaStickyNote style={{ color: "#B5B9FF" }} />
                <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                  Notes
                </p>
              </NavLink>
            </li>
            <li className="uppercase hover:underline">
              <NavLink to="/about" className="flex items-baseline">
                <FaUserTie style={{ color: "palegreen" }} />
                <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                  About
                </p>
              </NavLink>
            </li>
            <li className="uppercase hover:underline">
              <NavLink to="/services" className="flex items-baseline">
                <IoIosApps style={{ color: "peachpuff" }} />
                <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                  Services
                </p>
              </NavLink>
            </li>
            <li className="uppercase hover:underline">
              <NavLink to="/contact" className="flex items-baseline">
                <MdContactMail style={{ color: "palegreen" }} />
                <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                  Contact
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="flex items-baseline uppercase">
                <p className="px-1 border border-white rounded-md hover:bg-slate-600">
                  Log in
                </p>
              </NavLink>
            </li>
          </ul> */}
          {sideBar && (
            <div className="absolute top-0 left-0 w-screen h-screen text-black bg-slate-700">
              <div
                onClick={() => setSideBar(false)}
                className="mt-4 mb-4 font-extrabold text-center text-white cursor-pointer"
              >
                X
              </div>
              <ul
                className="flex flex-col items-center justify-center gap-4 mt-4 text-white list-none"
                onClick={toggleSidebar}
              >
                <li className="uppercase hover:underline">
                  <NavLink to="/notes" className="flex items-baseline">
                    <FaStickyNote style={{ color: "#B5B9FF" }} />
                    <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                      Notes
                    </p>
                  </NavLink>
                </li>
                <li className="uppercase hover:underline">
                  <NavLink to="/about" className="flex items-baseline">
                    <FaUserTie style={{ color: "palegreen" }} />
                    <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                      About
                    </p>
                  </NavLink>
                </li>
                <li className="uppercase hover:underline">
                  <NavLink to="/services" className="flex items-baseline">
                    <IoIosApps style={{ color: "peachpuff" }} />
                    <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                      Services
                    </p>
                  </NavLink>
                </li>
                <li className="uppercase hover:underline">
                  <NavLink to="/contact" className="flex items-baseline">
                    <MdContactMail style={{ color: "palegreen" }} />
                    <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                      Contact
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="flex items-baseline uppercase"
                  >
                    <p className="px-1 border border-white rounded-md hover:bg-slate-600">
                      Log in
                    </p>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
