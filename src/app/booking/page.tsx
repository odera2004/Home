'use client'

import React, { useState } from "react"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Calendar, MapPin, Camera, CheckCircle2 } from 'lucide-react'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    propertyAddress: '',
    propertyType: '',
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
    { value: 'package', label: 'Complete Package (All Services)' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulating API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navbar />
      
      <div className="pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
                Reservations
              </span>
              <h1 className="font-playfair text-5xl md:text-7xl text-primary leading-tight font-light">
                Secure Your <br /> 
                <span className="italic">Production Date</span>
              </h1>
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-accent/30 mb-4" />
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Left Side: The Form (2 Columns) */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-neutral-100 text-center animate-fadeIn">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-primary mb-4">Request Received</h2>
                  <p className="text-primary/60 max-w-sm mx-auto mb-8">
                    Our production team will review your property details and contact you within 24 hours to finalize the schedule.
                  </p>
                  <button 
                    onClick={() => window.location.href = '/'} 
                    className="px-10 py-4 border border-primary text-primary text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all rounded-full"
                  >
                    Return Home
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@agency.com' },
                      { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+254 --- --- ---' },
                      { label: 'Property Address', name: 'propertyAddress', type: 'text', placeholder: 'Westlands, Nairobi' },
                    ].map((field) => (
                      <div key={field.name} className="group">
                        <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-primary/50 mb-3 group-focus-within:text-accent transition-colors">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={(formData as any)[field.name]}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border-b border-neutral-300 py-3 focus:border-primary outline-none transition-all font-sans text-primary placeholder:text-neutral-300"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-primary/50 mb-3 group-focus-within:text-accent">
                        Service Selection
                      </label>
                      <select 
                        name="service" 
                        value={formData.service} 
                        onChange={handleChange} 
                        required 
                        className="w-full bg-transparent border-b border-neutral-300 py-3 focus:border-primary outline-none font-sans text-primary appearance-none cursor-pointer"
                      >
                        <option value="">Choose Service</option>
                        {services.map((svc) => <option key={svc.value} value={svc.value}>{svc.label}</option>)}
                      </select>
                    </div>

                    <div className="group">
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-primary/50 mb-3 group-focus-within:text-accent">
                        Preferred Date
                      </label>
                      <input 
                        type="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange} 
                        required 
                        className="w-full bg-transparent border-b border-neutral-300 py-3 focus:border-primary outline-none font-sans text-primary" 
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="group relative inline-flex items-center justify-center px-12 py-5 bg-primary overflow-hidden rounded-full transition-all hover:pr-16"
                  >
                    <span className="relative z-10 text-white text-xs uppercase tracking-[0.3em] font-bold">
                      {loading ? 'Processing...' : 'Send Request'}
                    </span>
                    <span className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-white">
                      →
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Side: Information Sidebar (1 Column) */}
            <div className="lg:col-span-1 space-y-12">
              <div className="bg-white p-10 rounded-3xl border border-neutral-100 shadow-sm">
                <h3 className="font-playfair text-2xl mb-6 italic">Why Naires?</h3>
                <ul className="space-y-6">
                  {[
                    { icon: Camera, title: "4K Cinema Quality", desc: "Mastered for high-end displays." },
                    { icon: Calendar, title: "Fast Turnaround", desc: "48-hour delivery on most projects." },
                    { icon: MapPin, title: "Global Standards", desc: "International luxury aesthetic." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <item.icon className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-primary">{item.title}</p>
                        <p className="text-xs text-primary/50">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-4">
                <p className="text-xs text-primary/40 leading-relaxed uppercase tracking-widest">
                  * Note: All bookings are subject to location scouting and weather conditions for aerial coverage.
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