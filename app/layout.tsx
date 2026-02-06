import type { Metadata } from "next";
import { Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400", "400"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Finn Ferguson",
  description: "software developer & design technologist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col h-screen pr-4 pl-4 ${instrumentSerif.variable} ${spaceMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
