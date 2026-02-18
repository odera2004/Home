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
          loading="eager"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      {/* Content - Perfectly centered with consistent width */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading - Main message */}
          <h1 className="font-playfair text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4 sm:mb-5 md:mb-6 leading-tight animate-fadeInUp animation-delay-200">
            Visuals that Attract Buyers.
            <br className="hidden xs:block" />
            Websites That Convert Them.
          </h1>

          {/* Paragraph - Description */}
          <p className="font-playfair text-white/80 mb-8 sm:mb-9 md:mb-10 leading-relaxed text-sm sm:text-base md:text-lg px-4 sm:px-6 animate-fadeInUp animation-delay-300 max-w-2xl mx-auto">
            The all-in-one digital partner for Kenya's developers and agents. We combine
            cinematic media with high-performance websites to sell your listings faster.
          </p>

          {/* Buttons - Side by side with consistent sizing */}
          <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center animate-fadeInUp animation-delay-400 px-4 max-w-md mx-auto">
            <Link
              href="/booking"
              className="flex-1 rounded-full px-3 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
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
              <span>Book a Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>

            <Link
              href="/about"
              className="flex-1 rounded-full px-3 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
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
              <span>See Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white/60"
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