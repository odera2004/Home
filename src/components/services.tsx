'use client'

import { Video, Camera, Bone as Drone, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: 'Videography',
    description: 'Cinematic walkthrough tours that showcase every detail with professional lighting and smooth movements.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'High-resolution interior and exterior photography that captures the essence of luxury properties.',
  },
  {
    icon: Drone,
    title: 'Drone Coverage',
    description: 'Aerial perspectives that reveal property context, surrounding areas, and unique architectural features.',
  },
  {
    icon: Sparkles,
    title: 'Social Media Content',
    description: 'Dynamic reels and short-form content optimized for Instagram, TikTok, and other platforms.',
  },
]

export function Services() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            What We Do
          </h2>
          <p className="text-lg text-primary text-opacity-60">
            Comprehensive media solutions for luxury real estate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`bg-white p-8 rounded-lg border border-border hover:border-accent transition-all hover:shadow-lg group animate-fadeInUp`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-4 inline-block p-3 bg-accent bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-primary text-opacity-70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}