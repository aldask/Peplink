import { useEffect, useState } from "react";
import axios from "axios";
import type { ChuckResponse } from "../types/Other";

const API_URL = "https://api.chucknorris.io/jokes/random?category=dev";
const REFRESH_INTERVAL = 15000;

const useChuck = () => {
  const [chuckSays, setChuckSays] = useState<ChuckResponse>();
  const [lastFetched, setLastFetched] = useState<Date>();
  const [countdown, setCountdown] = useState(REFRESH_INTERVAL / 1000);

  const fetchChuckPhrase = async () => {
    try {
      const response = await axios.get(API_URL);
      setChuckSays(response.data);
      setLastFetched(new Date());
      setCountdown(REFRESH_INTERVAL / 1000);
    } catch (error) {
      console.error("Error from Chuck (Which is impossible).");
    }
  };

  useEffect(() => {
    fetchChuckPhrase();
    const interval = setInterval(fetchChuckPhrase, REFRESH_INTERVAL);
    const clockInterval = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
      clearInterval(clockInterval);
    };
  }, []);

  return {
    chuckSays,
    lastFetched,
    countdown,
  };
};

export default useChuck;
