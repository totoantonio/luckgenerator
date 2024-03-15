import React, { useState, useRef, lazy, Suspense } from "react";
import { BiBell, BiDotsHorizontalRounded } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";
import headerImage200 from "./assets/images/headerSigns_ksouff_c_scale,w_200.avif";
import headerImage432 from "./assets/images/headerSigns_ksouff_c_scale,w_432.avif";
import headerImage596 from "./assets/images/headerSigns_ksouff_c_scale,w_596.avif";
import headerImage727 from "./assets/images/headerSigns_ksouff_c_scale,w_727.avif";
import headerImage864 from "./assets/images/headerSigns_ksouff_c_scale,w_864.avif";
import headerImage976 from "./assets/images/headerSigns_ksouff_c_scale,w_976.avif";
import headerImage1078 from "./assets/images/headerSigns_ksouff_c_scale,w_1078.avif";
import headerImage1179 from "./assets/images/headerSigns_ksouff_c_scale,w_1179.avif";
import headerImage1286 from "./assets/images/headerSigns_ksouff_c_scale,w_1286.avif";
import headerImage1369 from "./assets/images/headerSigns_ksouff_c_scale,w_1369.avif";
import headerImage1400 from "./assets/images/headerSigns_ksouff_c_scale,w_1400.avif";
import profilePic from "./assets/images/profileImage.avif";
import TwitterVerifiedIcon from "/twitterverified.svg";
import "./mycss.css";
import ZodiacFinder from "./ZodiacFinder";

const title = "Luck Generator";
const LazyZodiacFinder = lazy(() => import("./ZodiacFinder"));

const TitleAnimation = () => {
  const [showModal, setShowModal] = useState(false);
  const [birthYear, setBirthYear] = useState("");
  const walletAddress = "UQDCZcS0xl1dNzlxCZsvWdLa9TmFLNl2xNfyGblIHNWwxmDr";
  const [isCopied, setIsCopied] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleModalClose();
    setBirthYear(event.currentTarget.birthYear.value);
    event.currentTarget.birthYear.value = "";
  };

  const handleCopyClick = () => {
    const textField = document.createElement("textarea");
    textField.innerText = walletAddress;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="container-fluid">
      <link rel="preload" as="image" href={headerImage1400} />
      <div className="row">
        <div className="col-12 px-0">
          <img
            alt="Header"
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet={`
    ${headerImage200} 200w,
    ${headerImage432} 432w,
    ${headerImage596} 596w,
    ${headerImage727} 727w,
    ${headerImage864} 864w,
    ${headerImage976} 976w,
    ${headerImage1078} 1078w,
    ${headerImage1179} 1179w,
    ${headerImage1286} 1286w,
    ${headerImage1369} 1369w,
    ${headerImage1400} 1400w
  `}
            src={headerImage200}
            className="img-fluid w-100"
          />
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "#f3f3f5" }}>
        <div className="col-12 col-lg-6 no-gutter">
          <div className="card rounded-0 p-4 widescreen-card no-border full-width-mobile">
            <div className="d-flex flex-column">
              <h1 className="mb-3 d-flex justify-content-between align-items-center">
                <img
                  src={profilePic}
                  className="card-img-top rounded-circle"
                  alt="Profile Picture"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <div className="d-flex align-items-center">
                  <BiBell size={30} className="me-3" />
                  <BiDotsHorizontalRounded size={30} className="me-3" />
                </div>
              </h1>
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
              <div className="card-body">
                <p className="card-text mb-0 lh-1">
                  Discover the fascinating traits of your Chinese Zodiac animal
                  and receive a set of lucky numbers tailored to your sign!
                  <br />
                  <br /> Our fun Zodiac Lucky Number Finder reveals the secrets
                  of this ancient tradition. <br />
                  <br />
                  Simply enter your birth year and embark on a journey of
                  self-discovery and good fortune! You can{" "}
                  <strong>DONATE</strong> to keep us going! We are lovers of{" "}
                  <strong>TON</strong> Coins.
                </p>
                <div
                  className="mt-3 d-flex align-items-center card-text"
                  role="heading"
                  aria-level={4}
                >
                  <div className="flex-grow-1 overflow-hidden">
                    <span className="text-truncate">
                      Wallet Address:<strong>{walletAddress}</strong>
                    </span>
                  </div>
                  <FiCopy
                    size={20}
                    className="cursor-pointer"
                    onClick={handleCopyClick}
                    style={{
                      fontWeight: "bold",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  />
                  {isCopied && (
                    <span
                      className="ms-2 fw-bold text-success"
                      style={{ userSelect: "none" }}
                    >
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="col-md-9 mt-3 p-4 no-border">
            <div className="d-flex flex-column align-items-center justify-content-between h-100">
              <div>
                <p className="card-text mb-4 text-left lh-1 p-3">
                  Enter your Birth Year below and click the "
                  <strong>Generate</strong>" button to receive your lucky
                  numbers for the year 2024.
                </p>
              </div>
              <div className="mb-4">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="birthYear">Enter Your Birth Year</label>
                    <input
                      type="number"
                      className="form-control"
                      id="birthYear"
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg me-3"
                    >
                      Generate
                    </button>
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
                  Disclaimer: <strong>Luck Generator</strong> shall not be held
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
                  <h1
                    className="modal-title fw-bold fs-2"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {title}
                  </h1>
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
      <Suspense fallback={<div>Loading...</div>}>
        <LazyZodiacFinder birthYear={birthYear} />
      </Suspense>
    </div>
  );
};

export default TitleAnimation;
