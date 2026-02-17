'use client'

import React, { useState } from "react"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock, Instagram, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '88644973-0e22-47c1-a8a2-845971f37b51',
          ...formData,
          from_name: 'NAIRES MEDIA',
        }),
      })

      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        throw new Error(data.message || 'Failed to send.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navbar />
      
      <div className="pt-44 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          {/* Section Header */}
          <div className="mb-24">
            <span className="text-accent font-medium tracking-[0.4em] uppercase text-xs mb-4 block animate-fadeIn">
              Connect With Us
            </span>
            <h1 className="font-playfair text-6xl md:text-8xl font-light text-primary leading-tight">
              Start a <br />
              <span className="italic">Conversation.</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-20">
            
            {/* LEFT: CONTACT DIRECTORY (5 Columns) */}
            <div className="lg:col-span-5 space-y-16">
              <div>
                <h2 className="font-playfair text-3xl text-primary mb-10 italic">Office Details</h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-12">
                  {/* Email & Phone */}
                  <div className="space-y-8">
                    <div className="group">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40 mb-2">Electronic Mail</p>
                      <a href="mailto:hello@naires.media" className="text-xl font-playfair text-primary hover:text-accent transition-colors">
                        hello@naires.media
                      </a>
                    </div>
                    <div className="group">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40 mb-2">Direct Line</p>
                      <a href="tel:+254112973302" className="text-xl font-playfair text-primary hover:text-accent transition-colors">
                        +254 112 973 302
                      </a>
                    </div>
                  </div>

                  {/* Location & Hours */}
                  <div className="space-y-8">
                    <div className="group">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40 mb-2">Studio Location</p>
                      <p className="text-lg font-playfair text-primary/70">
                        Westlands, Nairobi, Kenya
                      </p>
                    </div>
                    <div className="group">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40 mb-2">Availability</p>
                      <p className="text-lg font-playfair text-primary/70">
                        Mon — Fri / 9am — 6pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Link */}
              <div className="pt-10 border-t border-neutral-200">
                <a 
                  href="https://instagram.com/four.horsemen.media" 
                  target="_blank" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <Instagram className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold text-primary">Follow our journey</span>
                </a>
              </div>
            </div>

            {/* RIGHT: MINIMALIST FORM (7 Columns) */}
            <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[2rem] shadow-sm border border-neutral-100">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fadeIn">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-playfair text-3xl text-primary mb-2">Message Delivered</h3>
                  <p className="text-primary/50">We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input 
                        type="text" name="name" required placeholder="Full Name" 
                        value={formData.name} onChange={handleChange}
                        className="w-full bg-transparent border-b border-neutral-200 py-4 outline-none focus:border-accent transition-colors font-playfair text-lg placeholder:text-neutral-300"
                      />
                    </div>
                    <div className="relative group">
                      <input 
                        type="email" name="email" required placeholder="Email Address" 
                        value={formData.email} onChange={handleChange}
                        className="w-full bg-transparent border-b border-neutral-200 py-4 outline-none focus:border-accent transition-colors font-playfair text-lg placeholder:text-neutral-300"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <input 
                      type="text" name="subject" required placeholder="Subject" 
                      value={formData.subject} onChange={handleChange}
                      className="w-full bg-transparent border-b border-neutral-200 py-4 outline-none focus:border-accent transition-colors font-playfair text-lg placeholder:text-neutral-300"
                    />
                  </div>

                  <div className="relative group">
                    <textarea 
                      name="message" required rows={4} placeholder="Your Message" 
                      value={formData.message} onChange={handleChange}
                      className="w-full bg-transparent border-b border-neutral-200 py-4 outline-none focus:border-accent transition-colors font-playfair text-lg placeholder:text-neutral-300 resize-none"
                    />
                  </div>

                  {error && <p className="text-red-500 text-xs tracking-widest uppercase">{error}</p>}

                  <button 
                    disabled={loading}
                    className="w-full md:w-auto px-16 py-5 bg-primary text-white text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/10 disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}