import React from "react";
import { Link } from "react-router-dom";

function NotesPage() {
  return (
    <div className="container">
      <h2>Notes</h2>
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
    </div>
  );
}

export default NotesPage;
