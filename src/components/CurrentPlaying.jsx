import { useEffect, useState } from "react";
import { fetchDataSpoty } from "../lib/fetchData";
import LoadingCurrentPlaying from "./ui/LoadingCurrentPlaying";

import ButtonPreview from "./ui/ButtonPreview";
import NoMusicPlaying from "./ui/NoMusicPlaying";

const CurrentPlaying = () => {
    const [musik, setMusik] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const getDataMusik = async () => {
            const res = await fetchDataSpoty("now-playing");
            if (res.isPlaying === true) {
                setMusik(res);
                setCurrentTime(res.progress_ms);
            } else {
                setMusik(null);
            }
            setIsLoading(false);
        };

        getDataMusik();

        const interval = setInterval(() => {
            getDataMusik();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            if (musik && musik.isPlaying) {
                setCurrentTime(prevTime => {
                    const newTime = prevTime + 1000;
                    return newTime < musik.duration_ms
                        ? newTime
                        : musik.duration_ms;
                });
            }
        }, 1000);

        return () => clearInterval(timeInterval);
    }, [musik]);

    const formatTime = ms => {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="min-h-80 p-4">
            {isLoading ? (
                <LoadingCurrentPlaying />
            ) : musik === null ? (
                <NoMusicPlaying />
            ) : (
                <div className="mx-auto bg-gray-900 rounded-lg shadow-2xl max-w-md">
                    <div className="">
                        <img
                            src={musik.albumImageUrl}
                            alt={musik.title}
                            className="w-full h-52 md:h-60 object-cover rounded-t-lg"
                        />
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-1">
                            <a
                                href={musik.songUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-bold text-lg mb-1 hover:underline truncate block"
                            >
                                {musik.name}
                            </a>
                            <ButtonPreview musik={musik} />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            {/* <p className="text-gray-400 text-sm truncate flex-1">
                Artis: {musik.artist}
              </p> */}
                            <div className="text-gray-300 text-sm truncate">
                                {musik.artist.map((artist, index) => (
                                    <span key={index}>
                                        <a
                                            href={artist.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            {artist.name}
                                        </a>
                                        {index < musik.artist.length - 1 &&
                                            ", "}
                                    </span>
                                ))}
                            </div>
                            <a
                                className="text-gray-400 text-sm truncate flex-1 text-right hover:underline"
                                href={musik.albumUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Album : {musik.album}
                            </a>
                        </div>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                                <div
                                    style={{
                                        width: `${
                                            (currentTime / musik.duration_ms) *
                                            100
                                        }%`
                                    }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                ></div>
                            </div>
                            <div className="flex justify-between text-gray-400 text-xs">
                                <span>{formatTime(currentTime)}</span>
                                <span>{formatTime(musik.duration_ms)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CurrentPlaying;
