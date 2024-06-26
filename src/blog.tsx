import React from "react";
import LazyLoad from "react-lazyload";
import "bootstrap/dist/css/bootstrap.min.css";

interface BlogProps {
  isLightTheme: boolean;
}

const Blog: React.FC<BlogProps> = ({ isLightTheme }) => {
  const textClass = isLightTheme ? "text-dark" : "text-white";
  const bgColorClass = isLightTheme ? "bg-light" : "bg-dark";

  return (
    <div className={`container px-4 pt-3 ${bgColorClass}`}>
      <div className="row">
        <div className="col-12">
          <h2 className={`lh-1 text-center pt-3 pb-3 ${textClass}`}>
            Unlocking the Mystery: Lucky Numbers Across Cultures
          </h2>
        </div>
      </div>
      <div className="row">
        {/* First Row */}
        <div className="col-lg-4">
          <div className="text-center">
            <LazyLoad height={400}>
              <img
                src="./cultures.avif"
                alt="Chinese Fortune Teller"
                className="img-fluid rounded-circle border border-white mb-3"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </LazyLoad>
            <p className={`text-start lh-1 ${textClass}`}>
              <strong>China:</strong> In Chinese culture, the number{" "}
              <strong>8</strong> is considered extremely lucky because its
              pronunciation sounds similar to the word for "wealth" or
              "prosper." Similarly, the number <strong>6</strong> is considered
              lucky as it sounds like the word for "smooth" or "well-off."
              Conversely, the number <strong>4</strong> is avoided as it sounds
              similar to the word for "death."
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="text-center">
            <LazyLoad height={400}>
              <img
                src="./cultureJapan.avif"
                alt="Japanese Fortune Teller"
                className="img-fluid rounded-circle border border-white mb-3"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </LazyLoad>
            <p className={`text-start lh-1 ${textClass}`}>
              <strong>Japan:</strong> In Japan, the number <strong>7</strong> is
              considered lucky, stemming from its association with the Seven
              Gods of Fortune. Additionally, the number 9 is considered lucky
              because it's pronounced similarly to the word for "long-lasting."
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="text-center">
            <LazyLoad height={400}>
              <img
                src="./cultureIndia.avif"
                alt="Indian Fortune Teller"
                className="img-fluid rounded-circle border border-white mb-3"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </LazyLoad>
            <p className={`text-start lh-1 ${textClass}`}>
              <strong>India:</strong> In Hindu culture, the number{" "}
              <strong>9</strong> is considered auspicious and is associated with
              the goddess of wealth, Lakshmi. It's also common for numbers
              ending in 1 to be considered lucky.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="col-lg-4">
          <div className="text-center">
            <LazyLoad height={400}>
              <img
                src="./cultureWest.avif"
                alt="Western Fortune Teller"
                className="img-fluid rounded-circle border border-white mb-3"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </LazyLoad>
            <p className={`text-start lh-1 ${textClass}`}>
              <strong>United States:</strong> In Western culture, the number{" "}
              <strong>7</strong>
              is often regarded as lucky, influenced by its significance in
              religious texts and folklore. It's associated with good fortune
              and perfection. Additionally, the number <strong>13</strong> is
              often considered unlucky, leading to the superstition of Friday
              the 13th.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="text-center">
            <LazyLoad height={400}>
              <img
                src="./cultureEast.avif"
                alt="Islamic Fortune Teller"
                className="img-fluid rounded-circle border border-white mb-3"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </LazyLoad>
            <p className={`text-start lh-1 ${textClass}`}>
              <strong>Islamic cultures:</strong> In Islamic cultures, the number
              <strong>786</strong> is considered lucky because it represents the
              phrase "Bismillah al-Rahman al-Rahim" (In the name of Allah, the
              Most Gracious, the Most Merciful) when using Arabic numerals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
