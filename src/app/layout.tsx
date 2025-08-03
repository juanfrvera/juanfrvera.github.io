import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Vera - Full Stack Engineer",
  description: "Full Stack Engineer with 6 years of experience. I like to make minimalist websites, focusing on functionality and performance.",
  keywords: ["Juan Vera", "Full Stack Engineer", "Web Developer", "Portfolio", "JavaScript", "TypeScript", "React", "Next.js"],
  authors: [{ name: "Juan Vera" }],
  openGraph: {
    title: "Juan Vera - Full Stack Engineer",
    description: "Full Stack Engineer with 6 years of experience",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Vera - Full Stack Engineer",
    description: "Full Stack Engineer with 6 years of experience",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
