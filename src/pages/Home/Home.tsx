import React, { useState } from "react";
import Card from "../../components/Card";
import Search from "../../components/Search";
import VSCodeShortcuts from "../../components/VSCodeShortcuts";
import Goals from "../../components/Goals";
import Counter from "../../components/Counter";
import Modal from "../../components/Modal";
// import "../../index.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="container">
      <div>
        <h1>My Sites</h1>
        <h2>GitHub Pages Hosting</h2>
        <ul className="link-container">
          <li>
            {custLink(
              "https://aaron-san.github.io/spelling-game/",
              "Spelling Game"
            )}
          </li>
          <li>
            {custLink(
              "https://aaron-san.github.io/react-notes/",
              "React Notes"
            )}
          </li>
          <li>{custLink("https://aaron-san.github.io/notepad/", "Notepad")}</li>

          <li>
            {custLink("https://aaron-san.github.io/dice/", "Dice Roller")}
          </li>
        </ul>
        <h2>Netlify Hosting</h2>

        <ul className="link-container">
          <li>
            {custLink("https://recipe-react-app-ad1cc.web.app/", "Recipe App")}
          </li>
          <li>
            {custLink(
              "https://gracious-lovelace-b77c36.netlify.app/",
              "Notepad (model only, Netlify hosted)"
            )}
          </li>
          <li>
            {custLink(
              "https://fincoder-blog.netlify.app/",
              "FinCoder Blog (Latex not working, Netlify hosted)"
            )}
          </li>
        </ul>
        <h2>Other Hosting</h2>

        <ul className="link-container">
          <li>
            {custLink("https://recipe-react-app-ad1cc.web.app/", "Recipe App")}
          </li>
          <li>
            {custLink(
              "https://red-news.vercel.app/",
              "Red News (Vercel hosting)"
            )}
          </li>
        </ul>

        <hr />
        <div
          className="button_wrapper_styles"
          onClick={() => console.log("clicked")}
        >
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
          </Modal>
        </div>
        <Card />
        <Search />
        <VSCodeShortcuts />
        <Goals />
        <Counter />
      </div>
    </div>
  );
};

const custLink = (url: string, name: string) => {
  return (
    <a className="app-link" target="_blank" rel="noreferrer" href={url}>
      {name}
    </a>
  );
};

export default Home;
