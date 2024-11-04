/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { MdPlayCircleFilled, MdStopCircle } from "react-icons/md";

const ButtonPreview = ({ musik }) => {

  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const audioRef = useRef(null);
  
  const handlePlayPreview = async () => {
    if (isPlayingPreview) {
      console.log("Preview already playing.");
      return;
    }
    if (musik.preview_url === null) {
      console.log("Preview URL not found.");
      return;
    }
    setIsPlayingPreview(true);
    console.log("Playing preview:", musik.preview_url);

    audioRef.current = new Audio(musik.preview_url);
    audioRef.current.play();

    audioRef.current.onended = () => {
      setIsPlayingPreview(false);
    };
  };

  const handleStopPreview = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlayingPreview(false);
    }
  };
  if (musik.preview_url === null) {
    return (
      <button
        disabled
        className="flex items-center px-2 py-1 bg-gray-500 text-white rounded-full transition-all duration-300 text-sm opacity-50 cursor-not-allowed"
      >
        <MdPlayCircleFilled className="mr-1" />
        No Preview
      </button>
    );
  }

  if (isPlayingPreview) {
    return (
      <button
        onClick={handleStopPreview}
        className="flex items-center px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all duration-300 text-sm"
      >
        <MdStopCircle className="mr-1" />
        Stop
      </button>
    );
  }

  return (
    <button
      onClick={handlePlayPreview}
      className="flex items-center px-2 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 text-sm"
    >
      <MdPlayCircleFilled className="mr-1" />
      Preview
    </button>
  );
};

export default ButtonPreview;
