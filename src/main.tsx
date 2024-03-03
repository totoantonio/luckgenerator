import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Title from "./Title";
import ZodiacFinder from "./ZodiacFinder";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Title />
    <ZodiacFinder />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
