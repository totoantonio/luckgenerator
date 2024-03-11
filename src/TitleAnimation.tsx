import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiBell, BiDotsHorizontalRounded } from "react-icons/bi";
import HeaderImage from "./assets/images/Header.png";
import TwitterVerifiedIcon from "/twitterverified.svg";
import ZodiacFinder from "./ZodiacFinder"; // Import the ZodiacFinder component

const title = "Luck Generator";

const TitleAnimation = () => {
  const [showModal, setShowModal] = useState(false);
  const [birthYear, setBirthYear] = useState(""); // Initialize birthYear state

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

  const handleGreatThanks = () => {
    setBirthYear(""); // Reset the birthYear state
  };

  return (
    <div className="container-fluid">
      {/* Header Image */}
      <div className="row">
        <div className="col-12 px-0">
          <img src={HeaderImage} alt="Header" className="img-fluid w-100" />
        </div>
      </div>
      {/* First Card */}
      <div className="row" style={{ backgroundColor: "#f3f3f5" }}>
        <div className="col-12 col-lg-6 no-gutter">
          <div className="card rounded-0 p-4 widescreen-card no-border full-width-mobile">
            <div className="d-flex flex-column">
              <div className="mb-3 d-flex justify-content-between align-items-center">
                {/* Profile Picture */}
                <img
                  src="src/assets/images/ChineseLuck.jpg"
                  className="card-img-top rounded-circle"
                  alt="Profile Picture"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                {/* Notification Bell Icon and Menu Icon */}
                <div className="d-flex align-items-center">
                  <BiBell size={30} className="me-3" />
                  <BiDotsHorizontalRounded size={30} className="me-3" />
                </div>
              </div>
              {/* Profile Name with Twitter Verified Icon */}
              <div className="mb-3 d-flex align-items-center p-3">
                <p className="card-text mb-0 lh-1 fs-1 fw-bold">
                  Luck Generator
                  <img
                    src={TwitterVerifiedIcon}
                    alt="Twitter Verified Icon"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "10px",
                    }}
                  />
                </p>
              </div>
              {/* Description */}
              <div className="card-body">
                <p className="card-text mb-0 lh-1">
                  Discover the fascinating traits of your Chinese Zodiac animal
                  and receive a set of lucky numbers tailored to your sign!
                  <br />
                  <br /> Our fun Zodiac Lucky Number Finder reveals the secrets
                  of this ancient tradition. <br />
                  <br />
                  Simply enter your birth year and embark on a journey of
                  self-discovery and good fortune!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div className="col-12 col-lg-6">
          <div className="col-md-9 mt-3 p-4 no-border">
            <div className="d-flex flex-column align-items-center justify-content-between h-100">
              <div>
                {/* Instruction Text */}

                <p className="card-text mb-4 text-left lh-1 p-3">
                  Enter your Birth Year below and click the "<b>Generate</b>"
                  button to receive your lucky numbers for the year 2024.
                </p>
              </div>
              <div className="mb-4">
                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="birthYear">Enter Your Birth Year</label>
                    <input
                      type="number"
                      className="form-control"
                      id="birthYear"
                      required // Add required attribute for form validation
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    {/* Primary Button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg me-3"
                    >
                      Generate
                    </button>
                    {/* Secondary Button */}
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg"
                      onClick={handleModalOpen}
                    >
                      Learn More
                    </button>
                  </div>
                </form>
                <p className="card-text mb-4 text-left lh-1 p-3 pt-5">
                  Disclaimer: <b>Luck Generator</b> shall not be held
                  responsible for any errors, omissions, or inaccuracies in the
                  content provided, nor for any actions taken in reliance on
                  this information. Users are advised to use the information
                  provided at their own discretion and risk.
                </p>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default TitleAnimation;
