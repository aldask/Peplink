import { useEffect, useState } from "react";
import axios from "axios";
import type { ChuckResponse } from "../types/User";

const ChuckPage = () => {
  const [chuckSays, setChuckSays] = useState<ChuckResponse>();
  const [lastFetched, setLastFetched] = useState<Date>();

  const fetchChuckPhrase = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random?category=dev"
      );
      setChuckSays(response.data);
      setLastFetched(new Date());
    } catch (error) {
      console.error("Error from Chuck (Which is impossible).");
    }
  };

  useEffect(() => {
    fetchChuckPhrase();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <p>Chuck says: {chuckSays?.value}</p>
    </div>
  );
};

export default ChuckPage;
