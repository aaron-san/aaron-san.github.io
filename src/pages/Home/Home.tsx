import React, { useState } from "react";
import type { JSX } from "react";
import { motion } from "framer-motion";

import Projects from "../../components/Projects";
import OtherProjects from "../../components/OtherProjects";

const Home = (): JSX.Element => {
  return (
    <section className="mx-auto max-w-[90%] sm:max-w-[95%]">
      <div className="mt-12">
        <div className="md:flex items-center gap-4 shadow-md p-2">
          <motion.img
            src="./images/profile.png"
            alt="Profile picture of Aaron Hardy"
            className="mx-auto w-[260px]"
            initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
            animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
            transition={{ duration: 0.6 }} // Duration of animation in seconds
          />

          <div className="mx-auto my-4 max-w-[400px] text-slate-600 text-center">
            <div className="sm:block inline mx-auto w-fit">
              Hello! I'm Aaron Hardy, <span className="">CFA, CAIA</span>
              ,{" "}
            </div>
            <div className="mx-auto mt-2 border-stone-300 border-b w-fit text-sm pb-4">
              {" "}
              <b>financial analyst – data analyst – investment professional</b>
            </div>
            <ul className="mt-4 text-left tracking-wide text-sm">
              <li className="relative pl-6">
                <span className="absolute left-0 top-0 text-green-600">✓</span>
                CFA and CAIA charter holder with 4+ years of experience in
                financial modeling and risk analysis
              </li>

              <li className="relative pl-6 mt-2">
                <span className="absolute left-0 top-0 text-green-600">✓</span>
                Proven ability to lead analyst team, analyze private equity and
                loan deals, build pro forma models, and translate complex
                financial data into actionable insights for executive
                leadership.
              </li>

              <li className="relative pl-6 mt-2">
                <span className="absolute left-0 top-0 text-green-600">✓</span>
                Seeking an analyst role where analytical rigor and commercial
                judgment drive outcomes.
              </li>
            </ul>

            <div className="sm:block inline mt-4 pl-2 mx-auto">
              <div className="sm:block inline mx-auto w-fit">
                <div>I am a member of the</div>
                <div>
                <a
                  href="https://www.cfainstitute.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CFA<sup className="text-sm">®</sup>
                </a>{" "}
                Institute and {" "}<a
                  href="https://caia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CAIA
                </a> association.
                </div>
              </div>
              <div className="sm:block inline mx-auto w-fit text-sm mt-4">
                See me on{" "}
                <a
                  href="https://www.linkedin.com/in/aaron-hardy-651b2410/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 mb-8 w-[50%] text-slate-600">
          <h1 id="home-title" className="text-3xl text-center">
            Analysis Projects
          </h1>
        </div>
        <Projects />
        <div className="mx-auto mt-16 mb-8 w-[50%] text-slate-600">
          <h1 id="home-title" className="text-3xl text-center">
            Other Projects
          </h1>
        </div>
        <OtherProjects />
      </div>
    </section>
  );
};

export default Home;
