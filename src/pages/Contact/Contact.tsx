import React from "react";
import { Mail, Phone, MapPin, ArrowLeft, Link } from "lucide-react";
import {motion} from "framer-motion";

export default function ContactPage() {

  const skillGroups = [
    {
      label: "Analytical",
      items: [
        "Financial Modeling",
        "Investment Underwriting",
        "Variance Analysis",
        "Forecasting",
        "Risk Analysis",
      ],
    },
    {
      label: "Technical",
      items: ["Excel (Advanced)", "SQL", "Python", "Power BI", "Tableau"],
    },
    {
      label: "Credentials",
      items: ["CFA Charterholder", "CAIA Exams Passed"],
    },
  ];

  const ticker = [
    "CFA CHARTERHOLDER",
    "FINANCIAL MODELING",
    "SQL",
    "PYTHON",
    "POWER BI",
    "TABLEAU",
    "UNDERWRITING",
    "VARIANCE ANALYSIS",
    "EXCEL ADVANCED",
    "FORECASTING",
  ];

  return (
    <div
      style={{ background: "var(--paper)", minHeight: "100vh" }}
      className="cp-root"
    >

      <div className="cp-wrap">
        <nav className="cp-nav">
          <a href="#" className="cp-back" aria-label="Back to homepage">
            <ArrowLeft size={13} strokeWidth={2} />
            Projects
          </a>
          <span className="cp-eyebrow">Contact</span>
        </nav>

        <header className="cp-hero">
          <p className="cp-name" style={{ marginBottom: 0 }}>
            Aaron Hardy<em>, CFA, CAIA</em>
          </p>
          <p className="cp-role">
            Financial Analyst &middot; Investment Underwriter
          </p>
        </header>

        <section className="cp-grid">
          <div>
            <motion.img
            src="./images/profile.png"
            alt="Profile picture of Aaron Hardy"
            className="mx-auto w-[260px]"
            initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
            animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
            transition={{ duration: 0.6 }} // Duration of animation in seconds
          />

            <p className="cp-photo-caption">
              Aaron Hardy, CFA, CAIA &mdash; Knoxville, TN
            </p>
          </div>

          <div>
            <p className="cp-ledger-title">Contact</p>

            <a className="cp-row" href="mailto:aaronhardy6@gmail.com">
              <span className="cp-row-label">
                <Mail size={12} strokeWidth={2} /> Email
              </span>
              <span className="cp-row-fill" />
              <span className="cp-row-value">aaronhardy6@gmail.com</span>
            </a>

            <a className="cp-row" href="tel:+18652667706">
              <span className="cp-row-label">
                <Phone size={12} strokeWidth={2} /> Phone
              </span>
              <span className="cp-row-fill" />
              <span className="cp-row-value">865&#8209;266&#8209;7706</span>
            </a>

            <div className="cp-row">
              <span className="cp-row-label">
                <MapPin size={12} strokeWidth={2} /> Location
              </span>
              <span className="cp-row-fill" />
              <span className="cp-row-value">Knoxville, TN</span>
            </div>

            <a className="cp-row cp-row-placeholder" href="https://www.linkedin.com/in/aaron-hardy-cfa-caia-651b2410/" target="_blank" rel="noopener noreferrer">
              <span className="cp-row-label">LinkedIn</span>
              <span className="cp-row-fill" />
              <span className="cp-row-value">My Profile</span>
            </a>
          </div>
        </section>

        <section className="cp-skills">
          <p className="cp-ledger-title" style={{ marginBottom: 0 }}>
            Skills
          </p>
          <div className="cp-skills-grid">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="cp-skill-group-label">{group.label}</p>
                {group.items.map((item) => (
                  <div className="cp-skill-item" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="cp-ticker-wrap" aria-hidden="true">
        <div className="cp-ticker-track">
          {[...ticker, ...ticker].map((item, i) => (
            <span className="cp-ticker-item" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <footer className="cp-footer">
        <span className="cp-footer-note">
          &copy; Aaron Hardy &middot; Knoxville, TN
        </span>
        <a href="#" className="cp-footer-link">
          View project index &rarr;
        </a>
      </footer>
    </div>
  );
}
