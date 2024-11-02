import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Work from "../pages/Work";
import PageNotFound from "../pages/PageNotFound";
import PokemonProject from "../pages/PokemonProject";
import ShiggyProject from "../pages/ShiggyProject";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/pkCard" element={<PokemonProject />} />
        <Route path="/projects/shiggy" element={<ShiggyProject />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
