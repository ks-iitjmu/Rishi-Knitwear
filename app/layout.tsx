import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Fustat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishi Knitwear",
  description:
    "Rishi Knitwear is a Ludhiana-based apparel brand specializing in stylish and comfortable knitwear, including hoodies, sweatshirts, pullovers, and jackets. With a commitment to quality craftsmanship and contemporary designs, we cater to diverse fashion needs, ensuring every piece reflects our dedication to excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${fustat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
