// src/app/layout.js
"use client"; // Ensure this is treated as a client component

import { UserProvider } from "@auth0/nextjs-auth0/client"; // Import the UserProvider
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
