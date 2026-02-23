'use client'

import { Video, Camera, Zap, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: 'Cinematic Videography',
    description: 'Bespoke walkthrough tours utilizing professional lighting and motion control to narrate the story of every space.',
  },
  {
    icon: Camera,
    title: 'Website Design',
    description: 'Strategically designed real estate websites built to showcase developments, capture qualified inquiries, and convert visitors into serious buyers',
  },
  {
    icon: Zap, // Swapped Drone for Zap for a cleaner "Aerial" look
    title: 'Aerial Shots',
    description: 'Advanced 4K drone maneuvers that contextualize the property within its environment and landscape.',
  },
  {
    icon: Sparkles,
    title: 'Premium Photography',
    description: 'Professional real estate photography designed to showcase properties with clarity, depth, and visual appeal',
  },
]

export function Services() {
  return (
    <section className="py-32 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-playfair text-5xl md:text-7xl text-primary leading-tight font-light">
              Elevating the <br /> 
              <span className="italic">Visual Standard</span>
            </h2>
          </div>
          <p className="font-playfair text-primary/60 text-lg max-w-sm border-l border-accent/30 pl-6 pb-2">
            Providing comprehensive, high-performance media solutions tailored for East Africa&apos;s most prestigious listings.
          </p>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`group relative bg-white p-10 rounded-2xl border border-neutral-100 transition-all duration-500 
                  hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2
                  ${idx % 2 !== 0 ? 'md:mt-16' : ''} // This creates the staggered effect
                `}
              >
                {/* Background Number */}
                <span className="absolute top-6 right-10 text-8xl font-playfair font-bold text-neutral-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  0{idx + 1}
                </span>

                <div className="relative z-10">
                  <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-xl shadow-lg group-hover:bg-accent transition-colors duration-500">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="font-playfair text-3xl font-medium text-primary mb-5">
                    {service.title}
                  </h3>
                  
                  <p className="text-primary/60 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-accent font-medium tracking-widest text-xs uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                    Learn More 
                    <span className="h-[1px] w-8 bg-accent" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}