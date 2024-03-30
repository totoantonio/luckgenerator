import React from "react";
import "./Offerings.css"; // Import CSS file for animations

interface OfferingsProps {
  isLightTheme: boolean;
}

const Offerings: React.FC<OfferingsProps> = ({ isLightTheme }) => {
  const headerColorClass = isLightTheme ? "text-dark" : "text-white";

  return (
    <div className="container pt-5">
      <h2 className={`display-6 fw-bold mb-3 ${headerColorClass}`}>
        What's coming
      </h2>
      <div className="row gx-3 gx-md-4 gy-2 gy-md-4 align-items-stretch">
        {/* Cards */}
        {/* First Card */}
        <div className="col-md mb-1 mb-md-0 pt-md-2">
          <div className="rounded-2 bg-white box-shadow flex-fill px-2 py-2 h-100">
            <div className="card-body d-flex flex-column align-items-center justify-content-center p-2">
              <h5
                className={`mb-0 text-start text-truncate ${headerColorClass}`}
              >
                Daily Chinese Horoscope:
              </h5>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="./fire.svg"
                  alt="Daily Horoscope"
                  className="animated-icon me-3"
                  height="50"
                  width="50"
                />
                <p
                  className="lh-1 pt-2 text-start"
                  style={{ fontSize: "16px" }}
                >
                  Discover what the stars have in store for you today. Get
                  insights into your current Chinese zodiac sign and
                  personalized horoscope predictions.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div className="col-md mb-1 mb-md-0 pt-md-2">
          <div className="rounded-2 bg-white box-shadow flex-fill px-2 py-2 h-100">
            <div className="card-body d-flex flex-column align-items-center justify-content-center p-2">
              <h5
                className={`mb-0 text-start text-truncate ${headerColorClass}`}
              >
                Your Daily Fortune:
              </h5>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="./random.svg"
                  alt="Fortune Subscription"
                  className="animated-icon me-3"
                  height="50"
                  width="50"
                />
                <p
                  className="lh-1 pt-2 text-start"
                  style={{ fontSize: "16px" }}
                >
                  Sign up to receive daily fortune updates straight to your
                  inbox. Stay informed about your fortune for the day with our
                  free subscription service.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Third Card */}
        <div className="col-md mb-1 mb-md-0 pt-md-2">
          <div className="bg-white box-shadow rounded-2  flex-fill px-2 py-2 h-100">
            <div className="card-body d-flex flex-column align-items-center justify-content-center p-2">
              <h5
                className={`mb-0 text-start text-truncate ${headerColorClass}`}
              >
                Random Number Generator:
              </h5>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="./fortune.svg"
                  alt="Random Number Generator"
                  className="animated-icon me-3"
                  height="50"
                  width="50"
                />
                <p
                  className="lh-1 pt-2 text-start"
                  style={{ fontSize: "16px" }}
                >
                  Need a random number for your zodiac sign or a specific range?
                  Use our generator to get the perfect number tailored just for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Fourth Card */}
        <div className="col-md mb-1 mb-md-0 pt-md-2">
          <div className="bg-white box-shadow rounded-2 flex-fill px-2 py-2 h-100">
            <div className="card-body d-flex flex-column align-items-center justify-content-center p-2">
              <h5
                className={`mb-0 text-start text-truncate ${headerColorClass}`}
              >
                Wheel of Fortune:
              </h5>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="./wheel.svg"
                  alt="Wheel of Fortune"
                  className="animated-icon me-3"
                  height="50"
                  width="50"
                />
                <p
                  className="lh-1 pt-2 text-start"
                  style={{ fontSize: "16px" }}
                >
                  Let fate decide with our Wheel of Fortune. Whether it's making
                  decisions or seeking guidance, spin the wheel for an answer
                  from the universe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
