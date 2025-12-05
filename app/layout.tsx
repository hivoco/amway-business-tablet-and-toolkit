import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: "Amway Business Tablet and Toolkit",
  description: "Your complete Amway business solution",
  openGraph: {
    title: "Amway Business Tablet and Toolkit",
    description: "Your complete Amway business solution",
    images: [
      {
        url: "/amway-svg.svg",
        width: 101,
        height: 34,
        alt: "Amway Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Amway Business Tablet and Toolkit",
    description: "Your complete Amway business solution",
    images: ["/amway-svg.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.className}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
