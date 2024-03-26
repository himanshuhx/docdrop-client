import React from "react";

const Body = () => {
  return (
    <div className="main">
      <div className="body">
        <div className="drop-section">
          <img src="./file-image.png" alt="file-image" draggable="false" />
          <p>Click here to drop</p>
        </div>
      </div>
      <div className="img-wrapper">
        <img src="./home-img.png" />
      </div>
    </div>
  );
};

export default Body;
