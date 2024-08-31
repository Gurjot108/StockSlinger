"use client";

import React, { useEffect, useState } from "react";

const StockData = () => {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch("/api/stocks"); // Your backend API route
        if (!response.ok) throw new Error("Error fetching stock data");
        const data = await response.json();
        setStocks(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchStocks();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Stock Data</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            {stock.name} ({stock.symbol}): ${stock.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockData;
