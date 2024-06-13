import ReactDOM from "react-dom/client";
import React from "react";
import { MantineProvider } from "@mantine/core";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@mantine/core/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Nunito Sans, sans-serif",
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
);

reportWebVitals();
