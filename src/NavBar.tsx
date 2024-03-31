import React, { useState, useEffect, useRef } from "react";
import { BiMoon, BiSun, BiMenu } from "react-icons/bi";
import { FaReact, FaLeaf, FaGithub, FaTelegram } from "react-icons/fa";
import FocusTrap from "focus-trap-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./mycss.css";

interface NavBarProps {
  isLightTheme: boolean;
  toggleTheme: () => void;
}
const NavBar: React.FC<NavBarProps> = ({ isLightTheme, toggleTheme }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalVisible]);

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const SunIcon = <BiSun />;
  const MoonIcon = <BiMoon />;
  const themeIcon = isLightTheme ? MoonIcon : SunIcon;

  const navbarColorClass = isLightTheme
    ? "navbar-light bg-light"
    : "navbar-dark bg-dark";

  return (
    <>
      <nav className={`navbar ${navbarColorClass}`} role="navigation">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleModal}
            aria-label="Toggle Navigation Menu"
          >
            <BiMenu size={24} color={isLightTheme ? "black" : "white"} />
          </button>
          <div className="d-flex align-items-center">
            <div
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Toggle ${isLightTheme ? "Dark" : "Light"} Theme`}
            >
              <div className={`theme-icon ${isLightTheme ? "sun" : "moon"}`}>
                {themeIcon}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isModalVisible && (
        <div
          className={`modal ${isLightTheme ? "text-dark" : "text-light"}`}
          tabIndex={-1}
          role="dialog"
          style={{ display: "block" }}
          ref={modalRef}
        >
          <FocusTrap focusTrapOptions={{ initialFocus: ".modal-content" }}>
            <div className="modal-dialog" role="document">
              <div
                className={`modal-content border-0 ${
                  isLightTheme ? "bg-white" : "bg-dark"
                }`}
              >
                <div className="modal-header">
                  <h5
                    className={`modal-title ${
                      isLightTheme ? "text-dark" : "text-light"
                    }`}
                  >
                    About Us
                  </h5>
                  <button
                    type="button"
                    className={`btn-close ${
                      isLightTheme ? "btn-light" : "btn-dark"
                    }`}
                    onClick={toggleModal}
                    aria-label="Close"
                    style={{
                      border: "none !important",
                      background: "none",
                      cursor: "pointer",
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill={isLightTheme ? "black" : "white"}
                      viewBox="0 0 16 16"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.854 3.146a.5.5 0 0 1 .708 0L8 7.293l3.646-3.647a.5.5 0 1 1 .708.708L8.707 8l3.647 3.646a.5.5 0 1 1-.708.708L8 8.707l-3.646 3.647a.5.5 0 0 1-.708-.708L7.293 8 3.646 4.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="modal-body lh-sm">
                  <p>
                    Welcome to <strong>Luck Generator - Find Your Luck</strong>.
                    I'm a hobbyist web developer who enjoys building with React
                    and Vite.
                  </p>
                  <p>
                    This website is hosted on GitHub, where I occasionally
                    update it during my free time.
                  </p>
                  <p>
                    I'm a firm believer in luck and its role in our lives. Join
                    me as we explore how technology and luck intersect.
                  </p>
                  <p>
                    Still working on our Light and Dark Theme Mode. I am not
                    sure when i can finish it. But notice that it is already
                    working in our NavBar.
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center px-4">
                  <FaReact size={32} color={isLightTheme ? "black" : "white"} />
                  <FaLeaf size={32} color={isLightTheme ? "black" : "white"} />
                  <FaGithub
                    size={32}
                    color={isLightTheme ? "black" : "white"}
                  />
                  <FaTelegram
                    size={32}
                    color={isLightTheme ? "black" : "white"}
                  />
                </div>
              </div>
            </div>
          </FocusTrap>
        </div>
      )}
    </>
  );
};

export default NavBar;
