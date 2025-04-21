import React, { useState } from "react";

// import Search from "../../components/Search";
// import Counter from "../../components/Counter";
// import Modal from "../../components/Modal";
// import { motion } from "framer-motion";
import Project from "../../components/Project";
// import SpellingGame from "../../components/projects/SpellingGame";
// import NotePad from "../../components/projects/NotePad";
// import RecipeApp from "../../components/projects/RecipeApp";
// import SpellingGame from "./  /spelling-game.png";

// import "../../index.css";

const Home = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="max-w-[90%] sm:max-w-[95%] mx-auto">
      <div className="mt-16">
        <img
          src="./images/profile.png"
          alt="profile picture of Aaron Hardy"
          className="w-[260px] mx-auto"
        />

        <div className="max-w-[600px] text-slate-600 mx-auto my-4 text-center">
          <div className="mx-auto w-fit inline sm:block">
            Hello! I'm Aaron Hardy, a <b>front-end developer</b>.
          </div>
          <div className="mx-auto w-fit inline sm:block">
            I specialize in React and TypeScript and use Tailwind in my
            projects.
            <div className="mx-auto w-fit inline sm:block">
              I have experience in finance and have passed all CFA Exams.
            </div>
            <div className="mx-auto w-fit inline sm:block">
              I enjoy making apps and analyzing data.
            </div>
          </div>
        </div>

        <div className="w-[50%] mx-auto text-slate-600 mb-16 mt-20">
          <h1 id="home-title" className="text-3xl text-center">
            My Projects
          </h1>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
        </div>

        <Project />
        {/* <SpellingGame /> */}
        <hr />
        {/* <NotePad /> */}
        {/* <hr /> */}
        {/* <RecipeApp /> */}

        {/* <hr /> */}

        {/* <ul className="flex flex-wrap gap-2 min-w-2xl">
          <li className="list-none">
            {custLink(
              "https://gracious-lovelace-b77c36.netlify.app/",
              "Notepad (model only, Netlify hosted)"
            )}
          </li>
        </ul>
        <h2>Other Hosting</h2>

        <ul className="flex flex-wrap gap-2 list-none min-w-2xl">
          <li>
            {custLink(
              "https://aaron-san-stock-dashboard-main-i9lvpp.streamlit.app/",
              "Streamlit Stock Dashboard"
            )}
          </li>
        </ul> */}

        {/* <hr />
        <div
          className="button_wrapper_styles"
          onClick={() => console.log("clicked")}
        >
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
          </Modal>
        </div>
        <Search /> */}
        {/* <Counter /> */}
      </div>
    </section>
  );
};

export default Home;
