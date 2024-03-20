import React, { useState } from "react";
import { FiShare } from "react-icons/fi";
import "./ShareButton.css";

interface ShareButtonProps {
  shareUrl: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ shareUrl }) => {
  const handleShareClick = async () => {
    if (navigator.share) {
      // Check if Web Share API is supported by the browser
      navigator
        .share({
          title: document.title,
          url: shareUrl,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.error("Web Share API not supported.");
    }
  };

  return (
    <div className="share-button">
      <button className="btn-share" onClick={handleShareClick}>
        <FiShare size={24} />
      </button>
    </div>
  );
};

export default ShareButton;
