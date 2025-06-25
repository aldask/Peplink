import { useEffect, useState } from "react";
import axios from "axios";
import type { ChuckResponse } from "../types/User";

const useChuck = () => {
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
    const interval = setInterval(fetchChuckPhrase, 15000);
    return () => clearInterval(interval);
  }, []);

  return {
    chuckSays,
    lastFetched,
    fetchChuckPhrase,
  };
};

export default useChuck;
