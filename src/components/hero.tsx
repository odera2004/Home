'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Limit parallax calculation on mobile for better battery/performance
      requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goldGradientStyle = {
    background: 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 40%, #b38728 70%, #fbf5b7 85%, #aa771c 100%)',
    color: '#1a0f00',
    boxShadow: '0 4px 20px rgba(184, 134, 11, 0.3)',
  }

  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. Optimized Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          // Reduced movement on mobile (0.1) vs Desktop (0.4) for better UX
          transform: `translateY(${typeof window !== 'undefined' && window.innerWidth < 768 ? scrollY * 0.1 : scrollY * 0.4}px)`,
          willChange: 'transform',
        }}
      >
        <img
          src="https://i.pinimg.com/1200x/62/e8/06/62e806f8470cf0341f9360e6d2e67bfd.jpg"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover object-center scale-125 md:scale-110"
        />
      </div>

      {/* 2. Responsive Overlays */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

      {/* 3. Content Area - Responsive Padding and Sizing */}
      <div className="relative z-10 text-center w-full max-w-5xl px-6 sm:px-10 lg:px-8">
        
        {/* Heading: Smaller and tighter on mobile, huge on desktop */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-[1.1] animate-fadeInUp">
          Visuals that <span className="text-[#fcf6ba] md:text-white">Attract</span> Buyers.<br className="hidden sm:block" />
          <span className="font-light italic block mt-2 sm:inline sm:mt-0">Websites That Convert.</span>
        </h1>

        {/* Paragraph: Controlled width for better line-breaks on small screens */}
        <p className="font-inter text-white/80 mb-10 leading-relaxed text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
          The digital partner for Kenya's top developers. 
          Cinematic media meets high-performance web design to sell listings faster.
        </p>

        {/* Buttons: Stack on mobile, side-by-side on tablet+ */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fadeInUp animation-delay-300 w-full max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/booking"
            className="w-full sm:w-auto rounded-full px-8 py-4 text-sm md:text-base font-bold transition-all flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
            style={goldGradientStyle}
          >
            Book a Session
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#portfolio"
            className="w-full sm:w-auto rounded-full px-8 py-4 text-sm md:text-base font-semibold text-white border border-white/40 backdrop-blur-md bg-white/5 hover:bg-white/20 transition-all flex items-center justify-center"
          >
            See Portfolio
          </Link>
        </div>
      </div>

      {/* 4. Minimalist Scroll Indicator (Hidden on very small screens to save space) */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden xs:block">
        <div className="animate-bounce flex flex-col items-center gap-1">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animation-delay-200 { animation-delay: 0.15s; }
        .animation-delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  )
}