import React, { useState, useEffect, useRef, useCallback } from "react";
import "./mycss.css";
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

const ZodiacFinder: React.FC<ZodiacFinderProps> = ({ birthYear }) => {
  const [showResult, setShowResult] = useState(false);
  const [zodiacSign, setZodiacSign] = useState("");
  const [zodiacDescription, setZodiacDescription] = useState("");
  const [luckyNumbers, setLuckyNumbers] = useState<number[]>([]);
  const [horoscope, setHoroscope] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  const calculateZodiac = useCallback(
    (year: string) => {
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
        setLuckyNumbers(zodiacInfo.luckyNumbers);
        setShowResult(true);

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
        }
      }
    },
    [
      setZodiacSign,
      setZodiacDescription,
      setLuckyNumbers,
      setShowResult,
      setHoroscope,
    ]
  );

  useEffect(() => {
    if (birthYear !== null && birthYear !== undefined && birthYear !== "") {
      calculateZodiac(birthYear);
    } else {
      resetState();
    }
  }, [birthYear, calculateZodiac]);

  useEffect(() => {
    if (showResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showResult]);

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
              <div className="gradient-red text-white box-shadow py-3 px-3 py-md-5 px-md-5 text-center overflow-hidden rounded-2 h-100">
                <div className="modal-body p-2">
                  <h1 className="display-6 fw-bold  mb-3">{zodiacSign}</h1>
                  <div className="lh-1 text-start pb-3">
                    {zodiacDescription.split(". ").map((sentence, index) => (
                      <p key={index} className="lh-1 text-start">
                        {sentence.trim()}
                        {index !== zodiacDescription.split(". ").length - 1 &&
                          "."}
                      </p>
                    ))}
                  </div>
                  <p className="h-1 pt-4">
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
                      const form = document.querySelector("form"); // Select the form element
                      if (form) {
                        form.reset(); // Reset the form fields
                      }
                      const generateReportCard = document.querySelector(
                        ".generate-report-card"
                      ); // Select the Generate Report card
                      if (generateReportCard) {
                        const cardPosition =
                          generateReportCard.getBoundingClientRect().top +
                          window.pageYOffset; // Get the position of the card relative to the document top
                        window.scrollTo({
                          top: cardPosition,
                          behavior: "smooth",
                        }); // Scroll to the position of the card
                      }
                    }}
                  >
                    Great, Thanks
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex">
              <div className="gradient-red text-white box-shadow py-3 px-3 py-md-5 px-md-5 text-center overflow-hidden rounded-2 h-100">
                <div className="modal-body p-2">
                  <h1 className="display-6 fw-bold  mb-3">2024 Outlook</h1>
                  <div className="lh-1 text-start pb-3">
                    <p
                      className="border-test"
                      dangerouslySetInnerHTML={{ __html: horoscope }}
                    ></p>
                    <p className="additional-message">
                      Future updates will include <strong>2024 Outlook</strong>{" "}
                      on&nbsp;
                      <strong>Career</strong>, <strong>Love</strong>,{" "}
                      <strong>Health</strong>, and <strong>Luck Level</strong>.
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
