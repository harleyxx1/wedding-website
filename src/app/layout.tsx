import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angelica & Harley's Wedding | May 1, 2027",
  description:
    "Join us as we celebrate our love and commitment on May 1, 2027 in Sta. Maria, Bulacan, Philippines. Find all the details about our special day.",
  keywords: [
    "wedding",
    "Angelica and Harley",
    "wedding invitation",
    "Sta. Maria Bulacan wedding",
  ],
  authors: [{ name: "Angelica & Harley" }],
  openGraph: {
    title: "Angelica & Harley's Wedding",
    description: "Join us for our wedding celebration on May 1, 2027",
    type: "website",
    locale: "en_US",
    siteName: "Angelica & Harley's Wedding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelica & Harley's Wedding",
    description: "Join us for our wedding celebration on May 1, 2027",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#9B7EBD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
