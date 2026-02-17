'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
        hasScrolled 
          ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-neutral-100' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          
          {/* Logo with sophisticated tracking */}
          <Link href="/" className="group relative">
            <span className="font-playfair text-2xl font-bold tracking-[0.15em] text-primary">
              NAIRES<span className="text-accent italic">.</span>
            </span>
            <div className={`h-[1px] bg-accent transition-all duration-500 ${hasScrolled ? 'w-0' : 'w-full'} opacity-50`} />
          </Link>

          {/* Desktop Navigation - Centered style */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[11px] uppercase tracking-[0.2em] font-semibold text-primary/80 hover:text-primary transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side: CTA */}
          <div className="flex items-center gap-6">
            <Link
              href="/booking"
              className={`hidden sm:block px-8 py-2.5 text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-all duration-300 ${
                hasScrolled 
                ? 'bg-primary text-white hover:bg-accent' 
                : 'bg-white text-primary hover:bg-neutral-100 shadow-xl'
              }`}
            >
              Book Session
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden group p-2 overflow-hidden"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute h-[1.5px] w-full bg-primary transform transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : 'top-0'}`} />
                <span className={`absolute h-[1.5px] w-full bg-primary top-2 transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-4' : 'opacity-100'}`} />
                <span className={`absolute h-[1.5px] w-full bg-primary transform transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : 'top-4'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-[-1] transition-all duration-700 ease-in-out md:hidden ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-screen space-y-8 px-6">
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-3xl font-playfair text-primary transition-all duration-500 delay-${idx * 100} ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="mt-10 px-12 py-4 bg-primary text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}