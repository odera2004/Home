'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Booking', href: '/booking' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-border transition-shadow duration-300 ${hasScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
            NAIRESMEDIA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className="hidden sm:inline-block px-6 py-2 bg-primary text-white text-sm font-semibold rounded hover:bg-opacity-90 transition-all"
            >
              Book Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium text-primary hover:text-accent transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="block w-full px-6 py-2 bg-primary text-white text-sm font-semibold rounded text-center hover:bg-opacity-90 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
