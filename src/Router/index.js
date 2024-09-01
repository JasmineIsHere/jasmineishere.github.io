import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import PokemonCard from "../components/PokemonCard";
import Work from "../components/Work";
import PageNotFound from "../components/PageNotFound";

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
