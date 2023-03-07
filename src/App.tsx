import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import MiscNotes from "./components/MiscNotes";
import RoadToReactNotes from "./components/RoadToReactNotes";
import Notes from "./components/Notes";
import MovingNotes from "./components/MovingNotes/MovingNotes";
import Login from "./pages/Login";
import InvestingNotes from "./components/InvestingNotes";
import ImmigrationNotes from "./components/ImmigrationNotes/ImmigrationNotes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/misc-notes" element={<MiscNotes />} />
        <Route path="/notes/moving-notes" element={<MovingNotes />} />
        <Route path="/notes/immigration-notes" element={<ImmigrationNotes />} />
        <Route
          path="/notes/road-to-react-notes"
          element={<RoadToReactNotes />}
        />
        <Route path="/notes/investing-notes" element={<InvestingNotes />} />
      </Routes>
    </Router>
  );
}

export default App;
