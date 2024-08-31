import { useState, useEffect } from "react";
import { fetchStockData } from "../lib/api";

const useStockData = (symbol) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchStockData(symbol);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [symbol]);

  return { data, loading, error };
};

export default useStockData;
