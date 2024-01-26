"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [videoLink, setVideoLink] = useState("");
  const [finalLink, setFinalLink] = useState("");
  const [showDownload, setShowDownload] = useState(false);

  const handleDownload = async () => {
    try {
      const res = await axios.get(`/api/downloader?url=${videoLink}`);
      console.log(res.data);
      setFinalLink(res.data.format.url);
      setShowDownload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleVideoDownload = () => {
    const link = document.createElement("a");
    link.href = finalLink;
    link.download = "downloaded_video.mp4"; // You can set the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="mx-auto md:max-w-6xl px-6">
      <header className="flex justify-between mx-auto max-w-6xl py-4">
        <div>
          <h3 className="text-xl font-semibold tracking-wider">
            Youtube Downloader
          </h3>
        </div>
        <div>
          <p>Share Now</p>
        </div>
      </header>
      <div className="flex bg-indigo-600 shadow-2xl rounded-md text-white flex-col items-center min-h-[450px] w-full justify-center">
        <h1 className="font-semibold text-3xl text-center">
          Youtube Video Downloader
        </h1>
        <div className="mt-4 space-x-2 w-full p-4 flex justify-center">
          <input
            type="text"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            className="p-2 py-3 w-[60%] outline-none text-black rounded-md shadow-lg"
            placeholder="Paste your video link here"
          />
          <button
            onClick={handleDownload}
            className="border rounded-md py-1 px-4 font-semibold shadow-lg"
          >
            Convert
          </button>
        </div>
      </div>
      {showDownload && (
        <div className="">
          <video src={finalLink} controls></video>
        </div>
      )}
    </main>
  );
}