import React, { useState } from "react";
import type { JSX } from "react";
import { motion } from "framer-motion"

import Projects from "../../components/Projects";
import OtherProjects from "../../components/OtherProjects";


const Home = (): JSX.Element =>
{
  return (
    <section className="mx-auto max-w-[90%] sm:max-w-[95%]">
      <div className="mt-12">
        <div className="md:flex items-center gap-4 shadow-md p-2">
          <motion.img
            src="./images/profile.png"
            alt="Profile picture of Aaron Hardy"
            className="mx-auto w-[260px]"
            initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
            animate={{ opacity: 1, y: 0 }}  // Animate to visible and in place
            transition={{ duration: 0.6 }}  // Duration of animation in seconds
          />

          <div className="mx-auto my-4 max-w-[400px] text-slate-600 text-center">
            <div className="sm:block inline mx-auto w-fit">
              Hello! I'm Aaron Hardy, <span className="italic">CFA</span>, </div>
            <div className="mx-auto mt-2 border-stone-300 border-b w-fit text-lg italic"> <b>financial analyst</b> and <b>web developer</b>
            </div>
            <div

              className="sm:block inline mt-4 w-fit">
              <div className="inline mr-1">
                I specialize in
              </div>


              <a
                href="https://aaron-san.github.io/cfa-notes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline text-600 italic">financial analysis</a><span className="pr-1">,</span>
                <span className="italic">accounting</span> and
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline ml-1 w-fit bold italic"
              >
                React
              </a>.

              <div className="sm:block inline mx-auto w-fit">
                <span>
                  I have experience in finance and have passed all</span> <a
                    href="https://www.cfainstitute.org"
                    target="_blank"
                    rel="noopener noreferrer"

                  > CFA® exams</a> and <a href="https://caia.org"

                    target="_blank"
                    rel="noopener noreferrer"
                  >CAIA exams
                </a>.
              </div>
              <div className="sm:block inline mx-auto w-fit">
                Contact me on <a href="https://www.linkedin.com/in/aaron-hardy-651b2410/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
