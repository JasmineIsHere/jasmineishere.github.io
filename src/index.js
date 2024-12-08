import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { ThemeProvider } from "./contexts/ThemeContext";
import PageContainer from "./components/PageContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <PageContainer>
        <Router />
      </PageContainer>
    </ThemeProvider>
  </React.StrictMode>
);
