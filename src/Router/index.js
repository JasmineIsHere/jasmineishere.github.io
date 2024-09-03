import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import PokemonCard from "../components/PokemonCard";
import Work from "../pages/Work";
import PageNotFound from "../pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/pkCard" element={<PokemonCard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
