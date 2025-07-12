import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
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
  title: "Safarfix - Aapka Plan Hamari Setting!",
  description: "Safarfix is your trusted Indian travel partner. Discover, plan, and book your next adventure with our curated packages and custom trip planner.",
  keywords: [
    "Safarfix",
    "Travel Agency",
    "India",
    "Tour Packages",
    "Custom Trips",
    "Adventure",
    "Family Holidays",
    "Romantic Getaways",
    "Travel Booking"
  ],
  openGraph: {
    title: "Safarfix - Aapka Plan Hamari Setting!",
    description: "Safarfix is your trusted Indian travel partner. Discover, plan, and book your next adventure with our curated packages and custom trip planner.",
    url: "https://safarfix.com",
    siteName: "Safarfix",
    images: [
      {
        url: "/safarfix-og.jpg",
        width: 1200,
        height: 630,
        alt: "Safarfix Travel Agency Hero Image"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-white min-h-screen flex flex-col`}
      >
        {/* Sticky Navigation Bar */}
        {/* Will be replaced with actual Navbar component */}
        <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-950/90 shadow-sm backdrop-blur">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
              <span className="italic font-semibold" style={{ fontFamily: 'cursive, \"Brush Script MT\", \"Comic Sans MS\", sans-serif', fontSize: '2rem', letterSpacing: '0.07em' }}>
                Safarfix
              </span>
            </a>
            <div className="hidden md:flex gap-6 text-base font-medium">
              <a href="/" className="hover:text-primary">Home</a>
              <a href="/destinations" className="hover:text-primary">Destinations</a>
              <a href="/packages" className="hover:text-primary">Packages</a>
              <a href="/custom-trip" className="hover:text-primary">Custom Trip</a>
              <a href="/about" className="hover:text-primary">About</a>
              <a href="/contact" className="hover:text-primary">Contact</a>
            </div>
          </nav>
        </header>
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
