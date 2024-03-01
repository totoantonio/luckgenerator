import React from "react";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-1 no-border">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img
              className="pe-1 text d-inline-block"
              src="./dragonviking.svg"
              alt=""
              width="30"
              height="24"
            />
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            &copy; 2024 O2 AN2NEW, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img
                className="d-block mx-auto mb-4"
                src="./x.svg"
                alt=""
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
                alt=""
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
                alt=""
                width="30"
                height="24"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
