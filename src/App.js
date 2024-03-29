import "./App.css";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DownloadSection from "./components/DownloadSection";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/download/:fileId" element={<DownloadSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
