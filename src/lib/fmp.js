// src/lib/fmp.js

export async function fetchStockData(symbol) {
  const response = await fetch(
    `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${process.env.FMP_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch stock data");
  }
  const data = await response.json();
  return {
    dates: data.historical.map((item) => item.date),
    prices: data.historical.map((item) => item.close),
  };
}
