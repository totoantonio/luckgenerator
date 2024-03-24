import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./NavBar";
import Offerings from "./Offerings";
import Footer from "./Footer";

import HeaderHero from "./HeaderHero";
import MainProducts from "./MainProducts";

const rootElement = document.getElementById("root") as Element;
createRoot(rootElement).render(
  <React.StrictMode>
    <HeaderHero />
    <MainProducts />
    <Offerings />
    <Footer />
  </React.StrictMode>
);
