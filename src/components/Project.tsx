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
const projectList = [
  {
    title: "Investor Dashboard",
    subtitle: "A dashboard for investors to track their portfolio and news.",
    alt: "investor-dashboard",
    descr: "This project is a Next website that utilizes Tailwind CSS.",
    href: "https://investor-dashboard-lilac.vercel.app/",
    img_src: "./images/projects/investor-dashboard.png",
  },
  {
    title: "CFA Notes",
    subtitle:
      "A collection of financial information related to current and past CFA curriculum",
    alt: "cfa-notes",
    descr:
      "This project is a static Next js website that utilizes Tailwind CSS.",
    href: "https://aaron-san.github.io/cfa-notes",
    img_src: "./images/projects/cfa-notes.png",
  },
  {
    title: "Word App",
    subtitle: "An app to search to search for words and their definitions",
    alt: "Word App",
    descr:
      "This project utilizes Typescript, React and Vite. It's hosted on Github Pages.",
    href: "https://aaron-san.github.io/word-app/",
    img_src: "./images/projects/word-app.png",
  },
  {
    title: "My Blog",
    subtitle: "A blog of Aaron's family adventures",
    alt: "Aaron's blog",
    descr: "This project utilizes Next JS. It's hosted on Netlify.",
    href: "https://chic-kelpie-0af57a.netlify.app/",
    img_src: "./images/projects/my-blog.png",
  },
  {
    title: "Spelling Game",
    subtitle: "A typing game for Japanese students learning English",
    alt: "spelling-game",
    descr:
      "This project incorporates vanilla JavaScript, HTML, and CSS. It's hosted on GitHub.",
    href: "https://aaron-san.github.io/spelling-game/",
    img_src: "./images/projects/spelling-game.png",
  },
  {
    title: "Recipe App",
    subtitle: "A recipe app with CRUD functionality.",
    alt: "recipe-app",
    descr:
      "This project utilizes vanilla JavaScript, HTML, and CSS. It's hosted on Netlify.",
    href: "https://recipe-react-app-ad1cc.web.app/",
    img_src: "./images/projects/recipe-app.png",
  },
  {
    title: "Notepad",
    subtitle: "A note-taking app for the busy person",
    alt: "notepad",
    descr:
      "This project utilizes vanilla JavaScript, HTML, and CSS. It's hosted on GitHub.",
    href: "https://aaron-san.github.io/notepad/",
    img_src: "./images/projects/notepad.png",
  },

  {
    title: "Red News",
    subtitle: "A collection of daily news from select sources.",
    alt: "red-news",
    descr: "This project utilizes Next js. It's hosted on Vercel.",
    href: "https://red-news.vercel.app/",
    img_src: "./images/projects/red-news.png",
  },
  {
    title: "React Notes",
    subtitle: "A collection of notes about React JS.",
    alt: "react-notes",
    descr: "This project utilizes React js. It's hosted on GitHub Pages.",
    href: "https://aaron-san.github.io/react-notes/",
    img_src: "./images/projects/react-notes.png",
  },
  {
    title: "Dice Roller",
    subtitle: "A dice rolling app for games and just pure fun.",
    alt: "dice-roller",
    descr:
      "This project utilizes vanilla JavaScript. It's hosted on GitHub Pages.",
    href: "https://aaron-san.github.io/dice/",
    img_src: "./images/projects/dice-roller.png",
  },
];

const projects: IProjects[] = projectList.map((proj, index) => {
  return {
    id: index,
    title: proj.title,
    subtitle: proj.subtitle,
    alt: proj.alt,
    descr: proj.descr,
    href: proj.href,
    img_src: proj.img_src,
  };
});

const Project = () => {
  return (
    <section>
      {projects.map((proj) => {
        return (
          <>
            <div
              key={proj.id}
              className="flex lg:flex-row flex-col flex-wrap lg:flex-nowrap lg:justify-center gap-2 sm:gap-8 mx-auto mb-16 lg:w-fit"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                //   initial={{ opacity: 0, x: "-30%" }}
                //   animate={{ opacity: 1, x: "0" }}
                //   transition={{ duration: 3 }}
                className="mx-auto py-4 text-center"
              >
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img
                    src={proj.img_src}
                    alt={proj.alt}
                    className="shadow-lg max-w-[200px]"
                  />
                </a>
              </motion.div>
              <div className="mx-auto lg:mx-4 sm:w-[500px] text-center">
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center"
                >
                  <h2 className="mb-1 text-slate-700 hover:text-cyan-700 text-center">
                    {proj.title}
                  </h2>
                </a>
                <div className="text-slate-500 text-center">
                  {proj.subtitle}
                </div>
                <p className="hidden sm:block mb-3">{proj.descr}</p>
                <div className="flex justify-center sm:justify-center gap-4 mb-8">
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
            <div className="bg-gradient-to-r from-transparent via-slate-400 to-transparent lg:mb-12 w-[100%] h-[1px]"></div>
          </>
        );
      })}
    </section>
  );
};

export default Project;
