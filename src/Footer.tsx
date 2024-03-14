import React from "react";

function Footer() {
  return (
    <footer className="container d-flex flex-wrap justify-content-between align-items-center py-1 my-1">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        >
          <img
            className="pe-1 text d-inline-block"
            src="./dragonviking.svg"
            alt="Lucky Generator Logo"
            width="30"
            height="24"
          />
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">
          &copy; 2024 O2 Antonio, Inc
        </span>
      </div>

      <div className="col-md-4 d-flex justify-content-md-end">
        <ul className="nav list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img
                className="d-block mx-auto mb-4"
                src="./x.svg"
                alt="X Logo"
                width="30"
                height="24"
              />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img
                className="d-block mx-auto mb-4"
                src="./insta.svg"
                alt="Instagram Logo"
                width="30"
                height="24"
              />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img
                className="d-block mx-auto mb-4"
                src="./facebook.svg"
                alt="Facebook Logo"
                width="30"
                height="24"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
