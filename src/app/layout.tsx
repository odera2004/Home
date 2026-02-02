import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans", // Optional: defines the CSS variable name
});

const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: 'Cinematic Media | Luxury Real Estate Photography & Videography',
  description:
    'Professional cinematic media services for luxury real estate. From Westlands to Kilimani — aerial drone footage, videography, photography, and social media content.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Cinematic Media | Luxury Real Estate Photography & Videography',
    description: 'Elevate your luxury property listings with professional cinematic media services',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* FIX: Added backticks and properly injected the font variables */}
      <body className={`${_geist.variable} ${_geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}