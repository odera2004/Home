'use client'

import React, { useState } from "react"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Calendar, CheckCircle2, Info } from 'lucide-react'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    propertyAddress: '',
    date: '',
    notes: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const services = [
    { value: 'videography', label: 'Cinematic Videography' },
    { value: 'photography', label: 'Premium Photography' },
    { value: 'drone', label: 'Aerial Drone Coverage' },
    { value: 'social', label: 'Social Media Content' },
    { value: 'package', label: 'Complete Package' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate a reliable API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      // Reset form
      setFormData({ name: '', email: '', phone: '', service: '', propertyAddress: '', date: '', notes: '' })
    }, 1500)
  }

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navbar />
      
      {/* The relative z-10 ensures the form is clickable and not blocked by the hidden navbar menu */}
      <div className="pt-40 pb-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          <div className="mb-16">
            <span className="text-accent font-medium tracking-[0.4em] uppercase text-[10px] mb-4 block">Reservations</span>
            <h1 className="font-playfair text-5xl md:text-6xl text-primary font-light">Book a <span className="italic">Session</span></h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* FORM CONTAINER */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-neutral-100 text-center animate-fadeIn">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="font-playfair text-3xl text-primary mb-4">Request Received</h2>
                  <p className="text-primary/60 mb-8 max-w-sm mx-auto">Our team will review your property details and reach out within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="px-10 py-4 bg-primary text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-accent transition-all"
                  >
                    New Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-neutral-100 space-y-8">
                  
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-primary/50 ml-1">Full Name</label>
                      <input 
                        type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full bg-[#FAF9F6] border-none p-4 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-primary"
                        placeholder="e.g. Victor Kanoga"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-primary/50 ml-1">Email Address</label>
                      <input 
                        type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full bg-[#FAF9F6] border-none p-4 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-primary"
                        placeholder="hello@agency.com"
                      />
                    </div>
                  </div>

                  {/* Contact & Location */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-primary/50 ml-1">Phone Number</label>
                      <input 
                        type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                        className="w-full bg-[#FAF9F6] border-none p-4 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-primary"
                        placeholder="+254 --- --- ---"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-primary/50 ml-1">Property Address</label>
                      <input 
                        type="text" name="propertyAddress" required value={formData.propertyAddress} onChange={handleChange}
                        className="w-full bg-[#FAF9F6] border-none p-4 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-primary"
                        placeholder="Nairobi, Westlands..."
                      />
                    </div>
                  </div>

                  {/* Service & Date */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-primary/50 ml-1">Service Type</label>
                      <select 
                        name="service" required value={formData.service} onChange={handleChange}
                        className="w-full bg-[#FAF9F6] border-none p-4 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-primary appearance-none"
                      >
                        <option value="">Select Service</option>
                        {services.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-primary/50 ml-1">Preferred Date</label>
                      <input 
                        type="date" name="date" required value={formData.date} onChange={handleChange}
                        className="w-full bg-[#FAF9F6] border-none p-4 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-primary"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" disabled={loading}
                    className="w-full py-5 bg-primary text-white text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-accent transition-all shadow-lg shadow-primary/10 disabled:opacity-50"
                  >
                    {loading ? 'Submitting Request...' : 'Confirm Booking Request'}
                  </button>
                </form>
              )}
            </div>

            {/* SIDEBAR INFO */}
            <div className="space-y-6">
              <div className="bg-primary p-8 rounded-[2rem] text-white">
                <Info className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-playfair text-xl mb-3">Booking Terms</h3>
                <ul className="text-xs text-white/70 space-y-3 leading-relaxed">
                  <li>• Dates are subject to weather conditions.</li>
                  <li>• 48-hour delivery on all standard edits.</li>
                  <li>• Travel fees may apply outside of Nairobi.</li>
                </ul>
              </div>
              
              <div className="p-8 border border-neutral-200 rounded-[2rem] bg-white">
                <Calendar className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-playfair text-xl text-primary mb-2">Availability</h3>
                <p className="text-xs text-primary/50 leading-relaxed">
                  Our production schedule typically fills 2 weeks in advance. For urgent "Just Listed" projects, please call us directly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}