import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import PokemonCard from "../components/PokemonCard";
import Work from "../components/Work";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/pkCard" element={<PokemonCard />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
