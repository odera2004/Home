'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          willChange: 'transform',
        }}
      >
        <img
          src="https://i.pinimg.com/1200x/62/e8/06/62e806f8470cf0341f9360e6d2e67bfd.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center scale-110"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Subtle gradient overlay — bottom fade for scroll indicator legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-7xl text-white lg:text-5xl font-bold mb-6 leading-tight max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
          Visuals that Attract Buyers.
          <br />
          Websites That Convert Them.
        </h1>

        <p className="font-playfair text-white/80 mb-10 leading-relaxed text-lg animate-fadeInUp animation-delay-300">
          The all-in-one digital partner for Kenya's developers and agents. We combine
          cinematic media with high-performance websites to sell your listings faster.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp animation-delay-400">
          {/* Gold Book a Session button */}
          <Link
            href="/booking"
            className="rounded-full px-8 py-4 font-semibold transition-all flex items-center gap-2 group"
            style={{
              background: 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 40%, #b38728 70%, #fbf5b7 85%, #aa771c 100%)',
              color: '#1a0f00',
              boxShadow: '0 4px 24px rgba(184, 134, 11, 0.5)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.filter = 'brightness(1.1)'
              el.style.boxShadow = '0 6px 32px rgba(184, 134, 11, 0.7)'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.filter = 'brightness(1)'
              el.style.boxShadow = '0 4px 24px rgba(184, 134, 11, 0.5)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Book a Session
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#portfolio"
             className="rounded-full px-8 py-4 font-semibold transition-all flex items-center gap-2 group"
            style={{
              background: 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 40%, #b38728 70%, #fbf5b7 85%, #aa771c 100%)',
              color: '#1a0f00',
              boxShadow: '0 4px 24px rgba(184, 134, 11, 0.5)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.filter = 'brightness(1.1)'
              el.style.boxShadow = '0 6px 32px rgba(184, 134, 11, 0.7)'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.filter = 'brightness(1)'
              el.style.boxShadow = '0 4px 24px rgba(184, 134, 11, 0.5)'
              el.style.transform = 'translateY(0)'
            }}
          >
            See Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}