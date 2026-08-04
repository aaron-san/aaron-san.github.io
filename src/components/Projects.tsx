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
    <section className="pj-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,450;0,9..144,600;1,9..144,450&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        .pj-root {
          --paper: #F5F2EA;
          --ink: #1C2430;
          --ink-soft: #5B6472;
          --ledger-line: #D8D0BC;
          --brass: #93712E;
          --brass-soft: #B79A5C;
          --teal: #2A4442;
          --frame: #C9C0A8;
          font-family: 'IBM Plex Sans', sans-serif;
          color: var(--ink);
        }

        .pj-card {
          display: block;
          background: var(--paper);
          border: 1px solid var(--ledger-line);
          border-radius: 0;
          margin: 16px 0;
          padding: 24px;
          text-decoration: none;
          color: var(--ink);
          transition: border-color 0.15s ease, background 0.15s ease;
        }
        .pj-card:hover {
          border-color: var(--brass);
          background: #F8F6F0;
        }
        .pj-card:focus-visible {
          outline: 2px solid var(--brass);
          outline-offset: 4px;
        }

        .pj-thumb-frame {
          position: relative;
          width: 400px;
          padding: 8px;
          border: 1px solid var(--frame);
          flex-shrink: 0;
        }
        .pj-thumb-frame::before,
        .pj-thumb-frame::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
        }
        .pj-thumb-frame::before { top: 4px; left: 4px; border-top: 1.5px solid var(--brass); border-left: 1.5px solid var(--brass); }
        .pj-thumb-frame::after { bottom: 4px; right: 4px; border-bottom: 1.5px solid var(--brass); border-right: 1.5px solid var(--brass); }

        .pj-title {
          font-family: 'Fraunces', serif;
          font-weight: 450;
          font-size: 19px;
          line-height: 1.25;
          margin-bottom: 6px;
        }

        .pj-subtitle {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.03em;
          color: var(--ink-soft);
          text-transform: uppercase;
        }

        .pj-descr {
          margin-top: 10px;
          font-size: 13.5px;
          color: var(--ink-soft);
          border-top: 1px dashed var(--ledger-line);
          padding-top: 10px;
        }

        .pj-tools-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brass);
          margin-bottom: 8px;
        }
      `}</style>

      {projects.map((proj) => {
        return (
          <div key={proj.id}>
            <a
              href={proj.href}
              target="_blank"
              rel="noreferrer"
              className="pj-card"
            >
              <div className="flex lg:flex-row flex-col flex-wrap lg:flex-nowrap lg:justify-center gap-2 sm:gap-8 mx-auto lg:w-fit">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mx-auto py-4"
                >
                  <div className="pj-thumb-frame">
                    <img
                      src={proj.img_src}
                      alt={proj.alt}
                      className="w-full max-w-[400px]"
                    />
                  </div>
                </motion.div>
                <div className="mx-auto lg:mx-4 sm:w-[500px]">
                  <h2 className="pj-title">{proj.title}</h2>
                  <div className="pj-subtitle">{proj.subtitle}</div>
                  <p className="hidden sm:block pj-descr">{proj.descr}</p>

                  {(proj.tools ?? []).length > 0 && (
                    <div className="mt-4">
                      <div className="pj-tools-label">Tools</div>
                      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-stone-100 p-2">
                        {(proj.tools ?? []).map((tool) => {
                          const icon = toolIcons[tool];
                          if (!icon) return null;
                          return (
                            <img
                              key={tool}
                              src={icon.src}
                              alt={icon.alt}
                              className="h-[26px] flex-shrink-0"
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}
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
