import React, { useState } from "react";
import "./Navbar.css";
import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import "../../fonts/PoorStory/PoorStory-Regular.ttf";
import "../../fonts/Permanent_Marker/PermanentMarker-Regular.ttf";
import { FaHome, FaStickyNote, FaUserTie } from "react-icons/fa";
// import { FcAbout } from "react-icons/fc";
import { MdContactMail } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

const Navbar = () =>
{
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const toggleSidebar = () =>
  {
    setShowSideBar(!showSideBar);
  };

  return (
    <header className="top-0 z-10 sticky flex bg-gradient-to-br from-stone-800 to-stone-700 p-3">
      <div className="flex justify-between mx-auto px-2 md:px-4 w-[1000px]">
        <motion.div
          // initial={{ opacity: 0, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ delay: 1 }}
          className="flex"
        >
          <NavLink
            id="site-logo"
            className="bg-clip-text bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 w-content text-transparent text-3xl"
            to="/"
          >


            Aaron Hardy
            <div className="bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-[165px] h-[2px]"></div>
          </NavLink>
        </motion.div>

        <nav className="flex flex-wrap max-w-[50%]">
          <div className="" onClick={toggleSidebar}>
            <FaBars className="z-50 mt-2 w-6 h-6 text-white cursor-pointer" />
          </div>
          {/* <ul
            className="hidden sm:flex flex-col flex-nowrap justify-center items-center gap-4 mt-4 text-white list-none"
            onClick={toggleSidebar}
          >
            <li className="hover:underline uppercase">
              <NavLink to="/notes" className="flex items-baseline">
                <FaStickyNote style={{ color: "#B5B9FF" }} />
                <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                  Notes
                </p>
              </NavLink>
            </li>
            <li className="hover:underline uppercase">
              <NavLink to="/about" className="flex items-baseline">
                <FaUserTie style={{ color: "palegreen" }} />
                <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                  About
                </p>
              </NavLink>
            </li>
            <li className="hover:underline uppercase">
              <NavLink to="/services" className="flex items-baseline">
                <IoIosApps style={{ color: "peachpuff" }} />
                <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                  Services
                </p>
              </NavLink>
            </li>
            <li className="hover:underline uppercase">
              <NavLink to="/contact" className="flex items-baseline">
                <MdContactMail style={{ color: "palegreen" }} />
                <p className={`${sideBar ? "inline" : "hidden"} sm:inline`}>
                  Contact
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="flex items-baseline uppercase">
                <p className="hover:bg-slate-600 px-1 border border-white rounded-md">
                  Log in
                </p>
              </NavLink>
            </li>
          </ul> */}
          {showSideBar && (
            <div className="top-0 left-0 absolute bg-slate-700 w-screen h-screen text-black">
              <ul
                className="flex flex-col gap-4 mx-auto mt-4 w-[160px] text-white list-none"
                onClick={toggleSidebar}
              >
                <li
                  onClick={() => setShowSideBar(false)}
                  className="mt-4 mb-4 font-sans-serif text-white text-xl text-right cursor-pointer"
                >
                  X
                </li>
                <li className="hover:underline uppercase">
                  <NavLink to="/" className="flex items-baseline">
                    <FaHome style={{ color: "#B5B9FF" }} />
                    <p
                      className={`${showSideBar ? "inline text-white" : "hidden"
                        } sm:inline`}
                    >
                      Home
                    </p>
                  </NavLink>
                </li>
                <li className="hover:underline uppercase">
                  <NavLink to="/notes" className="flex items-baseline">
                    <FaStickyNote style={{ color: "#B5B9FF" }} />
                    <p
                      className={`${showSideBar ? "inline text-white" : "hidden"
                        } sm:inline`}
                    >
                      Notes
                    </p>
                  </NavLink>
                </li>
                <li className="hover:underline uppercase">
                  <NavLink to="/about" className="flex items-baseline">
                    <FaUserTie style={{ color: "palegreen" }} />
                    <p
                      className={`${showSideBar ? "inline text-white" : "hidden"
                        } sm:inline`}
                    >
                      About
                    </p>
                  </NavLink>
                </li>
                <li className="hover:underline uppercase">
                  <NavLink to="/services" className="flex items-baseline">
                    <IoIosApps style={{ color: "peachpuff" }} />
                    <p
                      className={`${showSideBar ? "inline text-white" : "hidden"
                        } sm:inline`}
                    >
                      Services
                    </p>
                  </NavLink>
                </li>
                <li className="hover:underline uppercase">
                  <NavLink to="/contact" className="flex items-baseline">
                    <MdContactMail style={{ color: "palegreen" }} />
                    <p
                      className={`${showSideBar ? "inline text-white" : "hidden"
                        } sm:inline`}
                    >
                      Contact
                    </p>
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/login" className="uppercase">
                    <p className="hover:bg-slate-600 bg-gradient-to-r from-green-300 to-slate-100 py-1 border-2 border-slate-100 rounded-md text-slate-800 text-center">
                      Login
                    </p>
                  </NavLink>
                </li> */}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
