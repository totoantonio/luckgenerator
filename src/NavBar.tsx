import React, { useState, useEffect } from "react";

const title = "LUCK GENERATOR";

function NavBar() {
  const [navbarVisible, setNavbarVisible] = useState(true); // Track visibility of navbar

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const headerImageHeight = 200; // Adjust this value as needed
      const threshold = headerImageHeight / 2; // Set the threshold for when to apply the scrolled style

      // Calculate opacity based on scroll position
      const opacity = Math.max(0, 1 - (scrollTop - threshold) / threshold);
      setNavbarVisible(opacity > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${navbarVisible ? 1 : 0})`,
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <img
              src="./tiger.svg"
              alt="Logo"
              className="d-inline-block align-text-top pe-1"
              width="30"
              height="25"
              style={{ opacity: navbarVisible ? 1 : 0 }}
            />
            <span
              className="navbar-title fs-5 fw-bold"
              style={{ opacity: navbarVisible ? 1 : 0 }}
            >
              {title}
            </span>
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarContent"></div>
      </div>
    </nav>
  );
}

export default NavBar;
