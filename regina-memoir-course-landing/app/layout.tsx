import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "You Should Really Write a Book — Founding Cohort with Regina Brooks",
  description: "A 6-week live memoir course with literary agent Regina Brooks. Build your concept, outline, sample chapter, and publishing path.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "You Should Really Write a Book — Founding Cohort",
    description: "Apply for the live memoir course with Regina Brooks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
