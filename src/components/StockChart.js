"use client";

// src/components/StockChart.js
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchStockData } from "../lib/fmp"; // Ensure this path is correct based on your setup

// Register ChartJS components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function StockChart() {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchStockData("AAPL"); // Example stock symbol
        setStockData(data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    }

    getData();
  }, []);

  if (!stockData) return <div>Loading...</div>;

  const chartData = {
    labels: stockData.dates, // assuming you have dates array in your data
    datasets: [
      {
        label: "Stock Price",
        data: stockData.prices, // assuming you have prices array in your data
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
}
