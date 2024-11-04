/* eslint-disable react/prop-types */
const Card = ({ musik, index }) => {
    return (
        <div className="flex items-center bg-gray-600 shadow-md shadow-gray-900/30 rounded-md overflow-hidden group hover:bg-gray-700 transition-all duration-300 hover:shadow-white/10">
            <div className="w-16 md:w-20 h-full flex-shrink-0">
                <div className="w-full h-full relative">
                    <img
                        src={musik?.albumImageUrl}
                        alt={musik?.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-70 transition-opacity duration-300"
                    />
                </div>
            </div>
            <div className="flex-1 flex items-center min-w-0 py-1 md:py-2 px-3">
                <div className="flex-1 min-w-0 mr-2 md:mr-6">
                    <a
                        href={musik.songUrl}
                        className="text-white font-semibold mb-1 truncate hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "block" }}
                    >
                        {index}. {musik?.name}
                    </a>
                    <div className="text-gray-300 text-sm truncate">
                        {musik.artist.map((artist, artistIndex) => (
                            <span key={artistIndex} className="truncate">
                                <a
                                    href={artist.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    {artist.name}
                                </a>
                                {artistIndex < musik.artist.length - 1 && ", "}
                            </span>
                        ))}
                    </div>

                    <a
                        href={musik.albumUrl}
                        className="text-gray-300 text-sm truncate hover:underline block whitespace-nowrap overflow-hidden text-ellipsis"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Album: {musik?.album}
                    </a>
                </div>
            </div>
            <div className="flex-shrink-0"></div>
        </div>
    );
};

export default Card;
