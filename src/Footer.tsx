import React from "react";

function Footer() {
  return (
    <footer
      className="container d-flex justify-content-between align-items-center py-1 my-1"
      role="contentinfo"
    >
      <div className="d-flex align-items-center">
        <a href="/" className="me-2 text-body-secondary text-decoration-none">
          <img
            className="pe-1"
            src="./tiger.svg"
            alt="Lucky Generator Logo"
            width="30"
            height="24"
          />
        </a>
        <span className="text-body-secondary" style={{ fontSize: "0.8rem" }}>
          &copy; 2024 O2, Inc
        </span>
      </div>

      <div className="d-flex">
        <a className="me-3 text-body-secondary" href="#">
          <img src="./x.svg" alt="X Logo" width="30" height="24" />
        </a>
        <a className="me-3 text-body-secondary" href="#">
          <img src="./insta.svg" alt="Instagram Logo" width="30" height="24" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
