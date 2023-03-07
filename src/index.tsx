import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./fonts/PoorStory/PoorStory-Regular.ttf";
import "./fonts/Permanent_Marker/PermanentMarker-Regular.ttf";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
