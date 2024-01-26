
"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [videoLink, setVideoLink] = useState("");
  const [finalLink, setFinalLink] = useState("");
  const [mediaLinks, setMediaLinks] = useState([]);
  const [showDownload, setShowDownload] = useState(false);

  const handleConvert = async () => {
    try {
      const videoRes = await axios.get(`/api/video-downloader?url=${videoLink}`);
      console.log(videoRes.data);
      const audioRes = await axios.get(`/api/audio-downloader?url=${videoLink}`);
      console.log(audioRes.data);
      setMediaLinks([videoRes.data.format.url, audioRes.data.format.url]);
      setShowDownload(true);
    } catch (error) {
      console.error(error);
    }
  };
  const handleVideoDownloader = async () => {
    try {
      const res = await axios.get(`/api/video-downloader?url=${videoLink}`);
      console.log(res.data);
      setFinalLink(res.data.format.url);
      setShowDownload(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleVaudioDownloader = async () => {
    try {
      const res = await axios.get(`/api/audio-downloader?url=${videoLink}`);
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
            Video Downloader
          </h3>
        </div>
        <div>
          <p>Share Now</p>
        </div>
      </header>
      <div
        className={`flex bg-indigo-600 shadow-2xl rounded-md rounded-b-none text-white flex-col py-[80px] items-center w-full justify-center${showDownload ? "" : ""}`}
      >
        <h1 className="font-semibold text-[2.5rem] md:text-[3rem] text-center">
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
            onClick={handleConvert}
            className="border rounded-md py-1 px-4 font-semibold shadow-lg"
          >
            Convert
          </button>
        </div>
      </div>
      {showDownload && (
        <div className="bg-indigo-600 gap-3 text-white">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-[3rem]">Video & Audio</h1>
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-16 mb-2 justify-center items-center">
              {mediaLinks.map((link, index) => (
                <video key={index} src={link} controls className="rounded-xl w-[400px]"></video>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}