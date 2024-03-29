import React from "react";
import { useParams } from "react-router-dom";
import { downloadFile } from "../utility/apiService";
import { toast } from "react-hot-toast";

const DownloadSection = () => {
  const downloadPageParams = useParams();
  const fileId = downloadPageParams.fileId;

  const startDownload = async () => {
    try {
      return await downloadFile(fileId);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    fileId && (
      <div className="download-section">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3121/3121602.png"
          alt="folder-image"
          draggable="false"
        />
        <p> Your file is ready to download</p>
        <button onClick={startDownload}>Download</button>
      </div>
    )
  );
};

export default DownloadSection;
