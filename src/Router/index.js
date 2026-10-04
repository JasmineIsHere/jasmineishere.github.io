import TgifProject from "../pages/TgifProject";
import React, { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "../pages/About";
import Work from "../pages/Work";
import Sky from "../pages/Sky";
import PageContainer from "../components/PageContainer";
import PageNotFound from "../pages/PageNotFound";
import PokemonProject from "../pages/PokemonProject";
import ShiggyProject from "../pages/ShiggyProject";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Router = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Sky />} />
        <Route
          path="/work"
          element={
            <PageContainer>
              <Work />
            </PageContainer>
          }
        />
        <Route
          path="/about"
          element={
            <PageContainer>
              <About />
            </PageContainer>
          }
        />
        <Route
          path="/projects/pkCard"
          element={
            <PageContainer>
              <PokemonProject />
            </PageContainer>
          }
        />
        <Route
          path="/projects/shiggy"
          element={
            <PageContainer>
              <ShiggyProject />
            </PageContainer>
          }
        />
        <Route
          path="/projects/tgif-screensaver"
          element={
            <PageContainer>
              <TgifProject />
            </PageContainer>
          }
        />
        <Route
          path="/*"
          element={
            <PageContainer>
              <PageNotFound />
            </PageContainer>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default Router;
