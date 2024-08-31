"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Dashboard() {
  const { user, isLoading, error } = useUser();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-8">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        {!isLoading && !error && user ? (
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Dashboard</h1>
            <p className="text-gray-700 mb-4">
              Welcome to your dashboard, {user.name}. Here you can view your
              stock portfolio and recent activities.
            </p>
            {/* Add dashboard widgets and stock portfolio components here */}
          </div>
        ) : (
          <div>Please log in to view your dashboard.</div>
        )}
      </main>
      <Footer />
    </>
  );
}
