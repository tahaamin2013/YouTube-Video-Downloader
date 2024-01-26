"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [videoLink, setVideoLink] = useState("");
  const [finalLink, setFinalLink] = useState("");
  const [showDownload, setShowDownload] = useState(false);

  const handleDownload = async () => {
    try {
      const res = await axios.get(`/api/video-downloader?url=${videoLink}`);
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
      <div className="flex bg-indigo-600 rounded-b-none shadow-2xl rounded-md text-white flex-col items-center h-[320px] w-full justify-center">
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
        <div className="bg-indigo-600 flex justify-center items-center rounded-b-md flex-col pb-3 gap-3">
         <video src={finalLink} controls className="rounded-lg w-[400px] shadow-2xl"></video>
        </div>
      )}
    </main>
  );
}
// "use client";

// import axios from "axios";
// import { useState } from "react";

// export default function Home() {
//   const [videoLink, setVideoLink] = useState("");
//   const [finalLink, setFinalLink] = useState("");
//   const [audioLink, setAudioLink] = useState("");
//   const [videoFinalLink, setVideoFinalLink] = useState("");
//   const [audioFinalLink, setAudioFinalLink] = useState("");
//   const [showDownload, setShowDownload] = useState(false);

//   const handleDownload = async () => {
//     try {
//       const res = await axios.get(`/api/video-downloader?url=${videoLink}`);
//       console.log(res.data);
//       setFinalLink(res.data.format.url);
//       setShowDownload(true);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleVideoDownload = () => {
//     downloadFile(videoFinalLink, "downloaded_video.mp4");
//   };

//   const handleAudioDownload = () => {
//     downloadFile(audioFinalLink, "downloaded_audio.mp3");
//   };
//   const downloadFile = (link, filename) => {
//     const a = document.createElement("a");
//     a.href = link;
//     a.download = filename;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   };
//   return (
//     <main className="mx-auto md:max-w-6xl px-6">
//       <header className="flex justify-between mx-auto max-w-6xl py-4">
//         <div>
//           <h3 className="text-xl font-semibold tracking-wider">
//             Youtube Downloader
//           </h3>
//         </div>
//         <div>
//           <p>Share Now</p>
//         </div>
//       </header>
//       <div className="flex bg-indigo-600 rounded-b-none shadow-2xl rounded-md text-white flex-col items-center h-[320px] w-full justify-center">
//         <h1 className="font-semibold text-3xl text-center">
//           Youtube Video Downloader
//         </h1>
//         <div className="mt-4 space-x-2 w-full p-4 flex justify-center">
//           <input
//             type="text"
//             value={videoLink}
//             onChange={(e) => setVideoLink(e.target.value)}
//             className="p-2 py-3 w-[60%] outline-none text-black rounded-md shadow-lg"
//             placeholder="Paste your video link here"
//           />
//           <button
//             onClick={handleDownload}
//             className="border rounded-md py-1 px-4 font-semibold shadow-lg"
//           >
//             Convert
//           </button>
//         </div>
//       </div>
//       {showDownload && (
//         <div className="bg-indigo-600 px-0 sm:px-[100px] rounded-b-md">
//           <h1 className="text-center text-white text-4xl mb-2">Video & Audio</h1>
//          <div className="flex w-full flex-col sm:flex-row items-center pb-3 justify-between px-1 gap-11 sm:gap-0">
//          <video src={finalLink} controls className="rounded-lg w-[400px]"></video>
//           <audio src={finalLink} controls></audio>
//          </div>
//          <button
//             onClick={handleVideoDownload}
//             className="border rounded-md py-1 px-4 font-semibold shadow-lg mr-4"
//           >
//             Download Video
//           </button>
//           <button
//             onClick={handleAudioDownload}
//             className="border rounded-md py-1 px-4 font-semibold shadow-lg"
//           >
//             Download Audio
//           </button>
//         </div>
//       )}
//     </main>
//   );
// }
