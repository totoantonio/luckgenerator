import React from "react";
import LazyLoad from "react-lazyload";
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderHero = () => {
  return (
    <div className="container px-4 pt-5">
      <div className="row justify-content-center align-items-center">
        {/* Image */}
        <div className="col-lg-4 mb-2 mb-lg-0">
          <LazyLoad height={200} once>
            <img
              src="./tiger.svg"
              className="d-block mx-auto mb-4"
              alt="Luck Generator"
            />
          </LazyLoad>
        </div>
        {/* Title and Text */}
        <div className="col-lg-4">
          <p className="lead mb-4 text-center text-start p-3 lh-1 ">
            Discover the fascinating traits of your Chinese Zodiac animal and
            receive a set of lucky numbers tailored to your sign! <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderHero;
