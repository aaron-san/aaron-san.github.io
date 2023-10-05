import React from "react";
import { motion } from "framer-motion";

interface IProjects {
  id: number;
  title: string;
  subtitle: string;
  alt: string;
  descr: string;
  href: string;
  img_src: string;
}
const projects: IProjects[] = [
  {
    id: 1,
    title: "Spelling Game",
    subtitle: "A typing game for Japanese students learning English",
    alt: "spelling-game",
    descr:
      "This project incorporates vanilla JavaScript, HTML, and CSS. It's hosted on GitHub.",
    href: "https://aaron-san.github.io/spelling-game/",
    img_src: "./images/projects/spelling-game.png",
  },
  {
    id: 2,
    title: "Recipe App",
    subtitle: "A recipe app with CRUD functionality.",
    alt: "recipe-app",
    descr:
      "This project utilizes vanilla JavaScript, HTML, and CSS. It's hosted on Netlify.",
    href: "https://recipe-react-app-ad1cc.web.app/",
    img_src: "./images/projects/recipe-app.png",
  },
  {
    id: 3,
    title: "Notepad",
    subtitle: "A note-taking app for the busy person",
    alt: "notepad",
    descr:
      "This project utilizes vanilla JavaScript, HTML, and CSS. It's hosted on GitHub.",
    href: "https://aaron-san.github.io/notepad/",
    img_src: "./images/projects/notepad.png",
  },
  {
    id: 4,
    title: "CFA Notes",
    subtitle:
      "A collection of financial information related to current and past CFA curriculum",
    alt: "cfa-notes",
    descr:
      "This project utilizes Node, Express and EJS. It's hosted on GitHub and deployed with Heroku.",
    href: "https://cfa-notes-587b0c5e83c0.herokuapp.com/",
    img_src: "./images/projects/cfa-notes.png",
  },
];

const Project = () => {
  return (
    <section>
      {projects.map((proj) => {
        return (
          <div
            key={proj.id}
            className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-8"
          >
            <motion.div
              whileInView={{ opacity: 1 }}
              // viewport={{ once: true }}
              initial={{ opacity: 0, x: "-30%" }}
              animate={{ opacity: 1, x: "0" }}
              transition={{ duration: 3 }}
              className="flex"
            >
              <a href={proj.href} target="_blank" rel="noreferrer">
                <img
                  src={proj.img_src}
                  alt={proj.alt}
                  className="w-[200px] shadow-sm"
                />
              </a>
            </motion.div>
            <div className="max-w-[90%] sm:max-w-[70%]">
              <a href={proj.href} target="_blank" rel="noreferrer">
                <h2 className="text-slate-700 hover:text-cyan-700 text-center sm:text-start mb-1">
                  {proj.title}
                </h2>
              </a>
              <div className="text-slate-500 text-center sm:text-start">
                {proj.subtitle}
              </div>
              <p className="hidden sm:block mb-3">{proj.descr}</p>
              <div className="flex gap-4 justify-center sm:justify-start mb-20">
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
          </div>
        );
      })}
    </section>
  );
};

export default Project;