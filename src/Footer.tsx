import React from "react";
import LazyLoad from "react-lazyload";

interface FooterProps {
  isLightTheme: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLightTheme }) => {
  const textClass = isLightTheme ? "text-dark" : "text-white";
  const imageSource = isLightTheme ? "./tiger.svg" : "./tigerWhite.svg";

  // CSS style to invert color for dark theme
  const iconStyle = isLightTheme ? {} : { filter: "invert(1)" };

  return (
    <footer
      className="container d-flex justify-content-between align-items-center py-1"
      role="contentinfo"
    >
      <div className="d-flex align-items-center">
        <a href="/" className="me-2 text-body-secondary text-decoration-none">
          <LazyLoad>
            <img
              className="pe-1"
              src={imageSource}
              alt="Lucky Generator Logo"
              width="30"
              height="24"
            />
          </LazyLoad>
        </a>
        <span className={`card-text ${textClass}`}>&copy; 2024 O2, Inc</span>
      </div>

      <div className="d-flex">
        <a className={`me-3 text-body-secondary ${textClass}`} href="#">
          <LazyLoad>
            <img
              src="./x.svg"
              alt="X Logo"
              width="30"
              height="24"
              style={iconStyle} // Apply iconStyle here
            />
          </LazyLoad>
        </a>
        <a className={`me-3 text-body-secondary ${textClass}`} href="#">
          <LazyLoad>
            <img
              src="./insta.svg"
              alt="Instagram Logo"
              width="30"
              height="24"
              style={iconStyle} // Apply iconStyle here
            />
          </LazyLoad>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
