import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const title = "TLG";

function NavBar() {
  const [isPulsating, setIsPulsating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsPulsating((prev) => !prev); // Toggle pulsation state
    }, 1000); // Pulsate every 1000ms (1 second)

    return () => clearInterval(intervalId); // Cleanup for the interval effect
  }, []);
  return (
    <nav className="navbar bg-white fs-5 fw-bold fs-4">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://totoantonio.github.io/luckgenerator/"
        >
          <img
            src="./dragonviking.svg"
            alt="Logo"
            className="d-inline-block align-text-top pe-1"
          />
          {title}
        </a>

        <div className="collapse navbar-collapse" id="navbarContent"></div>
      </div>
    </nav>
  );
}
export default NavBar;
