import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import {
  FaArrowUp,
  FaTwitter,
  FaInstagram,
  FaCookie,
  FaTimes,
} from "react-icons/fa";

interface FooterProps {
  isLightTheme: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLightTheme }) => {
  const textClass = isLightTheme ? "text-dark" : "text-white";

  // State to track visibility of cookie warning
  const [showCookieWarning, setShowCookieWarning] = useState(false);

  // Function to close the cookie warning
  const handleCloseCookieWarning = () => {
    setShowCookieWarning(false);
  };

  useEffect(() => {
    // Function to handle scrolling and show the cookie warning
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight - scrollY <= windowHeight * 1.2) {
        setShowCookieWarning(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const CookieWarning = () => (
    <div
      className={`cookie-warning-card ${textClass}`}
      style={{
        display: showCookieWarning ? "flex" : "none",
        position: "fixed",
        bottom: "20px",
        left: "auto", // Set left to auto
        right: "10px", // Adjusted distance from the right side
        width: "90vw",
        maxWidth: "500px",
        padding: "10px",
        backgroundColor: "#ced4da",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="lh-1 d-flex justify-content-between align-items-center"
        style={{ width: "100%" }}
      >
        <div className="lh-1 d-flex align-items-center" style={{ flex: "1" }}>
          <img
            src="cookie.svg"
            alt="Cookie"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
        </div>
        <div style={{ flex: "5", marginLeft: "5px", fontSize: "16px" }}>
          This website uses cookies. Awesome, Right? This website also uses a
          flickering image in our header. Stay away if you have neuro
          conditions.
        </div>
        <button
          className={`btn btn-link ${textClass}`}
          onClick={handleCloseCookieWarning}
          style={{ flex: "none" }}
        >
          <FaTimes style={{ color: "black" }} />
        </button>
      </div>
    </div>
  );

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
        <a className={`me-3 text-body-secondary ${textClass}`} href="#">
          <FaTwitter size={24} style={isLightTheme ? {} : { color: "white" }} />
        </a>
        <a className={`me-3 text-body-secondary ${textClass}`} href="#">
          <FaInstagram
            size={24}
            style={isLightTheme ? {} : { color: "white" }}
          />
        </a>
      </div>
      <CookieWarning />
    </footer>
  );
};

export default Footer;
