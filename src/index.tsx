import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@mantine/core/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();