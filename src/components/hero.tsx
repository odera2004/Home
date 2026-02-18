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

  const goldGradient = {
    background: 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 40%, #b38728 70%, #fbf5b7 85%, #aa771c 100%)',
    color: '#1a0f00',
  }

  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - Explicit lower Z-index */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: 'transform',
        }}
      >
        <img
          src="https://i.pinimg.com/1200x/62/e8/06/62e806f8470cf0341f9360e6d2e67bfd.jpg"
          alt="Luxury Real Estate Background"
          className="w-full h-full object-cover object-center scale-110"
          loading="eager"
        />
        {/* Overlays inside the background div to ensure they stay behind text */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
      </div>

      {/* Content - High Z-index and relative positioning */}
      <div className="relative z-30 w-full px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <span className="inline-block text-accent font-medium tracking-[0.3em] uppercase text-[10px] mb-4 animate-fadeIn">
            Naires Media Group
          </span>

          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-[1.1] drop-shadow-2xl">
            Visuals that <span className="italic text-accent">Attract.</span><br/>
            Websites that <span className="italic text-accent">Convert.</span>
          </h1>

          <p className="font-playfair text-white/90 mb-10 leading-relaxed text-base md:text-xl max-w-2xl mx-auto font-light">
            The digital partner for Kenya&apos;s elite developers. We combine
            cinematic media with high-performance tech to sell listings faster.
          </p>

          {/* Buttons - Stacked on tiny mobile, side-by-side on sm+ */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Link
              href="/booking"
              className="w-full sm:w-auto rounded-full px-8 py-4 text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-black/40"
              style={goldGradient}
            >
              Book Session
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto rounded-full px-8 py-4 text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 border border-white/30 text-white backdrop-blur-sm hover:bg-white hover:text-black"
            >
              See Portfolio
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens to save space */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden sm:block">
        <div className="flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  )
}