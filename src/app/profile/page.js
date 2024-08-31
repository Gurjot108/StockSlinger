"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user, isLoading, error } = useUser();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-8">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        {!isLoading && !error && user ? (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Profile</h1>
            <p className="text-gray-700 mb-4">Name: {user.name}</p>
            <p className="text-gray-700 mb-4">Email: {user.email}</p>
            {/* Add profile settings and user details here */}
          </div>
        ) : (
          <div>Please log in to view your profile.</div>
        )}
      </main>
      <Footer />
    </>
  );
}
