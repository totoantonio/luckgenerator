import React, { useState, useEffect, lazy, Suspense } from "react";
import { BiBell, BiDotsHorizontalRounded } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";
import TwitterVerifiedIcon from "/twitterverified.svg";
const LazyZodiacFinder = lazy(() => import("./ZodiacFinder"));
import "./mycss.css";
import axios from "axios";

const MainProducts = () => {
  const walletAddress = "UQDCZcS0xl1dNzlxCZsvWdLa9TmFLNl2xNfyGblIHNWwxmDr";
  const [isCopied, setIsCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [birthYear, setBirthYear] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [vibrate, setVibrate] = useState(false);
  const [renderZodiacFinder, setRenderZodiacFinder] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredBirthYear = event.currentTarget.birthYear.value;
    setBirthYear(enteredBirthYear);
    event.currentTarget.birthYear.value = "";
    setRenderZodiacFinder(true);
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
    console.log("Copying wallet address...");
  };

  useEffect(() => {
    setIsLoaded(true);

    const vibrateInterval = setInterval(() => {
      setVibrate(true);
      setTimeout(() => setVibrate(false), 500);
    }, 2000);

    return () => {
      clearInterval(vibrateInterval);
    };
  }, []);

  return (
    <div className="container">
      <div className="row align-items-stretch pt-3">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="bg-white box-shadow py-3 px-4 py-md-5 px-md-5 text-center overflow-hidden rounded-3 h-100">
            <div className="my-3 py-3 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h1 className="display-6 fw-bold">Luck Generator</h1>
                <img
                  src="/luckgenerator/twitterverified.svg"
                  alt="Twitter Verified Icon"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className="d-flex align-items-center">
                <BiBell
                  size={30}
                  className="me-3"
                  style={{ animation: vibrate ? "shake 0.5s" : "none" }}
                  aria-hidden="true"
                />
                <BiDotsHorizontalRounded size={30} aria-hidden="true" />
              </div>
            </div>
            <div className="lh-1 text-start pb-3">
              <p>
                Simply enter your birth year and embark on a journey of
                self-discovery and good fortune!
              </p>
              <p>
                You can <strong>DONATE</strong> to keep us going! We are lovers
                of <strong>TON Coins</strong>.
              </p>
              <p>
                Stay tuned for more amazing features coming soon! We're working
                on bringing you daily horoscopes sent directly to your email or
                Telegram, GeoIP for the last user, a lucky wheel, and much more!
              </p>
              <div className="d-flex align-items-center">
                <div
                  className="flex-grow-1 overflow-hidden"
                  style={{ maxWidth: "80%" }}
                >
                  <span className="text-truncate">
                    Wallet Address: <strong>{walletAddress}</strong>
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
                  aria-label="Copy wallet address to clipboard"
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

        <div className="col-lg-6 mb-4 mb-lg-0 text-white">
          <div className="ripe-malinka-gradient py-3 px-4 py-md-5 px-md-5 text-center overflow-hidden rounded-3 h-100">
            <div className="my-3 py-3 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h2 className="display-6 fw-bold">Generate Report</h2>
              </div>
            </div>
            <div className="lh-1 text-start pb-3">
              <p className="mb-4 text-left lh-1 p-3 text-white">
                Enter your Birth Year below and click the "
                <strong>Generate</strong>" button to receive your lucky numbers
                for the year 2024.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="birthYear"
                    required
                    aria-label="Enter your birth year"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary btn-lg me-3">
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
              <p className="mb-4 text-left lh-1 p-3 pt-5 text-white">
                Disclaimer: <strong>Luck Generator</strong> shall not be held
                responsible for any errors, omissions, or inaccuracies in the
                content provided, nor for any actions taken in reliance on this
                information. Users are advised to use the information provided
                at their own discretion and risk.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          {renderZodiacFinder && birthYear && birthYear.trim() !== "" && (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyZodiacFinder key={birthYear} birthYear={birthYear} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainProducts;
