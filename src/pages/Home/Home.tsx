import React, { useState } from "react";

import Search from "../../components/Search";
import Counter from "../../components/Counter";
import Modal from "../../components/Modal";
// import { motion } from "framer-motion";
import Project from "../../components/Project";
// import SpellingGame from "../../components/projects/SpellingGame";
// import NotePad from "../../components/projects/NotePad";
// import RecipeApp from "../../components/projects/RecipeApp";
// import SpellingGame from "./  /spelling-game.png";

// import "../../index.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="max-w-[90%] sm:max-w-4xl mx-auto">
      <div>
        <h1>My Projects</h1>

        <Project />
        {/* <SpellingGame /> */}
        <hr />
        {/* <NotePad /> */}
        {/* <hr /> */}
        {/* <RecipeApp /> */}

        {/* <hr /> */}

        <h2>GitHub Pages Hosted</h2>
        <ul className="flex flex-wrap min-w-2xl gap-2">
          <li className="list-none">
            {custLink(
              "https://aaron-san.github.io/react-notes/",
              "React Notes"
            )}
          </li>

          <li className="list-none">
            {custLink("https://aaron-san.github.io/dice/", "Dice Roller")}
          </li>
        </ul>
        <h2>Netlify Hosting</h2>

        <ul className="flex flex-wrap min-w-2xl gap-2">
          <li className="list-none">
            {custLink(
              "https://gracious-lovelace-b77c36.netlify.app/",
              "Notepad (model only, Netlify hosted)"
            )}
          </li>
          <li className="list-none">
            {custLink(
              "https://fincoder-blog.netlify.app/",
              "FinCoder Blog (Latex not working, Netlify hosted)"
            )}
          </li>
        </ul>
        <h2>Other Hosting</h2>

        <ul className="flex flex-wrap min-w-2xl gap-2 list-none">
          <li>
            {custLink(
              "https://aaron-san-stock-dashboard-main-i9lvpp.streamlit.app/",
              "Streamlit Stock Dashboard"
            )}
          </li>
          <li>
            {custLink("https://recipe-react-app-ad1cc.web.app/", "Recipe App")}
          </li>
          <li>
            {custLink(
              "https://red-news.vercel.app/",
              "Red News (Vercel hosting)"
            )}
          </li>
        </ul>

        <hr />
        <div
          className="button_wrapper_styles"
          onClick={() => console.log("clicked")}
        >
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
          </Modal>
        </div>
        <Search />
        <Counter />
      </div>
    </section>
  );
};

const custLink = (url: string, name: string) => {
  return (
    <a
      className="app-link border border-white text-white bg-gradient-to-r from-teal-500 to-teal-400 hover:bg-blue active:translate-y-6 px-4 py-2 rounded-md shadow-md"
      target="_blank"
      rel="noreferrer"
      href={url}
    >
      {name}
    </a>
  );
};

export default Home;
