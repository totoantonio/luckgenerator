import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface BlogProps {
  isLightTheme: boolean;
}

const Blog: React.FC<BlogProps> = ({ isLightTheme }) => {
  const textClass = isLightTheme ? "text-dark" : "text-white";
  const bgColorClass = isLightTheme ? "bg-light" : "bg-dark";

  return (
    <div className={`container px-4 pt-5 ${bgColorClass}`}>
      <div className="row">
        <div className="col-12">
          <h2 className={`text-center pt-5 pb-3 ${textClass}`}>
            Unlocking the Mystery: Lucky Numbers Across Cultures
          </h2>
        </div>
      </div>
      <div className="row">
        {/* First Row */}
        <div className="col-lg-4">
          <div className="text-center">
            <img
              src="./cultures.avif"
              alt="Culture 1"
              className="img-fluid rounded-circle border border-white mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <p
              className={`text-start lh-1 ${textClass}`}
              style={{ fontSize: "16px" }}
            >
              <strong>China:</strong> In Chinese culture, the number 8 is
              considered extremely lucky because its pronunciation sounds
              similar to the word for "wealth" or "prosper." Similarly, the
              number 6 is considered lucky as it sounds like the word for
              "smooth" or "well-off." Conversely, the number 4 is avoided as it
              sounds similar to the word for "death."
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="text-center">
            <img
              src="./cultureJapan.avif"
              alt="Culture 2"
              className="img-fluid rounded-circle border border-white mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <p
              className={`text-start lh-1 ${textClass}`}
              style={{ fontSize: "16px" }}
            >
              <strong>Japan:</strong> In Japan, the number 7 is considered
              lucky, stemming from its association with the Seven Gods of
              Fortune. Additionally, the number 9 is considered lucky because
              it's pronounced similarly to the word for "long-lasting."
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="text-center">
            <img
              src="./cultureIndia.avif"
              alt="Culture 3"
              className="img-fluid rounded-circle border border-white mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <p
              className={`text-start lh-1 ${textClass}`}
              style={{ fontSize: "16px" }}
            >
              <strong>India:</strong> In Hindu culture, the number 9 is
              considered auspicious and is associated with the goddess of
              wealth, Lakshmi. It's also common for numbers ending in 1 to be
              considered lucky.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="col-lg-4">
          <div className="text-center">
            <img
              src="./cultureWest.avif"
              alt="Culture 4"
              className="img-fluid rounded-circle border border-white mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <p
              className={`text-start lh-1 ${textClass}`}
              style={{ fontSize: "16px" }}
            >
              <strong>United States:</strong> In Western culture, the number 7
              is often regarded as lucky, influenced by its significance in
              religious texts and folklore. It's associated with good fortune
              and perfection. Additionally, the number 13 is often considered
              unlucky, leading to the superstition of Friday the 13th.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="text-center">
            <img
              src="./cultureEast.avif"
              alt="Culture 5"
              className="img-fluid rounded-circle border border-white mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <p
              className={`text-start lh-1 ${textClass}`}
              style={{ fontSize: "16px" }}
            >
              <strong>Islamic cultures:</strong> In Islamic cultures, the number
              786 is considered lucky because it represents the phrase
              "Bismillah al-Rahman al-Rahim" (In the name of Allah, the Most
              Gracious, the Most Merciful) when using Arabic numerals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
