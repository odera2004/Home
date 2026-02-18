'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const clientLogos = [
  { initials: 'LH', name: 'Luxury Homes' },
  { initials: 'PP', name: 'Prime Properties' },
  { initials: 'EG', name: 'Elite Group' },
]

export function Clients() {
  const [hovered, setHovered] = useState<number | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <>
      {/* CLIENTS SECTION */}
      <section ref={ref} className="py-24 bg-[#F9F9F7] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="font-playfair text-5xl md:text-6xl text-[#1A1A1A] mb-6 leading-tight max-w-3xl mx-auto font-light">
              Trusted by Leading Real Estate Brands
            </h2>

            <p className="font-playfair text-[#4A4A4A] text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Developers and agents trust us to present their properties with
              precision, elegance, and performance-driven visuals.
            </p>
          </div>

          <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="w-full sm:w-72 h-52 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 cursor-pointer bg-white border border-[#E5E5E1] hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div
                  className={`text-7xl font-playfair mb-4 transition-all duration-500 ${
                    hovered === idx ? 'text-[#C5A059]' : 'text-[#1A1A1A] opacity-80'
                  }`}
                >
                  {logo.initials}
                </div>
                <p className="text-[#666666] font-light tracking-[0.2em] uppercase text-xs">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW OUTSTANDING VIDEO SHOWCASE SECTION */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            {/* LEFT SIDE: TEXT CONTENT (2 Cols) */}
            <div className="lg:col-span-2 space-y-10 z-10">
              <div className="space-y-4">
                <span className="text-amber-600 font-medium tracking-[0.3em] uppercase text-sm block">Portfolio Highlight</span>
                <h3 className="font-playfair text-5xl md:text-6xl font-light text-primary leading-[1.1]">
                  Visual <br /> 
                  <span className="italic">Storytelling</span>
                </h3>
                <div className="h-[2px] w-20 bg-amber-500/50" />
              </div>
              
              <div className="space-y-6 font-playfair text-lg text-neutral-600 leading-relaxed">
                <p>
                  We don't just film spaces; we capture the emotion of luxury living. This showcase 
                  highlights our technical precision in lighting and composition.
                </p>
                <div className="pt-4 space-y-4">
                  <a
                    href="https://instagram.com/four.horsemen.media"
                    className="group flex items-center gap-3 text-primary font-medium hover:text-amber-600 transition-colors"
                  >
                    <span className="w-8 h-[1px] bg-primary group-hover:w-12 group-hover:bg-amber-600 transition-all" />
                    Follow info@nairesmedia.com
                  </a>
                  <a
                    href="mailto:contact@fourhorsemenmedia.com"
                    className="group flex items-center gap-3 text-primary font-medium hover:text-amber-600 transition-colors"
                  >
                    <span className="w-8 h-[1px] bg-primary group-hover:w-12 group-hover:bg-amber-600 transition-all" />
                    Inquire for Bookings
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: CINEMATIC YOUTUBE FRAME (3 Cols) */}
            <div className="lg:col-span-3 relative group">
              {/* Decorative "Glass" Backdrop */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl -z-10 group-hover:bg-amber-200/50 transition-colors duration-1000" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-neutral-100 rounded-full blur-2xl -z-10" />

              {/* Main Video Frame */}
              <div className="relative p-3 bg-white border border-neutral-200 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
                <div className="aspect-video rounded-2xl overflow-hidden relative">
                  {/* YouTube Embed */}
                  <iframe
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/embed/nSKxRsRH4YU?autoplay=1&mute=1&loop=1&playlist=nSKxRsRH4YU&controls=0&modestbranding=1&rel=0"
                    title="Luxury Real Estate Showcase"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>

                  {/* High-End Texture Overlay (Invisible until hover) */}
                  <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-2xl group-hover:border-white/0 transition-all duration-500" />
                </div>
              </div>

              {/* Floating Stat/Label Card */}
              <div className="absolute -bottom-6 -right-6 md:right-10 bg-white p-6 rounded-xl shadow-xl border border-neutral-100 hidden md:block animate-bounce-slow">
                <p className="text-amber-600 text-xs tracking-widest uppercase font-bold mb-1">Live Preview</p>
                <p className="font-playfair italic text-primary text-lg">Cinematic 4K Quality</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}