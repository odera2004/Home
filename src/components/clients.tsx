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
                {/* Logo initials with elegant serif styling */}
                <div
                  className={`text-7xl font-playfair mb-4 transition-all duration-500 ${
                    hovered === idx ? 'text-[#C5A059]' : 'text-[#1A1A1A] opacity-80'
                  }`}
                >
                  {logo.initials}
                </div>

                {/* Brand name */}
                <p className="text-[#666666] font-light tracking-[0.2em] uppercase text-xs">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE SECTION - LOCAL HIGH-QUALITY VIDEO */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-secondary to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-8">
            <div className="space-y-4">
               <h3 className="font-playfair text-4xl font-light tracking-tight">Experience Our Quality</h3>
               <div className="h-[1px] w-12 bg-amber-500" />
            </div>
            
            <div className="font-playfair text-primary mb-6 leading-tight animate-fadeInUp">
              <p>
                To see more of our cinematic storytelling and the luxury clients we partner with, 
                visit our Instagram showcase:{" "}
                <a
                  href="https://instagram.com/four.horsemen.media"
                  className="text-primary-500 underline underline-offset-8 hover:text-amber-400 transition-colors"
                >
                  @four.horsemen.media
                </a>.
              </p>

              <p>
                Ready to elevate your property? Reach out for a full portfolio:{" "}
                <a
                  href="mailto:contact@fourhorsemenmedia.com"
                  className="text-primary-500 underline underline-offset-8 hover:text-amber-400 transition-colors"
                >
                  contact@fourhorsemenmedia.com
                </a>.
              </p>
            </div>
          </div>

          {/* RIGHT VIDEO - ORGANIC LEAF SHAPE */}
          <div className="relative group w-full max-w-md mx-auto md:ml-auto">
            {/* Subtle glow effect */}
            <div className="absolute -inset-4 bg-amber-500/5 blur-3xl rounded-full opacity-50 transition-opacity duration-700" />
            
            <div className="relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] 
              rounded-tl-[120px] rounded-br-[120px] 
              md:rounded-tl-[240px] md:rounded-br-[240px] 
              rounded-tr-2xl rounded-bl-2xl
              aspect-[3/4] bg-neutral-900 border border-white/5"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              >
                {/* MAKE SURE TO ADD THE VIDEO TO YOUR PUBLIC FOLDER: 
                   1. Place the .MOV or .mp4 file in /public/videos/ 
                   2. Rename it to showcase.mp4 (or update the src below)
                */}
                <source src="/videos/showcase.mov" type="video/mov" />
                Your browser does not support the video tag.
              </video>
              
              {/* Luxury glass tint overlay */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}