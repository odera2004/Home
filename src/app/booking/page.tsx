'use client'

import React from "react"

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useState } from 'react'

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Book Our Services</h1>
            <p className="text-xl text-primary text-opacity-60">
              Let's schedule a session for your property
            </p>
          </div>

          {/* Form */}
          <div className="bg-secondary rounded-lg p-8 sm:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Booking Received!
                </h2>
                <p className="text-primary text-opacity-70 mb-6">
                  Thank you! We'll review your details and contact you within 24 hours to confirm
                  your session.
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
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="+254 712 345 678"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((svc) => (
                      <option key={svc.value} value={svc.value}>
                        {svc.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property Address */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="123 Luxury Lane, Westlands"
                  />
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Property Type *
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select property type...</option>
                    {propertyTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Preferred Shooting Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="Any specific requirements or details about your property..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Request Booking
                </button>

                <p className="text-xs text-primary text-opacity-50 text-center">
                  We'll contact you within 24 hours to confirm availability and discuss details.
                </p>
              </form>
            )}
          </div>

          {/* Info Boxes */}
          {!submitted && (
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-accent mb-2">24h</div>
                <p className="text-sm text-primary text-opacity-70">
                  Response time
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-accent mb-2">5-7d</div>
                <p className="text-sm text-primary text-opacity-70">
                  Delivery timeline
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-accent mb-2">∞</div>
                <p className="text-sm text-primary text-opacity-70">
                  Revisions included
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}