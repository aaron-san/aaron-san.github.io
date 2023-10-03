import React from "react";
import { Link } from "react-router-dom";

function NotesPage() {
  return (
    <section className="max-w-4xl mx-auto shadow-md p-6">
      <h2>Notes</h2>
      <div className="text-xl">
        <Link to="/notes/winter-2023-trip">Winter 2023 Notes</Link>
      </div>
      <div className="text-xl">
        <Link to="/notes/misc-notes">Miscellaneous Notes</Link>
      </div>

      <div className="text-xl">
        <Link to="/notes/moving-notes">Moving Notes</Link>
      </div>
      <div className="text-xl">
        <Link to="/notes/investing-notes">Investing Notes</Link>
      </div>
      <div className="text-xl">
        <Link to="/notes/immigration-notes">Immigration Notes</Link>
      </div>
      <div className="text-xl">
        <Link to="/notes/react-notes">React Notes</Link>
      </div>
    </section>
  );
}

export default NotesPage;
