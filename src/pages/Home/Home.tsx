import React from "react";
import type { JSX } from "react";
import { motion } from "framer-motion";

import Projects from "../../components/Projects";
import OtherProjects from "../../components/OtherProjects";

const Home = (): JSX.Element => {
  return (
    <section className="hp-root mx-auto max-w-[90%] sm:max-w-[95%]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,450;0,9..144,600;1,9..144,450&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        .hp-root {
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

        .hp-photo-frame {
          position: relative;
          width: 260px;
          margin: 0 auto;
          border: 1px solid var(--frame);
          padding: 10px;
        }
        .hp-photo-frame::before,
        .hp-photo-frame::after {
          content: "";
          position: absolute;
          width: 14px;
          height: 14px;
        }
        .hp-photo-frame::before { top: 6px; left: 6px; border-top: 1.5px solid var(--brass); border-left: 1.5px solid var(--brass); }
        .hp-photo-frame::after { bottom: 6px; right: 6px; border-bottom: 1.5px solid var(--brass); border-right: 1.5px solid var(--brass); }

        .hp-name {
          font-family: 'Fraunces', serif;
          font-weight: 250;
          font-size: clamp(24px, 3vw, 30px);
          line-height: 1.2;
        }
        .hp-name em {
          font-style: italic;
          font-weight: 250;
          color: var(--brass);
        }

        .hp-role {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ink-soft);
          border-bottom: 1px dashed var(--ledger-line);
          padding-bottom: 14px;
          display: inline-block;
        }

        .hp-ledger-item {
          position: relative;
          padding-left: 22px;
        }
        .hp-ledger-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 6px;
          width: 6px;
          height: 6px;
          background: var(--brass-soft);
        }

        .hp-mono-link {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--brass);
          text-decoration: none;
        }
        .hp-mono-link:hover { text-decoration: underline; }

        .hp-section-header {
          text-align: center;
        }
        .hp-eyebrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--brass);
        }
        .hp-section-title {
          font-family: 'Fraunces', serif;
          font-weight: 450;
          font-size: 28px;
          margin-top: 4px;
        }
        .hp-section-rule {
          width: 64px;
          height: 1px;
          background: var(--teal);
          margin: 14px auto 0;
        }
      `}</style>

      <div className="mt-12">
        <div className="md:flex items-center gap-4 shadow-md p-2" style={{ background: "var(--paper)" }}>
          <motion.div
            className="hp-photo-frame"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="./images/profile.png"
              alt="Profile picture of Aaron Hardy"
              className="w-full"
            />
          </motion.div>

          <div className="mx-auto my-4 max-w-[400px] text-center">
            <div className="sm:block inline mx-auto w-fit hp-name mb-2 text-[1.2rem]">
              Hello!
            </div>
            <div className="sm:block inline mx-auto w-fit hp-name">
              I'm Aaron Hardy, <em className="text-[1.3rem]">CFA, CAIA</em>.
            </div>
            <div className="mx-auto mt-2 w-fit">
              <span className="hp-role">
                Financial Analyst &middot; Data Analyst &middot; Investment Professional
              </span>
            </div>

            <ul className="mt-4 text-left tracking-wide text-sm space-y-2">
              <li className="hp-ledger-item">
                CFA and CAIA charter holder with 4+ years of experience in
                financial modeling and risk analysis
              </li>
              <li className="hp-ledger-item">
                Proven ability to lead analyst team, analyze private equity and
                loan deals, build pro forma models, and translate complex
                financial data into actionable insights for executive
                leadership.
              </li>
              <li className="hp-ledger-item">
                Seeking an analyst role where analytical rigor and commercial
                judgment drive outcomes.
              </li>
            </ul>

            <div className="sm:block inline mt-6 pl-2 mx-auto">
              <div className="sm:block inline mx-auto w-fit text-sm text-slate-600">
                <div>I am a member of the</div>
                <div>
                  <a
                    href="https://www.cfainstitute.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-mono-link"
                  >
                    CFA<sup className="text-xs">&reg;</sup>
                  </a>{" "}
                  Institute and{" "}
                  <a
                    href="https://caia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-mono-link"
                  >
                    CAIA
                  </a>{" "}
                  Association.
                </div>
              </div>
              <div className="sm:block inline mx-auto w-fit text-sm mt-4">
                See me on{" "}
                <a
                  href="https://www.linkedin.com/in/aaron-hardy-cfa-caia-651b2410/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hp-mono-link"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 mb-8 w-fit hp-section-header">
          <p className="hp-eyebrow">Portfolio &mdash; 01</p>
          <h1 id="home-title" className="hp-section-title">
            Analysis Projects
          </h1>
          <div className="hp-section-rule" />
        </div>
        <Projects />

        <div className="mx-auto mt-16 mb-8 w-fit hp-section-header">
          <p className="hp-eyebrow">Portfolio &mdash; 02</p>
          <h1 id="home-title" className="hp-section-title">
            Other Projects
          </h1>
          <div className="hp-section-rule" />
        </div>
        <OtherProjects />
      </div>
    </section>
  );
};

export default Home;
