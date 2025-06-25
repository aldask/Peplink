import useChuck from "../hooks/useChuck";

const ChuckPage = () => {
  const { chuckSays, lastFetched, fetchChuckPhrase } = useChuck();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-10">
      <div className="relative max-w-4xl w-full bg-white rounded-2xl shadow-md border border-amber-400 p-10">
        <div className="flex items-center gap-5 mb-8">
          <img
            src={chuckSays?.icon_url}
            alt="Chuck Norris"
            className="w-20 h-20 rounded-full border-4 border-amber-600"
          />
          <h2 className="text-2xl font-semibold text-amber-600">
            Chuck Wisdom Says:
          </h2>
        </div>

        <blockquote className="text-xl sm:text-2xl italic leading-relaxed text-gray-700 mb-8">
          “{chuckSays?.value}”
        </blockquote>
        {lastFetched && (
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {lastFetched.toLocaleString()}
          </p>
        )}
        <button
          onClick={fetchChuckPhrase}
          className="absolute top-6 right-6 bg-gray-200 text-gray-800 rounded-full p-1 shadow-md transition duration-300 transform hover:-translate-y-1 active:scale-95"
          title="Fetch new quote"
        >
          🔁
        </button>
      </div>
    </div>
  );
};

export default ChuckPage;
