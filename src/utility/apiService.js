import axios from "axios";

export const uploadFile = async (data) => {
  return await axios.post(`${process.env.REACT_APP_SERVER_URL}/upload`, data);
};

export const downloadFile = async (fileId) => {
  return await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/download/${fileId}`,
    { responseType: "blob" }
  );
};
