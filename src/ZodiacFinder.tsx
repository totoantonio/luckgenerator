import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  "2024": {
    [zodiac: string]: {
      horoscope: string;
    };
  };
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
      fetchHoroscope();
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

  const fetchHoroscope = () => {
    try {
      const year = "2024"; // Assuming you're fetching data for the year 2024
      const horoscopeObj = horoscopeData[year] as {
        [key: string]: { horoscope: string };
      };
      if (!horoscopeObj) {
        throw new Error("Horoscope data for the year 2024 not found.");
      }
      const signData = horoscopeObj[zodiacSign.toLowerCase()];
      if (!signData) {
        throw new Error(`Horoscope data for ${zodiacSign} not found.`);
      }
      const horoscope = signData.horoscope;
      setHoroscope(horoscope);
    } catch (error) {
      console.error("Error fetching horoscope:", error);
    }
  };

  useEffect(() => {
    console.log("Horoscope state:", horoscope);
  }, [horoscope]);

  console.log("Horoscope:", horoscope);

  return (
    <div className={`container mt-5 ${showResult ? "" : "hidden"}`}>
      <div ref={resultRef} className="result-section">
        {showResult && (
          <div className="row">
            <div className="col-lg-6">
              <div className="modal-content rounded-4 shadow">
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
                    data-bs-dismiss="modal"
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
              <div className="modal-content rounded-4 shadow">
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
