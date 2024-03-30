import React from "react";
import LazyLoad from "react-lazyload";
import "bootstrap/dist/css/bootstrap.min.css";

interface blogProps {
  isLightTheme: boolean;
}

const blog: React.FC<blogProps> = ({ isLightTheme }) => {
  const textClass = isLightTheme ? "text-dark" : "text-white";

  return (
    <div className="container px-4 pt-5">
      <div className="row justify-content-center align-items-center">
        <div className={`col-lg-8 ${textClass}`}>
          <p className="display-6 fw-bold mb-3 lh-1">
            Unlocking the Mystery: <br />
            Lucky Numbers Across Cultures <br />
          </p>
          <p className="lh-sm text-start pb-3">
            China: In Chinese culture, the number 8 is considered extremely
            lucky because its pronunciation sounds similar to the word for
            "wealth" or "prosper." Similarly, the number 6 is considered lucky
            as it sounds like the word for "smooth" or "well-off." Conversely,
            the number 4 is avoided as it sounds similar to the word for
            "death."
          </p>

          <p className="lh-sm text-start pb-3">
            Japan: In Japan, the number 7 is considered lucky, stemming from its
            association with the Seven Gods of Fortune. Additionally, the number
            9 is considered lucky because it's pronounced similarly to the word
            for "long-lasting."
          </p>

          <p className="lh-sm text-start pb-3">
            India: In Hindu culture, the number 9 is considered auspicious and
            is associated with the goddess of wealth, Lakshmi. It's also common
            for numbers ending in 1 to be considered lucky.
          </p>

          <p className="lh-sm text-start pb-3">
            United States: In Western culture, the number 7 is often regarded as
            lucky, influenced by its significance in religious texts and
            folklore. It's associated with good fortune and perfection.
            Additionally, the number 13 is often considered unlucky, leading to
            the superstition of Friday the 13th.
          </p>

          <p className="lh-sm text-start pb-3">
            Islamic cultures: In Islamic cultures, the number 786 is considered
            lucky because it represents the phrase "Bismillah al-Rahman
            al-Rahim" (In the name of Allah, the Most Gracious, the Most
            Merciful) when using Arabic numerals.
          </p>
        </div>
        <div className={`col-lg-8 ${textClass}`}>
          <p className="display-6 fw-bold mb-3 lh-1">
            The Power of Positive Thinking: Harnessing Optimism for Success{" "}
            <br />
          </p>
          <p className="lh-sm text-start pb-3">
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

export default blog;
