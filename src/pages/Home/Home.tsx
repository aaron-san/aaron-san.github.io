import React, { useState } from "react";
import Card from "../../components/Card";
import Search from "../../components/Search";
import VSCodeShortcuts from "../../components/VSCodeShortcuts";
import Goals from "../../components/Goals";
import Counter from "../../components/Counter";
import Modal from "../../components/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="container">
      <div>
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

export default Home;
