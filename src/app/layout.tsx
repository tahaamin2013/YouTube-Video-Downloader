import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Powerful YouTube Video Downloader - Fast, High-Quality Downloads",
  description: "Transform your online video experience with our advanced YouTube Video Downloader. Download YouTube videos at lightning speed in high quality, ready for offline enjoyment. Our user-friendly interface ensures effortless downloads. Explore the ultimate video entertainment solution at [Your Website URL] and elevate your viewing experience today!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
