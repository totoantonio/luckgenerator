import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./NavBar";
import Title from "./Title";
import ZodiacFinder from "./ZodiacFinder";
import Footer from "./Footer";

const rootElement = document.getElementById("root") as Element;
createRoot(rootElement).render(
  <React.StrictMode>
    <NavBar />
    <Title />
    <ZodiacFinder />
    <Footer />
  </React.StrictMode>
);
