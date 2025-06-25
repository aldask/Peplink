import useChuck from "../hooks/useChuck";
import { useNavigate } from "react-router-dom";

const ChuckPage = () => {
  const { chuckSays, lastFetched, fetchChuckPhrase } = useChuck();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center px-4 sm:px-10 box-border overflow-hidden">
      <div className="relative max-w-3xl w-full bg-white rounded-3xl shadow-xl border border-amber-300 p-6 sm:p-10 flex flex-col items-center">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1"
        >
          ← Back
        </button>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4 text-center sm:text-left mb-8 mt-4 w-full justify-center">
          <img
            src={chuckSays?.icon_url}
            alt="Chuck Norris"
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto sm:mx-0 rounded-full border-4 border-amber-600 shadow-md"
          />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-600 tracking-tight leading-snug">
            Chuck Wisdom Says:
          </h2>
        </div>
        <blockquote className="text-lg sm:text-2xl italic leading-relaxed text-gray-800 mb-8 text-center px-2 sm:px-4">
          “{chuckSays?.value}”
        </blockquote>
        {lastFetched && (
          <p className="text-sm text-gray-500 mb-8 text-center">
            Last updated: {lastFetched.toLocaleString()}
          </p>
        )}
        <button
          onClick={fetchChuckPhrase}
          className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-3xl shadow-md transition-transform duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
        >
          ↻ New Quote
        </button>
      </div>
    </div>
  );
};

export default ChuckPage;
