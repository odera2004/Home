'use client'

import React, { useState } from "react"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

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
  const [error, setError] = useState<string | null>(null)

  const services = [
    { value: 'videography', label: 'Cinematic Videography' },
    { value: 'photography', label: 'Premium Photography' },
    { value: 'drone', label: 'Aerial Drone Coverage' },
    { value: 'social', label: 'Social Media Content' },
    { value: 'package', label: 'Complete Package (All Services)' },
  ]

  const propertyTypes = [
    { value: 'apartment', label: 'Apartment/Condo' },
    { value: 'townhouse', label: 'Townhouse' },
    { value: 'villa', label: 'Villa/Mansion' },
    { value: 'commercial', label: 'Commercial Space' },
    { value: 'land', label: 'Land/Development' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError(null) // clear error when user starts typing
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        // Show first validation error from backend if available
        const firstError = data.errors
          ? Object.values(data.errors)[0] as string
          : data.message || 'Something went wrong. Please try again.'
        setError(firstError)
        return
      }

      setSubmitted(true)
    } catch (err) {
      setError('Unable to reach the server. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold text-primary mb-4">Book Our Services</h1>
            <p className="font-typewriter text-lg text-black/60">
              Let's schedule a session for your property
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-playfair text-2xl font-bold text-primary mb-2">Booking Received!</h2>
                <p className="font-typewriter text-sm text-gray-600 mb-6">
                  We'll contact you within 24 hours. Check your email for confirmation.
                </p>
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-6 py-2 bg-primary text-white font-semibold rounded hover:bg-opacity-90 transition-all"
                >
                  Back to Home
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Error banner */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                    {error}
                  </div>
                )}

                {[
                  { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'name' },
                  { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'Email' },
                  { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '+254 712 345 678' },
                  { label: 'Property Address *', name: 'propertyAddress', type: 'text', placeholder: '123 Luxury Lane, Westlands' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="font-typewriter block text-xs uppercase tracking-widest font-bold text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-sans"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label className="font-typewriter block text-xs uppercase tracking-widest font-bold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary outline-none bg-white font-sans"
                  >
                    <option value="">Select a service...</option>
                    {services.map((svc) => (
                      <option key={svc.value} value={svc.value}>{svc.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-typewriter block text-xs uppercase tracking-widest font-bold text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary outline-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Request Booking'}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}