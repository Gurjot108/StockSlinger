"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import StockChart from "@/components/StockChart"; // Assuming you create a StockChart component

export default function MarketOverview() {
  const { user, isLoading, error } = useUser();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-8">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        {!isLoading && !error && user ? (
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
              Market Overview
            </h1>
            <p className="text-gray-700 mb-4">
              Here you can view the latest market trends and stock data.
            </p>
            <StockChart />
            {/* Add other market overview widgets here */}
          </div>
        ) : (
          <div>Please log in to view market overview.</div>
        )}
      </main>
      <Footer />
    </>
  );
}
