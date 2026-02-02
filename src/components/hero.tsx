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

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-secondary to-white">
      {/* Animated Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 inline-block px-4 py-2 bg-accent bg-opacity-20 rounded-full border border-accent border-opacity-30 animate-fadeInDown">
          <span className="text-sm font-semibold text-accent">
            Premium Media Services
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight animate-fadeInUp">
          Cinematic Media for Luxury Real Estate
        </h1>

        <p className="text-xl sm:text-2xl text-primary text-opacity-70 mb-4 font-light animate-fadeInUp animation-delay-100">
          From Westlands to Kilimani — Elevate Every Listing
        </p>

        <p className="text-lg text-primary text-opacity-60 mb-12 max-w-2xl mx-auto font-light animate-fadeInUp animation-delay-200">
          We create cinematic visuals that attract buyers and strengthen brands.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp animation-delay-300">
          <Link
            href="/booking"
            className="px-8 py-4 bg-primary text-white font-semibold rounded hover:bg-opacity-90 transition-all flex items-center gap-2 group"
          >
            Book a Session
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#portfolio"
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition-all"
          >
            See Portfolio
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}