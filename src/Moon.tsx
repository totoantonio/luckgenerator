import React from "react";
import "./moon.css";

interface MoonProps {
  size: number;
  color: string;
}

const Moon: React.FC<MoonProps> = ({ size, color }) => {
  return (
    <div className="moon" style={{ width: `${size}px`, height: `${size}px` }}>
      <div
        className="moon-surface"
        style={{ backgroundColor: color }} // Apply the color
      />
    </div>
  );
};

export default Moon;
