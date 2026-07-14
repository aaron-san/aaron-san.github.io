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
  tools?: string[];
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
    title: "Buy or Rent Dashboard",
    subtitle:
      "Dashboard showing home prices relative to rental rates across U.S.",
    alt: "price-to-rent-dashboard",
    descr: "This project utilized Tableau for plotting.",
    href: "https://public.tableau.com/app/profile/aaron.hardy2837/viz/Price-RentDashboard/Price-RentDashboard",
    img_src: "./images/projects/price-rent-dashboard.png",
    tools: ["tableau"],
  },
  {
    title: "Fundamentals Database with SimFin Data and MySQL",
    subtitle:
      "A database for storing and analyzing fundamental financial data.",
    alt: "fundamentals-db",
    descr: "This project utilized SQL for ETL processes.",
    href: "https://aaron-san.github.io/fundamentals-db-simfin-mysql/",
    img_src: "./images/projects/fundamentals-db-simfin-mysql.png",
    tools: ["mysql"],
  },
  {
    title: "Apartment Analysis",
    subtitle: "Analysis of Fictitious apartment in Knoxville, TN",
    alt: "ancient-heights-apartments",
    descr:
      "This project utilized Python Pandas and Matplotlib libraries for data analysis and plotting.",
    href: "https://aaron-san.github.io/ancient-heights/",
    img_src: "./images/projects/ancient-heights.png",
    tools: ["python", "pandas"],
  },
  {
    title: "Rental Rate Growth Analyis",
    subtitle: "This project analyzed Zillow's ZORI rental-rate data series.",
    alt: "rental-rate-growth-analysis",
    descr:
      "This project utilized Python Pandas and Matplotlib libraries for data analysis and plotting.",
    href: "https://aaron-san.github.io/Rental-Rate-Growth-Analysis/",
    img_src: "./images/projects/rental-rate-growth-analysis-project.png",
    tools: ["python", "pandas"],
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
    tools: ["next", "html", "css", "javascript", "tailwind"],
  },
  {
    title: "Fincoder Blog",
    subtitle: "A collection of financial articles",
    alt: "fincoder-blog",
    descr:
      "This project is a static Next js website that utilizes Tailwind CSS.",
    href: "https://aaron-san.github.io/fincoder-blog/",
    img_src: "./images/projects/fincoder-blog.png",
    tools: ["next", "html", "css", "javascript", "tailwind"],
  },
];

const toolIcons: Record<string, { src: string; alt: string }> = {
  javascript: { src: "./images/icons/javascript.png", alt: "JavaScript" },
  html: { src: "./images/icons/html5.png", alt: "HTML5" },
  css: { src: "./images/icons/css.png", alt: "CSS" },
  python: { src: "./images/icons/python.png", alt: "Python" },
  pandas: { src: "./images/icons/pandas.png", alt: "Pandas" },
  tableau: { src: "./images/icons/tableau.png", alt: "Tableau" },
  next: { src: "./images/icons/nextjs.png", alt: "Next.js" },
  tailwind: { src: "./images/icons/tailwind.png", alt: "Tailwind CSS" },
  mysql: { src: "./images/icons/mysql.png", alt: "MySQL" },
};

const projects: IProjects[] = projectList.map((proj, index) => ({
  id: index,
  ...proj,
}));

const Project = () => {
  return (
    <section>
      {projects.map((proj) => {
        return (
          <div key={proj.id}>
            <a
              href={proj.href}
              target="_blank"
              rel="noreferrer"
              className="block bg-stone-100 shadow-lg my-4 p-6 shadow-md hover:shadow-cyan-200 rounded text-stone-800"
            >
              <div className="flex lg:flex-row flex-col flex-wrap lg:flex-nowrap lg:justify-center gap-2 sm:gap-8 mx-auto lg:w-fit">
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
                  <h2 className="mb-1 text-stone-800">{proj.title}</h2>

                  <div className="text-slate-500">{proj.subtitle}</div>
                  <p className="hidden sm:block mb-3 text-sm">{proj.descr}</p>
                  <div className="flex gap-4 mb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-stone-100 p-2">
                    {(proj.tools ?? []).map((tool) => {
                      const icon = toolIcons[tool];
                      if (!icon) return null;
                      return (
                        <img
                          key={tool}
                          src={icon.src}
                          alt={icon.alt}
                          className="h-[30px] flex-shrink-0"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Project;
