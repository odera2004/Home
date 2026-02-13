import React from "react"
import type { Metadata } from "next"
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Berkshire_Swash,
  Playwrite_AU_NSW,
  GFS_Didot,
  Courier_Prime,
} from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const berkshire = Berkshire_Swash({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-berkshire",
})

/* Playwrite DOES NOT support subsets */
const playwrite = Playwrite_AU_NSW({
  variable: "--font-playwrite",
})

const didot = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-didot",
})

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-typewriter",
})

export const metadata: Metadata = {
  title: "Cinematic Media | Luxury Real Estate Photography & Videography",
  description:
    "Professional cinematic media services for luxury real estate. From Westlands to Kilimani — aerial drone footage, videography, photography, and social media content.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${playfair.variable}
        ${berkshire.variable}
        ${playwrite.variable}
        ${didot.variable}
        ${courier.variable}
      `}
    >
      <body className="font-typewriter antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
