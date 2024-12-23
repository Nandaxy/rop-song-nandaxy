/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { fetchDataSpoty } from "../lib/fetchData";
import Card from "./ui/Card";
import LoadingCard from "./ui/LoadingCard";

const TopTrack = ({ time_range }) => {
  const [musiks, setMusiks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDataMusik = async () => {
      setIsLoading(true);
      const res = await fetchDataSpoty("top-track", `time_range=${time_range}`);
      if (res.status === true) {
        setMusiks(res.data);
      } else {
        setMusiks([]);
      }
      setIsLoading(false);
    };
    getDataMusik();
  }, [time_range]);

  return (
    <div className="bg-gray-700  p-6 rounded-lg shadow-md shadow-black/30">
<h1 className="text-xl font-semibold text-center mb-5">
  {time_range === "long_term"
    ? "10 Musik yang Sering Saya Putar Dalam 1 Tahun Terakhir"
    : time_range === "medium_term"
    ? "10 Musik yang Sering Saya Putar Dalam 6 Bulan Terakhir"
    : "10 Musik yang Sering Saya Putar Dalam 1 Bulan Terakhir"}
</h1>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {musiks.map((musik, index) => (
            <Card musik={musik} key={index} index={index + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopTrack;
