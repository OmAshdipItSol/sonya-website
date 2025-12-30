import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* GOOGLE SITE VERIFICATION */}
        <meta
          name="google-site-verification"
          content="X0T_hEywc2vs5pq0fgPVcYwYjFwsJHF6yDR2nuR4EVY"
        />

        {/* THEME & VIEWPORT */}
        <meta name="theme-color" content="#0f172a" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />

        {/* SEO & CANONICAL */}
        <link rel="canonical" href="https://digitall-i.vercel.app" />

        {/* SCHEMA / LOCAL BUSINESS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Digital-I",
              description: "Professional Security & Surveillance Solutions",
              url: "https://digitall-i.vercel.app",
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
