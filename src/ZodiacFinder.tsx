import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    if (birthYear) {
      calculateZodiac(birthYear);
    }
  }, [birthYear]);

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
      setLuckyNumbers(generateLuckyNumbers(7));
      setShowResult(true);
      // Ensure that the key exists in horoscopeData before accessing it
      if (calculatedZodiacSign in horoscopeData) {
        setHoroscope(
          (horoscopeData as HoroscopeData)[calculatedZodiacSign].horoscope
        );
      }
    }
  };

  const generateLuckyNumbers = (count: number) => {
    const numbers: number[] = [];
    while (numbers.length < count) {
      const num = Math.floor(Math.random() * 60) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers;
  };

  return (
    <div className={`container mt-5 ${showResult ? "" : "hidden"}`}>
      <div ref={resultRef} className="result-section">
        {showResult && (
          <div className="row">
            <div className="col-lg-6">
              <div className="modal-content">
                <div className="modal-body p-2">
                  <h1 className="display-5 fw-bold text-body-emphasis zodiactitle mb-3">
                    <span className="gradient-text" style={titleStyle}>
                      {" "}
                      {zodiacSign}
                    </span>
                  </h1>

                  <p className="lead lh-1 p-3">{zodiacDescription}</p>
                  <p className="lead lh-1 p-3 pt-4">
                    Your lucky numbers:
                    <br />
                    <br />
                    <span className="lucky-numbers-text gradient-text">
                      {luckyNumbers.map((number, index) => (
                        <span key={index} className="lucky-number">
                          {number}
                        </span>
                      ))}
                    </span>
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 gap-3"
                    onClick={() => {
                      setShowResult(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Great, thanks!
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="modal-content">
                <div className="modal-body p-2">
                  <h1 className="display-5 fw-bold text-body-emphasis zodiactitle mb-3">
                    <span className="gradient-text" style={titleStyle}>
                      {" "}
                      {zodiacSign}
                    </span>
                  </h1>

                  <p className="lead lh-1 p-3">{horoscope}</p>
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
