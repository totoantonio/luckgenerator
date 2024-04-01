import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

import "./mycss.css";

interface HeaderHeroProps {
  isLightTheme: boolean;
}

const HeaderHero: React.FC<HeaderHeroProps> = ({ isLightTheme }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const textClass = isLightTheme ? "text-dark" : "text-white";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="container px-4 pt-2">
      <div className="row justify-content-center align-items-center">
        <div
          className={`col-lg-4 mb-2 mb-lg-0 text-center ${
            isLoaded ? "animate" : ""
          }`}
        >
          <LazyLoad height={200} once>
            <img
              src="./cultureEast.avif"
              className="img-fluid rounded-circle border border-white"
              alt="Luck Generator"
              width="300"
              height="300"
            />
          </LazyLoad>
        </div>
        <div className={`col-lg-4 ${textClass}`}>
          <p className="lead mb-4 text-center text-start p-3 lh-1">
            Discover the fascinating traits of your Chinese Zodiac animal and
            receive a set of lucky numbers tailored to your sign! <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderHero;
