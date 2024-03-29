import React, { useEffect, useRef, useState } from "react";
import uploadFile from "../utility/apiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const DropSection = () => {
  const uploadButtonRef = useRef();
  const [file, setFile] = useState();
  const [fileId, setFileId] = useState("");
  const [isDownloadLinkGenerated, setIsDownloadLinkGenerated] = useState(false);
  const [downloadPageUrl, setDownloadPageUrl] = useState("");

  const onUploadButtonClick = () => {
    uploadButtonRef.current.click();
  };

  useEffect(() => {
    const upload = async () => {
      // upload file
      if (file) {
        const formData = new FormData();
        formData.append("fileName", file.name);
        formData.append("file", file);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        const apiResponse = await uploadFile(formData);
        const fileId = apiResponse.data;
        if (fileId) {
          setFileId(fileId);
          setIsDownloadLinkGenerated(true);
          setDownloadPageUrl(
            `${process.env.REACT_APP_CLIENT_URL}/download/${fileId}`
          );
        }
      }
    };

    if (file) {
      upload();
    }
  }, [file]);

  return (
    <div className="drop-section">
      <img src="./file-image.png" alt="file-image" draggable="false" />
      <p>Upload and Share the download Link</p>
      <input
        ref={uploadButtonRef}
        type="file"
        hidden={true}
        onChange={(e) => setFile(e.target.files[0])}
      />

      {isDownloadLinkGenerated && (
        <div className="download-link-section">
          <h1>{downloadPageUrl}</h1>
          <button>
            <FontAwesomeIcon icon={faCopy} /> Copy Link
          </button>
        </div>
      )}

      <button className="uploadBtn" onClick={onUploadButtonClick}>
        Upload
      </button>
    </div>
  );
};

export default DropSection;
