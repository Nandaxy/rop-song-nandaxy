const LoadingCurrentPlaying = () => {
  return (
    <div className="animate-pulse max-w-md mx-auto">
      <div className="bg-gray-700 rounded-lg h-40 md:h-60 mb-4"></div>
      <div className="bg-gray-700 h-6 rounded mb-2"></div>
      <div className="flex justify-between mb-4">
        <div className="bg-gray-700 h-4 rounded w-1/3"></div>
        <div className="bg-gray-700 h-4 rounded w-1/3"></div>
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
          <div className="bg-gray-600 flex-1 h-full"></div>
        </div>
        <div className="flex justify-between text-gray-400 text-xs">
          <span className="bg-gray-700 h-4 rounded w-1/4"></span>
          <span className="bg-gray-700 h-4 rounded w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingCurrentPlaying;
