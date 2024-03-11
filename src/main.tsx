import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./NavBar";
import Title from "./Title";
import ZodiacFinder from "./ZodiacFinder";
import Offerings from "./Offerings";
import Footer from "./Footer";
import TitleAnimation from "./TitleAnimation";

const rootElement = document.getElementById("root") as Element;
createRoot(rootElement).render(
  <React.StrictMode>
    <NavBar />
    <TitleAnimation />
    <ZodiacFinder />
    <Offerings />
    <Footer />
  </React.StrictMode>
);
