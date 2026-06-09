import React from "react";
import { motion } from "framer-motion";

interface IProjects
{
  id: number;
  title: string;
  subtitle: string;
  alt: string;
  descr: string;
  href: string;
  img_src: string;
}
const projectList = [
  // {
  //   title: "Investor Dashboard",
  //   subtitle: "A dashboard for investors to track their portfolio and news.",
  //   alt: "investor-dashboard",
  //   descr: "This project is a Next website that utilizes Tailwind CSS.",
  //   href: "https://investor-dashboard-lilac.vercel.app/",
  //   img_src: "./images/projects/investor-dashboard.png",
  // },
  {
    title: "Rental Rate Growth Analyis",
    subtitle:
      "This project analyzed Zillow's ZORI rental-rate data series.",
    alt: "rental-rate-growth-analysis",
    descr:
      "This project utilized Python Pandas and Matplotlib libraries for data analysis and plotting.",
    href: "https://aaron-san.github.io/Rental-Rate-Growth-Analysis/",
    img_src: "./images/projects/rental-rate-growth-analysis-project.png",
  },
  {
    title: "Free Analyst Notes",
    subtitle:
      "A collection of financial information related to CFA, CAIA, and more",
    alt: "free-analyst-notes",
    descr:
      "This project is a static Next js website that utilizes Tailwind CSS.",
    href: "https://aaron-san.github.io/cfa-notes/",
    // href: "https://free-analyst-notes.netlify.app",
    img_src: "./images/projects/cfa-notes.png",
  },
  {
    title: "Fincoder Blog",
    subtitle:
      "A collection of financial articles",
    alt: "fincoder-blog",
    descr:
      "This project is a static Next js website that utilizes Tailwind CSS.",
    href: "https://aaron-san.github.io/fincoder-blog/",
    
    img_src: "./images/projects/fincoder-blog.png",
  },
];

const projects: IProjects[] = projectList.map((proj, index) => (
  {

    id: index,
    ...proj

  }));

const Project = () =>
{
  return (
    <section>
      {projects.map((proj) =>
      {
        return (
          <div
            key={proj.id}>
            <a
              href={proj.href}
              target="_blank"
              rel="noreferrer"
              className="block bg-stone-100 shadow-lg my-4 p-6 border-2 border-stone-300 hover:border-1 hover:border-cyan-100 rounded text-stone-800"
            >
              <div
                className="flex lg:flex-row flex-col flex-wrap lg:flex-nowrap lg:justify-center gap-2 sm:gap-8 mx-auto lg:w-fit"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  //   initial={{ opacity: 0, x: "-30%" }}
                  //   animate={{ opacity: 1, x: "0" }}
                  //   transition={{ duration: 3 }}
                  className="mx-auto py-4"
                >

                  <img
                    src={proj.img_src}
                    alt={proj.alt}
                    className="shadow-xl border-2 border-stone-50 rounded max-w-[200px]"
                  />

                </motion.div>
                <div className="mx-auto lg:mx-4 sm:w-[500px]">

                  <h2 className="mb-1 text-stone-800">
                    {proj.title}
                  </h2>

                  <div className="text-slate-500">
                    {proj.subtitle}
                  </div>
                  <p className="hidden sm:block mb-3 text-sm">{proj.descr}</p>
                  <div className="flex justify-center sm:justify-center gap-4 mb-4">
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

            </a>
          </div>
        );
      })}
    </section >
  );
};

export default Project;
