'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const clients = [
  { 
    src: '/minah.jpeg', 
    name: 'Minah Heights',
    tagline: 'Luxury Residential Development',
    color: 'bg-[#bf953f]/5'
  },
  { 
    src: '/roots.jpeg', 
    name: 'Roots Motel Sagana',
    tagline: 'Premium Hospitality & Leisure',
    color: 'bg-[#1A1A1A]/5'
  },
]

export function Clients() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <>
      <section ref={ref} className="py-16 md:py-24 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs block mb-4">Strategic Partners</span>
            <h2 className="font-playfair text-4xl md:text-7xl text-[#1A1A1A] leading-tight font-light">
              Elevating <span className="italic">the Standard</span>
            </h2>
          </div>

          {/* Grid Layout: Stacks on mobile, Side-by-side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`group relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] border border-neutral-100 flex flex-col items-center justify-center p-8 md:p-12 min-h-[300px] md:h-[500px] transition-all duration-700 hover:shadow-xl ${client.color}`}
              >
                {/* Arrow Icon - Hidden on small mobile */}
                <div className="absolute top-4 right-4 md:top-8 md:right-8 opacity-40 md:opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-amber-600 w-6 h-6 md:w-8 md:h-8" />
                </div>

                {/* The Logo - Centered and Responsive */}
                <div className="relative z-10 mb-6 md:mb-0 transform transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={client.src}
                    alt={client.name}
                    className="w-auto h-24 md:h-40 max-w-[200px] md:max-w-full object-contain"
                  />
                </div>

                {/* Info: Always visible on mobile, slides up on Desktop hover */}
                <div className="md:absolute md:bottom-0 md:left-0 md:right-0 md:p-10 md:translate-y-10 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 text-center">
                  <p className="text-[#1A1A1A] font-playfair text-xl md:text-2xl font-bold">{client.name}</p>
                  <p className="text-amber-600 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] mt-1 md:mt-2 font-bold">
                    {client.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section - Responsive Fixes */}
      <section className="relative py-16 md:py-24 bg-[#F9F9F7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-10 md:gap-12 items-center">
            
            <div className="lg:col-span-2 space-y-6 md:space-y-10 z-10 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-amber-600 font-medium tracking-[0.3em] uppercase text-xs block">Portfolio Highlight</span>
                <h3 className="font-playfair text-4xl md:text-6xl font-light text-[#1A1A1A] leading-[1.1]">
                  Visual <br className="hidden md:block" /> 
                  <span className="italic">Storytelling</span>
                </h3>
                <div className="h-[2px] w-16 md:w-20 bg-amber-500/50 mx-auto lg:ml-0" />
              </div>
              
              <div className="space-y-6 font-playfair text-base md:text-lg text-neutral-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                <p>
                  We don't just film spaces; we capture the emotion of luxury living. This showcase 
                  highlights our technical precision in lighting and composition.
                </p>
                <div className="pt-4 flex flex-col gap-4 items-center lg:items-start">
                  <a
                    href="https://www.instagram.com/nairesmedia"
                    target="_blank"
                    className="group flex items-center gap-3 text-[#1A1A1A] text-sm md:text-base font-bold hover:text-amber-600 transition-colors"
                  >
                    <span className="hidden md:block w-8 h-[1px] bg-[#1A1A1A] group-hover:w-12 group-hover:bg-amber-600 transition-all" />
                    Follow @nairesmedia
                  </a>
                  <Link
                    href="/booking"
                    className="group flex items-center gap-3 text-[#1A1A1A] text-sm md:text-base font-bold hover:text-amber-600 transition-colors"
                  >
                    <span className="hidden md:block w-8 h-[1px] bg-[#1A1A1A] group-hover:w-12 group-hover:bg-amber-600 transition-all" />
                    Inquire for Bookings
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 relative group w-full">
              <div className="relative p-2 md:p-3 bg-white border border-neutral-200 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden transition-transform duration-700 hover:scale-[1.01]">
                <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden relative">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/nSKxRsRH4YU?controls=1&modestbranding=1"
                    title="Showcase"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}