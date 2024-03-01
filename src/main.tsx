import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar";
import Title from "./Title";
import ZodiacFinder from "./ZodiacFinder";
import Footer from "./Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <Title />
    <ZodiacFinder />
    <Footer />
  </React.StrictMode>
);
