'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20)
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
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        hasScrolled ? 'bg-white/90 backdrop-blur-lg py-4 shadow-md' : 'bg-transparent py-7'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="font-playfair text-2xl font-bold tracking-tighter text-primary">
            NAIRES<span className="text-accent italic">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary/80 hover:text-accent transition-colors">
                {item.label}
              </Link>
            ))}
            <Link 
              href="/booking" 
              className="px-6 py-2.5 bg-primary text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-accent transition-all shadow-lg shadow-primary/10"
            >
              Book Session
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - FIXED Logic */}
      <div className={`fixed inset-0 z-[90] bg-white transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href} 
            onClick={() => setIsOpen(false)} 
            className="text-4xl font-playfair text-primary"
          >
            {item.label}
          </Link>
        ))}
        <Link 
          href="/booking" 
          onClick={() => setIsOpen(false)} 
          className="mt-4 px-10 py-4 bg-primary text-white text-xs uppercase tracking-widest font-bold rounded-full"
        >
          Book Session
        </Link>
      </div>
    </>
  )
}