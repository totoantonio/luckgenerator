import React, { useState, useEffect, lazy, Suspense } from "react";
import { BiBell, BiDotsHorizontalRounded } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";
const LazyZodiacFinder = lazy(() => import("./ZodiacFinder"));
import "./mycss.css";
import axios from "axios";

const MainProducts = () => {
  const walletAddress = "UQCDKjllCzHooYuMo_TVqFaXvhUWEvJKJmpfABImrrzD0xf_";
  const [isCopied, setIsCopied] = useState(false);

  const [birthYear, setBirthYear] = useState<string | null>(null);

  const [vibrate, setVibrate] = useState(false);
  const [renderZodiacFinder, setRenderZodiacFinder] = useState(false);
  const [lastTransaction, setLastTransaction] = useState<any>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Handling form submission...");

    const enteredBirthYear = event.currentTarget.birthYear.value;
    setBirthYear(enteredBirthYear);
    setRenderZodiacFinder(true);

    // Scroll to the result area
    const resultArea = document.querySelector(".result-section");
    if (resultArea) {
      // Check if the result section is not already visible
      if (resultArea.getBoundingClientRect().top !== 0) {
        resultArea.scrollIntoView({ behavior: "smooth" });
      }
    }

    event.currentTarget.reset(); // Reset the form after submitting
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
    const vibrateInterval = setInterval(() => {
      setVibrate(true);
      setTimeout(() => setVibrate(false), 500);
    }, 2000);

    return () => {
      clearInterval(vibrateInterval);
    };
  }, []);

  useEffect(() => {
    const fetchLastTransaction = async () => {
      try {
        const response = await axios.get(
          `https://tonapi.io/v2/accounts/${walletAddress}`
        );
        const lastActivity = response.data.last_activity;
        if (lastActivity) {
          const lastTransactionHash = `0x${lastActivity.toString(10)}`;
          const lastTransactionAmount = (response.data.balance / 1e9).toFixed(
            2
          ); // Convert to TON and round to 2 decimal places
          setLastTransaction({
            hash: lastTransactionHash,
            amount: lastTransactionAmount,
          });
        }
      } catch (error) {
        console.error("Error fetching last transaction:", error);
      }
    };

    fetchLastTransaction();
  }, []);

  return (
    <div className="container">
      <div className="row align-items-stretch pt-3">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="bg-white box-shadow py-2 px-4 py-md-2 px-md-4 text-center overflow-hidden rounded-3 h-100">
            <div className="my-3 py-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h1
                  className="display-6 fw-bold"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Luck Generator
                </h1>

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
                <BiBell size={30} className="me--1" aria-hidden="true" />{" "}
                {/* Increase the margin on the right side */}
                <a href="https://t.me/alfiesuperhalk">
                  <img
                    src="./telegram.svg"
                    alt="Telegram Icon"
                    width="30"
                    height="30"
                    aria-hidden="true"
                  />
                </a>
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
                  style={{ maxWidth: "90%" }}
                >
                  <span className="text-truncate">
                    Wallet Address: <strong>{walletAddress}</strong>
                  </span>
                </div>
                &nbsp;&nbsp;
                <FiCopy
                  size={20}
                  className="cursor-pointer"
                  onClick={handleCopyClick}
                  style={{
                    fontWeight: "bold",
                    WebkitTapHighlightColor: "transparent",
                    backgroundColor: "transparent",
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
              {lastTransaction && (
                <div
                  className="flex-grow-1 overflow-hidden"
                  style={{ maxWidth: "100%" }}
                >
                  <p
                    id="transactionContainer"
                    className="text-black-50 pt-2 transaction-container fw-bold"
                  >
                    <span className="transaction-text">
                      Lastest TX: {lastTransaction.hash.substring(0, 20)}...
                    </span>
                    <span className="amount-text">
                      {" "}
                      : {lastTransaction.amount} TON
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4 mb-lg-0 text-white generate-report-card">
          <div className="gradient-red py-2 px-4 py-md-2 px-md-4 text-center overflow-hidden rounded-3 h-100">
            <div className="my-3 py-1 d-flex align-items-center justify-content-between">
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
                  <button type="submit" className="btn btn-primary active me-3">
                    Generate
                  </button>

                  <button type="button" className="btn btn-secondary me-3">
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
          {renderZodiacFinder && (
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
