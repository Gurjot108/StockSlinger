// src/components/Header.js
"useclient";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Header() {
  const { user, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          StockSlinger
        </Link>
        <div>
          <Link href="/dashboard" className="mr-4">
            Dashboard
          </Link>
          <Link href="/market-overview" className="mr-4">
            Market Overview
          </Link>
          {user ? (
            <>
              <Link href="/profile" className="mr-4">
                Profile
              </Link>
              <a
                href="/api/auth/logout"
                className="bg-red-500 px-4 py-2 rounded"
              >
                Logout
              </a>
            </>
          ) : (
            <a href="/api/auth/login" className="bg-blue-500 px-4 py-2 rounded">
              Login
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
