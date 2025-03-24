import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conexa - Rick and Morty",
  description: "Created by Rodrigo Pérez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-full bg-white">{children}</body>
    </html>
  );
}
