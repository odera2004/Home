import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
          Ready to Showcase Your Property?
        </h2>

        <p className="text-xl text-accent mb-12 max-w-2xl mx-auto">
          Let us create cinematic media that will captivate buyers and elevate your listings.
        </p>

        <Link
          href="/booking"
          className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-primary font-semibold rounded hover:bg-opacity-90 transition-all group"
        >
          Book Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}