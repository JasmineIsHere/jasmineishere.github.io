import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/Navigation";
import Router from "./Router";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Navigation>
        <ThemeSwitch>
          <Router />
        </ThemeSwitch>
      </Navigation>
    </ThemeProvider>
  </React.StrictMode>
);
