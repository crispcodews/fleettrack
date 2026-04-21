import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/* Mounts the React app into the <div id="root"> element in index.html.
creatRoot is the React 18+ API for rendering - replaces the older ReactDOM.render(). */
createRoot(document.getElementById("root")).render(
  /* StrictMode is development-only tool - has no effect in production.
  It intentionally double-invokes renders and effects to help surface
  side effects and highlight potential issues early. */
  <StrictMode>
    <App />
  </StrictMode>
);
