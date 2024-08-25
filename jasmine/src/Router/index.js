import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chill from "../components/Chill";
import PokemonCard from "../components/PokemonCard";
import Work from "../components/Work";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<Chill />} />
        <Route path="/pkCard" element={<PokemonCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
