'use client'

import React from "react"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone number field
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '88644973-0e22-47c1-a8a2-845971f37b51',
          name: formData.name,
          email: formData.email,
          phone: formData.phone, // Added phone to API
          subject: formData.subject,
          message: formData.message,
          from_name: 'NAIRES MEDIA',
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      } else {
        throw new Error(data.message || 'Failed to send message.')
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-primary mb-4">
              Get In Touch
            </h1>
            <p className="font-playfair text-xl text-primary text-opacity-60">
              Have a question? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a
                      href="mailto:hello@cinematic.media"
                      className="text-accent hover:underline"
                    >
                      info@nairesmedia.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a
                      href="tel:+254712345678"
                      className="text-accent hover:underline"
                    >
                      +254 112 973 302
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Location</h3>
                    <p className="text-primary text-opacity-70">
                      Westlands, Nairobi<br />
                      Kenya
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Hours</h3>
                    <p className="text-primary text-opacity-70">
                      Mon - Fri: 9am - 6pm EAT<br />
                      Sat - Sun: By appointment
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Follow Us</h3>
                    <a
                      href="https://instagram.com"
                      className="text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      info@nairesmedia.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary rounded-lg p-8 sm:p-12">
              <h2 className="font-playfair text-3xl font-bold text-primary mb-8">Send Us a Message</h2>

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
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-primary text-opacity-70">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-typewriter">
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
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors bg-white disabled:opacity-50"
                      placeholder="Your name "
                      disabled={loading}
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
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors bg-white disabled:opacity-50"
                      placeholder="Email"
                      disabled={loading}
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors bg-white disabled:opacity-50"
                      placeholder="+254 712 345 678"
                      disabled={loading}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors bg-white disabled:opacity-50"
                      placeholder="How can we help?"
                      disabled={loading}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-accent focus:outline-none transition-colors bg-white disabled:opacity-50"
                      placeholder="Your message here..."
                      disabled={loading}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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