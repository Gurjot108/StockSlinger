// src/components/StockCard.js
import React from "react";

export default function StockCard({ stock }) {
  const { name, price, changePercent, ticker } = stock;

  const changeClass = changePercent >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white p-4 shadow rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-2">
        {name} ({ticker})
      </h2>
      <p className="text-2xl font-bold mb-1">${price}</p>
      <p className={`text-sm ${changeClass}`}>
        {changePercent >= 0 ? `+${changePercent}%` : `${changePercent}%`}
      </p>
    </div>
  );
}
