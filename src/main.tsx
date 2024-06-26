import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./NavBar";
import Offerings from "./Offerings";
import Footer from "./Footer";

import HeaderHero from "./HeaderHero";
import MainProducts from "./MainProducts";
import Blog from "./blog";

interface AppProps {
  isLightTheme: boolean;
  toggleTheme: () => void;
}

const App: React.FC = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`app ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      <NavBar isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
      <HeaderHero isLightTheme={isLightTheme} />
      <MainProducts />
      <Offerings isLightTheme={isLightTheme} />
      <Blog isLightTheme={isLightTheme} />
      <Footer isLightTheme={isLightTheme} />
    </div>
  );
};

const rootElement = document.getElementById("root") as Element;
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
