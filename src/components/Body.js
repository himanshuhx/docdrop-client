import React from "react";
import DropSection from "./DropSection";

const Body = () => {
  return (
    <div className="main">
      <div className="body">
        <DropSection />
      </div>
      <div className="img-wrapper">
        <img src="./home-img.png" />
      </div>
    </div>
  );
};

export default Body;
