import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mycss.css";
import * as zodiacData from "./chinesezodiac.json";

interface ZodiacInfo {
  description: string;
  luckyNumbers: number[];
}

interface ZodiacData {
  [key: string]: ZodiacInfo;
}

interface ZodiacFinderProps {
  birthYear?: string | null;
}

const ZodiacFinder: React.FC<ZodiacFinderProps> = ({ birthYear }) => {
  const [showResult, setShowResult] = useState(false);
  const [zodiacSign, setZodiacSign] = useState("");
  const [zodiacDescription, setZodiacDescription] = useState("");
  const [luckyNumbers, setLuckyNumbers] = useState<number[]>([]);
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

      // Scroll to the result section
      console.log("Scrolling to result section:", resultRef.current);
      setTimeout(() => {
        if (resultRef.current) {
          resultRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100); // Adjust timeout as needed
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
    <div className="container mt-5">
      <div ref={resultRef} className="result-section">
        {showResult && (
          <div className="modal-content rounded-4 shadow">
            <div className="modal-body p-2">
              <h2 className="fw-bold mb-0" style={{ fontWeight: "bold" }}>
                {zodiacSign}
              </h2>
              <p className="lead lh-1 p-3">{zodiacDescription}</p>
              <p className="lead lh-1 p-3">
                Your lucky numbers:{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {luckyNumbers.join(", ")}
                </span>{" "}
              </p>

              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
                data-bs-dismiss="modal"
                onClick={() => setShowResult(false)} // Add onClick event handler here
              >
                Great, thanks!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZodiacFinder;
