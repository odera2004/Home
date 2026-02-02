import Link from 'next/link'
import { Instagram, Mail, Phone } from 'lucide-react'

export function Footer() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Booking', href: '/booking' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">CINEMATIC</h3>
            <p className="text-accent text-sm">
              Cinematic media for luxury real estate
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Get In Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@cinematic.media"
                className="flex items-center gap-2 text-white hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                hello@cinematic.media
              </a>
              <a
                href="tel:+254712345678"
                className="flex items-center gap-2 text-white hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +254 712 345 678
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-white hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <p className="text-center text-sm text-white text-opacity-80">
            &copy; 2026 Cinematic Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}