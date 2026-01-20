// src/app/layout.tsx

import type { ReactNode } from 'react';
import './globals.css';
import React from 'react';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>InkSesh Tattoo Marketplace</title>
        <meta name="description" content="Discover top tattoo artists, studios, and book your next session with InkSesh." />
      </head>
      <body>{children}</body>
    </html>
  );
}
