import React, { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaReact, FaLeaf, FaGithub, FaTelegram } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "./mycss.css";

function NavBar() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const SunIcon = <BiSun />;
  const MoonIcon = <BiMoon />;
  const themeIcon = isLightTheme ? MoonIcon : SunIcon;

  const navbarColorClass = isLightTheme
    ? "navbar-light bg-light"
    : "navbar-dark bg-dark";

  const modalBgClass = isLightTheme ? "bg-light" : "bg-dark";
  const modalTextColorClass = isLightTheme ? "text-dark" : "text-light";

  // Define the logo source based on the theme mode
  const logoSource = isLightTheme ? "./tiger.svg" : "./tigerWhite.svg";

  return (
    <>
      <nav className={`navbar ${navbarColorClass}`}>
        <div className="container-fluid">
          <a className={`navbar-brand`} href="#">
            <img
              src={logoSource}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <span
              className={`title-text ${
                isLightTheme ? "light-text" : "dark-text"
              }`}
            ></span>
          </a>

          <div className="d-flex align-items-center">
            <button
              className={`btn btn-${isLightTheme ? "light" : "dark"} me-2`}
              onClick={toggleTheme}
              aria-label={`Toggle ${isLightTheme ? "Dark" : "Light"} Theme`}
            >
              {themeIcon}
            </button>
            <button
              className={`navbar-toggler`}
              type="button"
              onClick={toggleModal}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
      {isModalVisible && (
        <div
          className={`modal ${isLightTheme ? "text-dark" : "text-light"}`}
          tabIndex={-1}
          role="dialog"
          style={{
            display: "block",
            backgroundColor: isLightTheme
              ? "background-color: rgba(255, 255, 255, 0.5)"
              : "rgba(0, 0, 0, 0.5)",
          }}
        >
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
                    isLightTheme ? "text-dark" : "text-light"
                  }`}
                  onClick={toggleModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body lh-sm">
                <p>
                  Welcome to my website! 🌟 I'm a hobbyist web developer who
                  enjoys building with React and Vite.
                </p>
                <p>
                  This website is hosted on GitHub, where I occasionally update
                  it during my free time or when I surpass my sales targets.
                </p>
                <p>
                  I'm a firm believer in luck and its role in our lives. Join me
                  as we explore how technology and luck intersect.
                </p>
                <p>
                  Still working on our Light and Dark Theme Mode. I am not sure
                  when i can finish it. But notice that it is already working in
                  our NavBar.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center px-4">
                <FaReact size={32} color={isLightTheme ? "black" : "white"} />
                <FaLeaf size={32} color={isLightTheme ? "black" : "white"} />
                <FaGithub size={32} color={isLightTheme ? "black" : "white"} />
                <FaTelegram
                  size={32}
                  color={isLightTheme ? "black" : "white"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
