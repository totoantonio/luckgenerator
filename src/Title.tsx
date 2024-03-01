import React, { useState, useEffect, useRef } from "react";
import "./mycss.css";
import ZodiacFinder from "./ZodiacFinder";

const title = "The Luck Generator";

function Title() {
  const [starCount, setStarCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [birthYear, setBirthYear] = useState<string | null>(null); // Nullable birthYear state
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const savedCount = localStorage.getItem("starCount");
    if (savedCount) {
      setStarCount(parseInt(savedCount, 10));
    }
  }, []);

  const handleSendStars = () => {
    setStarCount(starCount + 1);
    localStorage.setItem("starCount", `${starCount + 1}`);

    if (buttonRef.current) {
      const button = buttonRef.current;
      const star = document.createElement("div");
      const buttonRect = button.getBoundingClientRect(); // Gives position relative to viewport
      star.classList.add("star-burst", "fas", "fa-star", "active");
      star.style.left = `${
        button.offsetLeft + button.offsetWidth / 2 - star.offsetWidth / 2
      }px`;
      star.style.top = `${button.offsetTop - star.offsetHeight}px`;
      document.body.appendChild(star);

      // Remove star after animation
      setTimeout(() => star.remove(), 500); // Adjust timing based on CSS transition
    }
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleModalClose();
    setBirthYear(event.currentTarget.birthYear.value); // Set birthYear from form input
  };

  return (
    <div className="px-4 py-5 my-5 text-center">
      <div className="position-relative">
        <img
          className="d-block mx-auto mb-4"
          src="./dragonviking.svg"
          alt=""
          width="72"
          height="57"
        />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
          {`${starCount}+`} <span className="visually-hidden">stars</span>
        </span>
      </div>
      <h1 className="display-5 fw-bold text-body-emphasis">{title}</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4 lh-1">
          Discover the fascinating traits of your{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Chinese Zodiac
          </span>{" "}
          animal and receive a set of lucky numbers tailored to your sign! Our
          fun{" "}
          <span style={{ color: "blue", fontWeight: "bold" }}>
            Zodiac Lucky Number
          </span>{" "}
          Finder reveals the secrets of this ancient tradition. Simply enter
          your birth year and embark on a journey of self-discovery and good
          fortune!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            onClick={handleModalOpen}
          >
            Try It Now!
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
            onClick={handleSendStars}
            ref={buttonRef}
          >
            Send Stars
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div>
          <div className="modal fade show" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center align-items-center">
                  <img
                    className="me-2"
                    src="./chinese.svg"
                    alt="Logo"
                    width="62"
                    height="37"
                  />
                  <h4
                    className="modal-title fw-bold fs-2"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {title}
                  </h4>
                </div>

                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label htmlFor="birthYear">Enter Your Birth Year</label>
                      <input
                        type="number"
                        className="form-control"
                        id="birthYear"
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-primary me-3">
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleModalClose}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}

      {/* Conditional rendering for displaying the result */}
      <ZodiacFinder birthYear={birthYear} />
      {birthYear && <div></div>}
    </div>
  );
}

export default Title;
