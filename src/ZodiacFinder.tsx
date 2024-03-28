import React, { useState, useEffect } from "react";
import "./mycss.css";
import * as zodiacData from "./chinesezodiac.json";
import horoscopeData from "./horoscope.json";
import motivationalQuotes from "./motivational.json";

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

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
};

const ZodiacFinder: React.FC<ZodiacFinderProps> = ({ birthYear }) => {
  const [showResult, setShowResult] = useState(false);
  const [zodiacSign, setZodiacSign] = useState("");
  const [zodiacDescription, setZodiacDescription] = useState("");
  const [luckyNumbers, setLuckyNumbers] = useState<number[]>([]);
  const [horoscope, setHoroscope] = useState("");
  const [randomQuote, setRandomQuote] = useState(() => getRandomQuote());

  const calculateZodiac = (year: string) => {
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
      }
    }
  };

  useEffect(() => {
    if (birthYear) {
      setShowResult(false);
      calculateZodiac(birthYear);
      setShowResult(true);
    } else {
      setShowResult(false);
      setZodiacSign("");
      setZodiacDescription("");
      setLuckyNumbers([]);
      setHoroscope("");
    }
  }, [birthYear]);

  const handleCloseResult = () => {
    setShowResult(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const form = document.querySelector("form");
    if (form) {
      form.reset();
      const input = form.querySelector("input");
      if (input) {
        input.disabled = false;
      }
    }
    setZodiacSign("");
    setZodiacDescription("");
    setLuckyNumbers([]);
    setHoroscope("");
  };

  return (
    <div className={`container mt-1 px-0 ${showResult ? "" : "hidden"}`}>
      <div className="result-section">
        {showResult && (
          <div className="row align-items-stretch pt-3">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="gradient-red text-white box-shadow py-3 px-3 py-md-5 px-md-5 text-center overflow-hidden rounded-2">
                <div className="modal-body p-2">
                  <h1 className="display-6 fw-bold mb-3">{zodiacSign}</h1>
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
                  <div className="lh-1 text-start pb-3 pt-3">
                    <p
                      className="border-test"
                      dangerouslySetInnerHTML={{ __html: horoscope }}
                    ></p>
                    <p className="additional-message">
                      Future updates will include <strong>2024 Outlook</strong>{" "}
                      on <strong>Career</strong>, <strong>Love</strong>,{" "}
                      <strong>Health</strong>, and <strong>Luck Level</strong>.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary px-4 gap-3"
                    onClick={handleCloseResult}
                  >
                    Great, Thanks
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="bg-white box-shadow py-3 px-3 py-md-5 px-md-5 text-center overflow-hidden rounded-2 h-100">
                <div className="modal-body p-2">
                  <h1 className="display-6 fw-bold mb-3">Motivations</h1>
                  <div className="lh-1 text-start pb-3">
                    <p className="quote fw-bold">{randomQuote.quote}</p>
                    <p className="author" style={{ textAlign: "right" }}>
                      {randomQuote.author}
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
