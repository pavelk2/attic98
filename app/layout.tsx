import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Attic98 - Home Conference",
  description: "Role guide for the Attic98 Home Conference",
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
