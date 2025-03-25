import './globals.css';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emilist - Connect with Skilled Professionals',
  description: 'Emilist connects homeowners, contractors, businesses, and customers with skilled artisans, handymen, and project experts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
