'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const clientLogos = [
  { name: 'Luxury Homes', color: 'from-gray-400 to-gray-600' },
  { name: 'Prime Properties', color: 'from-gray-500 to-gray-700' },
  { name: 'Elite Estates', color: 'from-gray-400 to-gray-600' },
  { name: 'Signature Living', color: 'from-gray-500 to-gray-700' },
  { name: 'Crown Residences', color: 'from-gray-400 to-gray-600' },
]

export function Clients() {
  const [hovered, setHovered] = useState<number | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIX 1: Added backticks around the className string */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Trusted by Industry Professionals
          </h2>
          <p className="text-lg text-primary text-opacity-60">
            Leading real estate brands trust us for their most important assets
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-8 min-w-max px-4">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* FIX 2: Fixed the syntax for the dynamic background color */}
                <div
                  className={`w-40 h-24 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer
                    ${
                      hovered === idx
                        ? `bg-gradient-to-br ${logo.color}`
                        : 'bg-gradient-to-br from-gray-300 to-gray-500 opacity-60 grayscale'
                    }
                  `}
                >
                  <span className="text-white text-center font-semibold text-sm px-4">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}