import React from "react";

interface MoonProps {
  size: number;
  color: string; // Include the color property
}

const GradientHeader = () => {
  return (
    <div className="row gradient-header position-relative">
      <div className="col-12 px-0 position-relative">
        {/* Stars */}
        <div className="floating-stars position-absolute top-0 start-0 w-100 h-100">
          {/* Larger Twinkling stars */}
          <div
            className="star twinkling-star larger-star"
            style={{ top: "10%", left: "20%" }}
          ></div>
          <div
            className="star twinkling-star larger-star"
            style={{ top: "30%", left: "70%" }}
          ></div>

          {/* Add more larger stars as needed */}
          <div
            className="star twinkling-star larger-star"
            style={{ top: "50%", left: "40%" }}
          ></div>
          <div
            className="star twinkling-star larger-star"
            style={{ top: "60%", left: "90%" }}
          ></div>

          {/* Smaller Twinkling stars */}
          <div
            className="star twinkling-star"
            style={{ top: "40%", left: "50%" }}
          ></div>
          <div
            className="star twinkling-star"
            style={{ top: "70%", left: "30%" }}
          ></div>
          <div
            className="star twinkling-star"
            style={{ top: "80%", left: "80%" }}
          ></div>

          {/* Steady stars */}
          <div
            className="star steady-star"
            style={{ top: "20%", left: "60%" }}
          ></div>
          <div
            className="star steady-star"
            style={{ top: "50%", left: "40%" }}
          ></div>
          <div
            className="star steady-star"
            style={{ top: "60%", left: "90%" }}
          ></div>

          {/* Add more stars as needed */}
        </div>

        {/* Passing comet */}
        <div className="passing-comet position-absolute">
          <img src="./planet.svg" alt="Planet" />
        </div>
        {/* Moon */}
        <div className="moon position-absolute spinning-moon">
          <img src="./moon.svg" alt="Moon" />
        </div>

        {/* Gradient Background */}
        <div className="gradient-background"></div>
      </div>
    </div>
  );
};

export default GradientHeader;
