import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./purifiedCSS.css";

const title = "LUCK GENERATOR";

function NavBar() {
  return (
    <nav
      className="navbar bg-white fs-5 fw-bold fs-4 bg-opacity-75"
      role="navigation"
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://totoantonio.github.io/luckgenerator/"
        >
          <img
            src="./profileImage.avif"
            alt="Logo"
            className="d-inline-block align-text-top pe-1"
            width="30"
            height="25"
          />
          {title}
        </a>

        <div className="collapse navbar-collapse" id="navbarContent"></div>
      </div>
    </nav>
  );
}

export default NavBar;
