'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Real Estate Broker',
    company: 'Luxury Homes Kenya',
    content:
      'The cinematic quality of their work transformed how we present properties. Our sales cycle has improved dramatically.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    title: 'Property Developer',
    company: 'Prime Developments',
    content:
      'Professional, efficient, and incredibly creative. They understood our vision and delivered beyond expectations.',
    rating: 5,
  },
  {
    name: 'Victoria Okonkwo',
    title: 'Marketing Director',
    company: 'Elite Estates Group',
    content:
      'Their drone footage and cinematic videos are game-changers. Buyers are more engaged and decisions happen faster.',
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="bg-secondary rounded-lg p-8 sm:p-12 relative animate-fadeInUp">
          {/* Testimonial Content */}
          <div className="min-h-64 flex flex-col justify-between transition-all duration-500">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                )
              )}
            </div>

            {/* Quote */}
            <p className="text-2xl font-light text-primary mb-8 leading-relaxed italic">
              "{testimonials[current].content}"
            </p>

            {/* Author */}
            <div>
              <p className="font-semibold text-primary">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-primary text-opacity-60">
                {testimonials[current].title} at {testimonials[current].company}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-12 justify-center">
            <button
              onClick={prev}
              className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current ? 'bg-accent w-8' : 'bg-primary bg-opacity-30'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}