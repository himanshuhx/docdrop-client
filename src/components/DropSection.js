import React, { useEffect, useRef, useState } from "react";
import { uploadFile } from "../utility/apiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { toastStyle } from "../utility/constants";

const DropSection = () => {
  const uploadButtonRef = useRef();
  const [file, setFile] = useState();
  const [isDownloadLinkGenerated, setIsDownloadLinkGenerated] = useState(false);
  const [downloadPageUrl, setDownloadPageUrl] = useState("");

  const onUploadButtonClick = () => {
    uploadButtonRef.current.click();
  };

  const copyDownloadLink = async () => {
    try {
      await navigator.clipboard.writeText(downloadPageUrl);
      toast("Link Copied to Clipboard", {
        icon: "📌",
        style: toastStyle,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const upload = async () => {
      // upload file
      if (file) {
        const formData = new FormData();
        formData.append("fileName", file.name);
        formData.append("file", file);
        console.log(file.size);
        const apiResponse = await uploadFile(formData);
        const fileId = apiResponse.data;
        if (fileId) {
          setDownloadPageUrl(
            `${process.env.REACT_APP_CLIENT_URL}/download/${fileId}`
          );
          setIsDownloadLinkGenerated(true);
          toast("Download Link Generated, Happy Sharing!", {
            icon: "🥳",
            style: toastStyle,
          });
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
      <p hidden={isDownloadLinkGenerated}>Upload and Share the download Link</p>
      <h5 hidden={!isDownloadLinkGenerated}>
        Link Generated Copy and Paste in Browser to Download
      </h5>
      <input
        ref={uploadButtonRef}
        type="file"
        hidden={true}
        onChange={(e) => setFile(e.target.files[0])}
      />

      {isDownloadLinkGenerated && (
        <div className="download-link-section">
          <h4>{downloadPageUrl}</h4>
          <button className="copyBtn" onClick={copyDownloadLink}>
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
      )}

      <button
        className="uploadBtn"
        onClick={onUploadButtonClick}
        hidden={isDownloadLinkGenerated}
      >
        Upload
      </button>
    </div>
  );
};

export default DropSection;
