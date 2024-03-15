import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const title = "LUCK GENERATOR";

function NavBar() {
  const [opacity, setOpacity] = useState(1); // Set initial opacity to 1

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const headerImageHeight = 300; // Adjust this value as needed
      const threshold = headerImageHeight / 2; // Set the threshold for when to apply the scrolled style

      // Calculate opacity based on scroll position
      const newOpacity = Math.max(0, 1 - (scrollTop - threshold) / threshold);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ opacity: opacity }}>
          <img
            src="/tiger.svg"
            alt="Logo"
            className="d-inline-block align-text-top pe-1"
            width="30"
            height="25"
            style={{ opacity: opacity }}
          />
          <span
            className="navbar-title fs-5 fw-bold"
            style={{ opacity: opacity }}
          >
            {title}
          </span>
        </a>

        <div className="collapse navbar-collapse" id="navbarContent"></div>
      </div>
    </nav>
  );
}

export default NavBar;
