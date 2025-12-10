  import React from "react";
  import { HashRouter as Router, Route, Routes } from "react-router-dom";
  import Layout from "./layouts/Layout";
  // components
  import Home from "./pages/Home/Home";
  import Services from "./pages/Services/Services";
  import About from "./pages/About/About";
  import Contact from "./pages/Contact/Contact";
  import MiscNotes from "./components/MiscNotes";
  import Notes from "./components/Notes";
  import MovingNotes from "./components/MovingNotes/MovingNotes";
  import Login from "./pages/Login";
  import InvestingNotes from "./components/InvestingNotes";
  import ImmigrationNotes from "./components/ImmigrationNotes";
  import ReactNotes from "./components/ReactNotes";
  import Winter2023Trip from "./components/Winter2023Trip";

  function App() {
    return (
      <Router>
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/misc-notes" element={<MiscNotes />} />
          <Route path="/notes/moving-notes" element={<MovingNotes />} />
          <Route path="/notes/immigration-notes" element={<ImmigrationNotes />} />
          <Route path="/notes/react-notes" element={<ReactNotes />} />
          <Route path="/notes/winter-2023-trip" element={<Winter2023Trip />} />

          <Route path="/notes/investing-notes" element={<InvestingNotes />} />
          </Route>
        </Routes>
      </Router>
    );
  }

  export default App;
