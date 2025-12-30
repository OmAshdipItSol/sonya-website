import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital-I | Smart Surveillance & Security Solutions in Pune",
  description:
    "Professional CCTV, EPABX, Access Control & security solutions for homes, offices & enterprises in Pune. Expert installation & 24/7 monitoring.",
  keywords:
    "CCTV Pune, surveillance systems, security systems, EPABX, access control, video door phones, time attendance",
  generator: "v0.app",
  authors: [{ name: "Digital-I", url: "https://digital-i.com" }],
  creator: "Digital-I",
  publisher: "Digital-I",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digital-i.com",
    siteName: "Digital-I",
    title: "Digital-I | Smart Surveillance & Security Solutions",
    description:
      "Professional CCTV, EPABX, Access Control & security solutions for homes, offices & enterprises in Pune",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Digital-I Security Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital-I | Smart Surveillance & Security Solutions",
    description: "Professional CCTV, EPABX, Access Control & security solutions for Pune",
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://digital-i.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Digital-I",
              description: "Professional Security & Surveillance Solutions",
              url: "https://digital-i.com",
              telephone: "+919158031664",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              areaServed: ["Pune", "Maharashtra", "India"],
              serviceType: [
                "CCTV Surveillance",
                "EPABX Systems",
                "Access Control",
                "Video Door Phones",
                "Time Attendance Systems",
                "Security Systems",
              ],
              priceRange: "$$",
              image: "/images/logo.jpeg",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
