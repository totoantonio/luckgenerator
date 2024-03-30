import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { FaArrowUp, FaTwitter, FaInstagram } from "react-icons/fa";

interface FooterProps {
  isLightTheme: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLightTheme }) => {
  const textClass = isLightTheme ? "text-dark" : "text-white";

  // State to track visibility of arrow-up icon
  const [showArrow, setShowArrow] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  // Event listener to show/hide arrow-up icon based on scroll position
  window.onscroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

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
        <span className={`card-text ${textClass}`}>&copy; 2024 O2, Inc</span>
      </div>

      <div className="d-flex align-items-center">
        {showArrow && (
          <button
            className={`me-3 btn btn-link text-body-secondary ${textClass}`}
            onClick={scrollToTop}
            style={{ border: "none", boxShadow: "none" }}
          >
            <FaArrowUp size={24} />
          </button>
        )}
        <a className={`me-3 text-body-secondary ${textClass}`} href="#">
          <FaTwitter size={24} style={{ border: "none", boxShadow: "none" }} />
        </a>
        <a className={`me-3 text-body-secondary ${textClass}`} href="#">
          <FaInstagram
            size={24}
            style={{ border: "none", boxShadow: "none" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
