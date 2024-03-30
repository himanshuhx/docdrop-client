import React from "react";
import { useParams } from "react-router-dom";
import { downloadFile } from "../utility/apiService";
import { toast } from "react-hot-toast";

const DownloadSection = () => {
  const downloadPageParams = useParams();
  const fileId = downloadPageParams.fileId;

  const startDownload = async () => {
    try {
      const response = await downloadFile(fileId);
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      // Create a temporary anchor element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${response.headers["file-name"]}`); // Set filename for the download
      document.body.appendChild(link);
      link.click();
      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
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
