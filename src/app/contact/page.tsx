'use client'

import React, { useState } from "react"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Instagram, Send, MapPin, Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navbar />
      <div className="pt-48 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            
            {/* Left Side: Editorial Content */}
            <div>
              <span className="text-accent font-medium tracking-[0.4em] uppercase text-xs mb-4 block">Inquiries</span>
              <h1 className="font-playfair text-6xl md:text-8xl font-light text-primary mb-12">Let’s <br/><span className="italic text-accent">Connect.</span></h1>
              
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-neutral-100 shrink-0">
                    <Mail size={18} className="text-accent"/>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary/40 mb-1">Email us</p>
                    <p className="text-xl font-playfair text-primary">hello@naires.media</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-neutral-100 shrink-0">
                    <MapPin size={18} className="text-accent"/>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary/40 mb-1">Studio</p>
                    <p className="text-xl font-playfair text-primary">Westlands, Nairobi</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-neutral-200">
                <p className="text-xs text-primary/40 uppercase tracking-widest mb-6 font-bold">Follow Our Work</p>
                <a href="#" className="inline-flex items-center gap-3 text-primary hover:text-accent transition-colors">
                  <Instagram size={20} />
                  <span className="font-playfair text-lg">@naires.media</span>
                </a>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl shadow-primary/[0.02] border border-neutral-100">
              {submitted ? (
                <div className="text-center py-20 animate-fadeIn">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                    <Send size={32} />
                  </div>
                  <h3 className="font-playfair text-3xl text-primary mb-2">Message Sent</h3>
                  <p className="text-primary/50 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="group relative">
                    <input 
                      type="text" required placeholder="Your Name"
                      className="w-full bg-transparent border-b border-neutral-200 py-4 outline-none focus:border-accent transition-all font-playfair text-lg placeholder:text-neutral-300"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="group relative">
                    <input 
                      type="email" required placeholder="Email Address"
                      className="w-full bg-transparent border-b border-neutral-200 py-4 outline-none focus:border-accent transition-all font-playfair text-lg placeholder:text-neutral-300"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="group relative">
                    <textarea 
                      required rows={4} placeholder="How can we help?"
                      className="w-full bg-transparent border-b border-neutral-200 py-4 outline-none focus:border-accent transition-all font-playfair text-lg placeholder:text-neutral-300 resize-none"
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  
                  <button 
                    type="submit" disabled={loading}
                    className="w-full py-5 bg-primary text-white text-[11px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-accent transition-all shadow-xl shadow-primary/20"
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