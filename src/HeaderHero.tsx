import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderHero = () => {
  return (
    <div className="container px-3 py-3 pt-5">
      <div className="row justify-content-center align-items-center">
        {/* Image */}
        <div className="col-lg-4 mb-2 mb-lg-0">
          <img
            src="./tiger.svg"
            className="d-block mx-auto mb-4"
            alt="Tiger"
            width="150"
            height="150"
          />
        </div>
        {/* Title and Text */}
        <div className="col-lg-4">
          <p className="lead mb-4 text-center text-lg-start p-3 lh-1 ">
            Discover the fascinating traits of your Chinese Zodiac animal and
            receive a set of lucky numbers tailored to your sign! <br />
            <br />
            Our fun Zodiac Lucky Number Finder reveals the secrets of this
            ancient tradition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderHero;
