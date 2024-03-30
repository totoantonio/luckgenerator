import React, { useState, useEffect, useRef } from "react";
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
  const [showCookieWarning, setShowCookieWarning] = useState(false);
  const cookieWarningRef = useRef<HTMLDivElement>(null);

  const handleCloseCookieWarning = () => {
    setShowCookieWarning(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowCookieWarning(true);
          } else {
            setShowCookieWarning(false);
          }
        });
      },
      { rootMargin: "0px 0px 20px 0px" }
    );

    const updateCookieWarningPosition = () => {
      if (cookieWarningRef.current) {
        const windowHeight = window.innerHeight;
        const cookieWarningHeight = cookieWarningRef.current.offsetHeight;
        cookieWarningRef.current.style.bottom = `${20}px`;
      }
    };

    const targetElement = document.querySelector("footer");
    if (targetElement) {
      observer.observe(targetElement);
    }

    window.addEventListener("resize", updateCookieWarningPosition);
    updateCookieWarningPosition();

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
      window.removeEventListener("resize", updateCookieWarningPosition);
    };
  }, []);

  const CookieWarning = () => (
    <div
      className={`cookie-warning-card ${textClass}`}
      style={{
        display: showCookieWarning ? "flex" : "none",
        position: "absolute", // Corrected
        right: "20px",
        bottom: "40px",
        maxWidth: "400px",
        padding: "10px",
        backgroundColor: "#dee2e6",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
      }}
      ref={cookieWarningRef}
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
          style={{ flex: "none", boxShadow: "none", border: "none" }}
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
