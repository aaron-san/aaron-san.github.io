import React from "react";
import { motion } from "framer-motion";

const SpellingGame = () => {
  return (
    <section className="flex flex-wrap justify-start gap-2 sm:gap-8">
      <motion.div
        whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, x: "0" }}
        transition={{ duration: 2 }}
        className="flex"
      >
        <a
          href="https://aaron-san.github.io/spelling-game/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./images/projects/spelling-game.png" alt="spelling-game" />
        </a>
      </motion.div>
      <div className="max-w-[90%] sm:max-w-[70%]">
        <a
          href="https://aaron-san.github.io/spelling-game/"
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="text-slate-700 hover:text-cyan-700 text-center sm:text-start">
            Spelling Game
          </h2>
        </a>
        <div className="text-slate-500 text-center sm:text-start">
          A typing game for Japanese students learning English
        </div>
        <p>
          This project incorporates vanilla JavaScript, HTML, and CSS. It's
          hosted on GitHub.{" "}
        </p>
        <div className="flex gap-4">
          <img
            src="./images/icons/javascript.png"
            alt="javascript-icon"
            className="w-[50px] h-[40px]"
          />
          <img
            src="./images/icons/html5.png"
            alt="html-icon"
            className="w-[50px] h-[40px]"
          />
          <img
            src="./images/icons/css.png"
            alt="css-icon"
            className="w-[50px] h-[40px]"
          />
        </div>
      </div>
    </section>
  );
};

export default SpellingGame;
