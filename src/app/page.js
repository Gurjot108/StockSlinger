// src/app/page.js
"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StockChart from "@/components/StockChart";
import StockData from "@/components/StockData";
import { useUser } from "@auth0/nextjs-auth0/client";

const stockSymbol = "AAPL"; // Example stock symbol

export default function HomePage() {
  const { user, isLoading, error } = useUser();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-8">
        {isLoading && (
          <div className="text-center text-gray-500">Loading...</div>
        )}
        {error && (
          <div className="text-center text-red-500">{error.message}</div>
        )}
        {!isLoading && !error && user ? (
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
              Welcome to StockSlinger
            </h1>
            <p className="text-gray-700 mb-4">
              This is your personalized stock market dashboard. Explore market
              trends, check stock prices, and manage your portfolio.
            </p>
            <div className="mb-6">
              <StockChart symbol={stockSymbol} />
            </div>
            <div>
              <StockData symbol={stockSymbol} />
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-700">
            Please log in to access your personalized stock market dashboard.
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
