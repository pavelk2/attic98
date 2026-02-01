import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Attic 98 - Monthly Friends for Friends Conference",
  description: "Role guide for the Attic 98 monthly conference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
