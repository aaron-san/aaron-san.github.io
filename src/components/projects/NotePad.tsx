import React from "react";
import { motion } from "framer-motion";

const NotePad = () => {
  return (
    <section className="flex justify-start gap-8">
      <motion.div
        whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, x: "0" }}
        transition={{ duration: 2 }}
        className="flex"
      >
        <a
          href="https://aaron-san.github.io/notepad/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/projects/notepad.png"
            alt="spelling-game"
            className="w-[50%] mx-auto sm:w-[200px] shadow-md"
          />
        </a>
      </motion.div>
      <div className="max-w-[90%] sm:max-w-[70%]">
        <a
          href="https://aaron-san.github.io/notepad/"
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="text-slate-700 hover:text-cyan-700">NotePad</h2>
        </a>
        <div className="text-slate-500">
          A note-taking app for the busy person
        </div>
        <p>
          This project utilizes vanilla JavaScript, HTML, and CSS. It's hosted
          on GitHub.{" "}
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

export default NotePad;
