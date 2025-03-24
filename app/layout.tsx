import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/redux/Provider";

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
      <body className="w-full h-full bg-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
