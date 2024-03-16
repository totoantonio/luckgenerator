import React, { useState, useEffect, useRef } from "react";
import "./mycss.css"; // Import your custom CSS styles here
import * as zodiacData from "./chinesezodiac.json";
import horoscopeData from "./horoscope.json";

interface ZodiacInfo {
  description: string;
  luckyNumbers: number[];
}

interface ZodiacData {
  [key: string]: ZodiacInfo;
}

interface Horoscope {
  horoscope: string;
}

interface HoroscopeData {
  [key: string]: Horoscope;
}

interface ZodiacFinderProps {
  birthYear?: string | null;
}

const titleStyle: CustomCSSProperties = {
  "--gradientColor": "linear-gradient(89deg, #2689E8 18.91%, #A168FF 79.91%)",
};

interface CustomCSSProperties extends React.CSSProperties {
  "--gradientColor": string;
}

const getCurrentDate = () => {
  const dateObj = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateObj.toLocaleDateString("en-US", options);
};

const ZodiacFinder: React.FC<ZodiacFinderProps> = ({ birthYear }) => {
  const [showResult, setShowResult] = useState(false);
  const [zodiacSign, setZodiacSign] = useState("");
  const [zodiacDescription, setZodiacDescription] = useState("");
  const [luckyNumbers, setLuckyNumbers] = useState<number[]>([]);
  const [horoscope, setHoroscope] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("useEffect triggered, birthYear:", birthYear);
    if (birthYear) {
      calculateZodiac(birthYear);
    }
  }, [birthYear]);

  useEffect(() => {
    console.log("useEffect triggered, birthYear:", birthYear);
    if (birthYear !== null && birthYear !== undefined) {
      calculateZodiac(birthYear);
    }
  }, [birthYear]);

  useEffect(() => {
    if (showResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showResult]);

  const calculateZodiac = (year: string) => {
    console.log("Inside calculateZodiac. Year:", year);
    const parsedYear = parseInt(year);
    const zodiacSigns = [
      "Rat",
      "Ox",
      "Tiger",
      "Rabbit",
      "Dragon",
      "Snake",
      "Horse",
      "Goat",
      "Monkey",
      "Rooster",
      "Dog",
      "Pig",
    ];
    const zodiacIndex = (parsedYear - 4) % 12;
    const calculatedZodiacSign = zodiacSigns[zodiacIndex];

    if (!zodiacSigns.includes(calculatedZodiacSign)) {
      setZodiacSign("Unknown");
      return;
    }

    const zodiacInfo = (zodiacData as ZodiacData)[
      calculatedZodiacSign.toLowerCase()
    ];

    if (zodiacInfo) {
      setZodiacSign(calculatedZodiacSign);
      setZodiacDescription(zodiacInfo.description);
      setLuckyNumbers(zodiacInfo.luckyNumbers); // Update to retrieve lucky numbers from JSON
      setShowResult(true);

      console.log("Setting horoscope");
      if (calculatedZodiacSign in horoscopeData) {
        let modifiedHoroscope = (horoscopeData as HoroscopeData)[
          calculatedZodiacSign
        ].horoscope;

        const sentences = modifiedHoroscope.split(". ");
        modifiedHoroscope = sentences
          .map((sentence) => `<p>${sentence}.</p>`)
          .join("");

        setHoroscope(modifiedHoroscope);
      } else {
        console.log("Zodiac sign not found in horoscopeData");
      }
    }
  };

  const resetState = () => {
    setShowResult(false);
    setZodiacSign("");
    setZodiacDescription("");
    setLuckyNumbers([]);
    setHoroscope("");
  };

  return (
    <div className={`container mt-1 px-0 ${showResult ? "" : "hidden"}`}>
      <div ref={resultRef} className="result-section">
        {showResult && (
          <div className="row align-items-stretch pt-3">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="modal-content rounded-4 cbg flex-fill">
                <div className="modal-body p-2">
                  <h1 className="display-6 fw-bold text-body-emphasis mb-3">
                    {zodiacSign}
                  </h1>
                  <div className="lead lh-1 mtxt">
                    {zodiacDescription.split(". ").map((sentence, index) => (
                      <p key={index} className="card-text lh-1 mtxt">
                        {sentence.trim()}
                        {index !== zodiacDescription.split(". ").length - 1 &&
                          "."}
                      </p>
                    ))}
                  </div>
                  <p className="card-text lh-1 pt-4">
                    Your lucky numbers:
                    <br />
                    <br />
                    <span className="lucky-numbers lead lh-1 fw-bold">
                      {luckyNumbers.map((number, index) => (
                        <span key={index} className="lucky-number">
                          {index !== 0 && <span className="dot">·</span>}
                          <span className="number">
                            {String(number).padStart(2, "0")}
                          </span>
                        </span>
                      ))}
                    </span>
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 gap-3"
                    onClick={() => {
                      console.log("Great, thanks! clicked");
                      resetState(); // Call the resetState function to reset the state
                      if (typeof window !== "undefined") {
                        const scrollOptions: ScrollToOptions = {
                          top: 0,
                          behavior: "smooth" as ScrollBehavior,
                        };
                        window.scrollTo(scrollOptions);
                        document.documentElement.scrollTop = 0; // For older browsers
                      }
                    }}
                  >
                    Great, Thanks
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="modal-content rounded-4 cbg flex-fill">
                <div className="modal-body p-2">
                  <h1 className="display-6 fw-bold text-body-emphasis mb-3">
                    2024 Outlook
                  </h1>
                  <div className="card-text lh-1 mtxt">
                    <p
                      className="border-test"
                      dangerouslySetInnerHTML={{ __html: horoscope }}
                    ></p>
                    <p className="additional-message">
                      Future updates of this app will include{" "}
                      <strong>2024 outlook</strong> on&nbsp;
                      <strong>career</strong>, <strong>love</strong>,{" "}
                      <strong>health</strong>, and <strong>luck ratio</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZodiacFinder;
