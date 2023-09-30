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
    <header className="sticky top-0 z-10 bg-gradient-to-br from-stone-800 to-stone-500 flex p-2">
      <div className="flex justify-between w-[1000px] mx-auto px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex"
        >
          <NavLink
            className="w-content text-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text "
            to="/"
          >
            Aaron Hardy
          </NavLink>

          <div className="absolute md:left-[280px] top-[45px] z-400 w-[165px] h-[1px] bg-gradient-to-r from-cyan-500 to-cyan-300"></div>
        </motion.div>

        <nav className="max-w-[50%] flex flex-wrap">
          <div className="sm:hidden" onClick={toggleSidebar}>
            <FaBars className="text-white h-6 w-6 mt-1" />
          </div>
          {sideBar && (
            <div className="sm:hidden bg-slate-700 text-black absolute left-0 top-0 w-[80%] h-screen">
              <ul
                className="flex flex-col justify-center items-center list-none text-white gap-4 mt-4"
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
                    className="uppercase flex items-baseline"
                  >
                    <p className="border border-white rounded-md px-1 hover:bg-slate-600">
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
