// src/api/fmp.js
import axios from "axios";

const API_KEY = "MeTRr9SagSmzeBq7lXuTNMV7jxLVuY5Q"; // Replace with your API key
const BASE_URL = "https://financialmodelingprep.com/api/v3";

export const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/quote/${symbol}?apikey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};

// Example function for fetching financial statements
export const fetchFinancialStatements = async (symbol) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/financials/income-statement/${symbol}?apikey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching financial statements:", error);
    throw error;
  }
};
