import React from "react";
import LazyLoad from "react-lazyload";
import "bootstrap/dist/css/bootstrap.min.css";

interface BlogProps {
  isLightTheme: boolean;
}

const Blog: React.FC<BlogProps> = ({ isLightTheme }) => {
  const textClass = isLightTheme ? "text-white" : "text-dark";
  const bgColorClass = isLightTheme ? "bg-dark" : "bg-light";

  return (
    <div className="container px-4 pt-5">
      <div
        className={`box-shadow py-2 px-4 py-md-2 px-md-4 overflow-hidden rounded-3 h-100 row justify-content-center align-items-center ${bgColorClass}`}
      >
        <div className="col-lg-8">
          <p className={`display-6 fw-bold mb-3 lh-1 pt-3 pb-3 ${textClass}`}>
            Unlocking the Mystery: <br />
            Lucky Numbers Across Cultures <br />
          </p>
          <p className={`lh-sm text-start pb-3 ${textClass}`}>
            China: In Chinese culture, the number 8 is considered extremely
            lucky because its pronunciation sounds similar to the word for
            "wealth" or "prosper." Similarly, the number 6 is considered lucky
            as it sounds like the word for "smooth" or "well-off." Conversely,
            the number 4 is avoided as it sounds similar to the word for
            "death."
          </p>

          <p className={`lh-sm text-start pb-3 ${textClass}`}>
            Japan: In Japan, the number 7 is considered lucky, stemming from its
            association with the Seven Gods of Fortune. Additionally, the number
            9 is considered lucky because it's pronounced similarly to the word
            for "long-lasting."
          </p>

          <p className={`lh-sm text-start pb-3 ${textClass}`}>
            India: In Hindu culture, the number 9 is considered auspicious and
            is associated with the goddess of wealth, Lakshmi. It's also common
            for numbers ending in 1 to be considered lucky.
          </p>

          <p className={`lh-sm text-start pb-3 ${textClass}`}>
            United States: In Western culture, the number 7 is often regarded as
            lucky, influenced by its significance in religious texts and
            folklore. It's associated with good fortune and perfection.
            Additionally, the number 13 is often considered unlucky, leading to
            the superstition of Friday the 13th.
          </p>

          <p className={`lh-sm text-start pb-3 ${textClass}`}>
            Islamic cultures: In Islamic cultures, the number 786 is considered
            lucky because it represents the phrase "Bismillah al-Rahman
            al-Rahim" (In the name of Allah, the Most Gracious, the Most
            Merciful) when using Arabic numerals.
          </p>
        </div>
        <div className="col-lg-8">
          <p className={`display-6 fw-bold mb-3 lh-1 ${textClass}`}>
            The Power of Positive Thinking: Harnessing Optimism for Success{" "}
            <br />
          </p>
          <p className={`lh-sm text-start pb-3 ${textClass}`}>
            Positive thinking is a mindset that emphasizes focusing on the good,
            expecting favorable outcomes, and maintaining an optimistic
            attitude, even in challenging situations. This approach can lead to
            numerous benefits, including improved mental health, increased
            resilience, and enhanced problem-solving abilities. By cultivating
            positivity in your thoughts and actions, you can pave the way for
            greater success and fulfillment in life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
