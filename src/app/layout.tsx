import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Swiggy Autopilot | The Household OS",
  description: "Automated household restocking powered by Swiggy Instamart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>
        <div className="grid-bg" />
        <div className="bg-gradient" />
        {children}
      </body>
    </html>
  );
}
