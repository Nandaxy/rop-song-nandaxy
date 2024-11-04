import { useState } from "react";
import {
  MdAccessTime,
  MdCalendarToday,
  MdTimeline,
  MdPlayCircleFilled,
} from "react-icons/md";

import TopTrack from "./components/TopTrack";
import Footer from "./components/ui/Footer";
import CurrentPlaying from "./components/CurrentPlaying";

const App = () => {
  const [activeTab, setActiveTab] = useState("short");

  const tabs = [
    { id: "short", label: "Short Term", icon: <MdAccessTime /> },
    { id: "medium", label: "Medium Term", icon: <MdCalendarToday /> },
    { id: "long", label: "Long Term", icon: <MdTimeline /> },
    { id: "playing", label: "Sedang Diputar", icon: <MdPlayCircleFilled /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "short":
        return <TopTrack time_range={"short_term"} />;
      case "medium":
        return <TopTrack time_range={"medium_term"} />;
      case "long":
        return <TopTrack time_range={"long_term"} />;
      case "playing":
        return <CurrentPlaying />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen animated-gradient flex justify-center items-center text-white p-0 md:p-4">
        <div className="bg-gray-800/95 md:rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full shadow-white/60">
          <div className="pt-20 pb-6 px-2 md:p-6 min-h-80 ">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Musik Favorit Saya
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
            <div>{renderContent()}</div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
