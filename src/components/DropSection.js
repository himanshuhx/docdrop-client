import React, { useRef, useState } from "react";

const DropSection = () => {
  const uploadButtonRef = useRef();
  const [file, setFile] = useState();

  const onUploadButtonClick = () => {
    uploadButtonRef.current.click();
  };

  return (
    <div className="drop-section">
      <img src="./file-image.png" alt="file-image" draggable="false" />
      <p>Upload and Share the download Link</p>
      <input
        ref={uploadButtonRef}
        type="file"
        hidden="true"
        onChange={(e) => setFile(e.target.files[0])}
      ></input>
      <button className="uploadBtn" onClick={onUploadButtonClick}>
        Upload
      </button>
    </div>
  );
};

export default DropSection;
