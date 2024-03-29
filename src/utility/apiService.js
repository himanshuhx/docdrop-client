import axios from "axios";

const uploadFile = async (data) => {
  console.log(process.env.REACT_APP_SERVER_URL);
  return await axios.post(`${process.env.REACT_APP_SERVER_URL}/upload`, data);
};

export default uploadFile;
