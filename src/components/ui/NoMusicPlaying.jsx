// NoMusicPlaying.js
import { MdMusicOff } from "react-icons/md";

const NoMusicPlaying = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto text-center">
      <MdMusicOff className="text-gray-500 text-6xl mb-4" />
      <p className="text-white text-lg font-semibold">Tidak ada musik yang sedang diputar</p>

    </div>
  );
};

export default NoMusicPlaying;
