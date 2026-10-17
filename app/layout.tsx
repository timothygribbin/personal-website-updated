import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tjgribbin.com"),
  title: "TJ Gribbin — Software Engineer",
  description: "Software engineer and computer science student at Northeastern University.",
  openGraph: {
    type: "website",
    url: "https://tjgribbin.com/",
    title: "TJ Gribbin — Software Engineer",
    description: "Software engineer and computer science student at Northeastern University.",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "TJ Gribbin — Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/social-preview.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}><body>{children}<Analytics /></body></html>;
}
