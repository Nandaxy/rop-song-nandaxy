const LoadingCard = () => {
    return (
      <div className="flex items-center bg-gray-600 shadow-md shadow-gray-900/30 rounded-md animate-pulse">
        <div className="w-20 h-20 bg-gray-500 rounded-s"></div>
        <div className="ml-4 flex-1 space-y-2">
          <div className="h-4 bg-gray-500 rounded w-3/4"></div>
          <div className="h-3 bg-gray-500 rounded w-1/2"></div>
          <div className="h-3 bg-gray-500 rounded w-1/3"></div>
        </div>
      </div>
    );
  };
  
  export default LoadingCard;
  