import React from "react";
import LazyLoad from "react-lazyload";
import { FaTwitter, FaInstagram } from "react-icons/fa";

interface FooterProps {
  isLightTheme: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLightTheme }) => {
  return (
    <footer
      className="container d-flex justify-content-between align-items-center pt-5 pb-2"
      role="contentinfo"
    >
      <div className="d-flex align-items-center">
        <a href="/" className="me-2 text-body-secondary text-decoration-none">
          <LazyLoad>
            <img
              src={isLightTheme ? "./tiger.svg" : "./tigerWhite.svg"}
              alt="Lucky Generator Logo"
              width="30"
              height="24"
            />
          </LazyLoad>
        </a>
        <span
          className={`card-text ${isLightTheme ? "text-dark" : "text-white"}`}
        >
          &copy; 2024 O2, Inc
        </span>
      </div>
      <div className="d-flex align-items-center">
        <a
          className={`me-3 text-body-secondary ${
            isLightTheme ? "text-dark" : "text-white"
          }`}
          href="#"
        >
          <FaTwitter size={24} style={isLightTheme ? {} : { color: "white" }} />
        </a>
        <a
          className={`me-3 text-body-secondary ${
            isLightTheme ? "text-dark" : "text-white"
          }`}
          href="#"
        >
          <FaInstagram
            size={24}
            style={isLightTheme ? {} : { color: "white" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
