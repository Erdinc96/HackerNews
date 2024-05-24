import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import Pages from "./components/Pages.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Pages />
  </React.StrictMode>
);
