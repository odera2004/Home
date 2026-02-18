'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Video, Camera, Layout, Sparkles, Clock, Award, ChevronRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const detailedServices = [
    {
      icon: Video,
      title: 'Cinematic Videography',
      price: 'From $1,500',
      description: 'Ultra-HD walkthroughs with rhythmic editing, professional color grading, and licensed sound design.',
      features: ['4K/8K HDR Production', 'Drone Integration', 'Social Media Cuts', 'Sound Design'],
    },
    {
      icon: Camera,
      title: 'Premium Photography',
      price: 'From $800',
      description: 'Magazine-quality interior and exterior captures using advanced bracketed lighting techniques.',
      features: ['100+ High-Res Images', 'Twilight Hour Shots', 'Virtual Staging', 'Advanced Retouching'],
    },
    {
      icon: Layout,
      title: 'Digital Branding',
      price: 'From $2,500',
      description: 'Bespoke, high-performance web experiences designed to showcase listings with immersive UI.',
      features: ['Mobile-First UX', 'SEO Optimization', 'Custom CMS', 'Interactive Tours'],
    },
    {
      icon: Sparkles,
      title: 'Social Engine',
      price: 'From $1,000',
      description: 'Short-form content kits optimized for high engagement on Instagram Reels and TikTok.',
      features: ['20-30 Short Clips', 'Trending Aesthetics', 'Captions & Graphics', 'Strategy Guide'],
    },
  ]

  const addOns = [
    { name: 'Virtual Staging', price: '$300+' },
    { name: 'Matterport 3D', price: '$400' },
    { name: 'Twilight Session', price: '$200' },
    { name: '48hr Rush', price: '$200' },
    { name: 'Aerial Stills', price: '$300' },
    { name: 'Extra Revisions', price: '$150' },
  ]

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-48 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-accent font-medium tracking-[0.4em] uppercase text-[10px] mb-4 block animate-fadeIn">
            Production Suite
          </span>
          <h1 className="font-playfair text-6xl md:text-8xl font-light text-primary mb-8 leading-tight">
            Our <span className="italic">Services.</span>
          </h1>
          <p className="font-playfair text-xl text-primary/50 max-w-xl font-light leading-relaxed">
            Crafting visual narratives that turn properties into high-value digital assets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32 relative z-10">
        
        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {detailedServices.map((service, idx) => {
            const Icon = service.icon
            return (
              <div 
                key={idx} 
                className="bg-white group p-10 md:p-14 rounded-[2.5rem] shadow-sm border border-neutral-100 hover:shadow-xl hover:shadow-primary/[0.03] transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-[#FAF9F6] rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-playfair text-xl text-primary/40 italic">{service.price}</span>
                </div>

                <h3 className="font-playfair text-3xl text-primary mb-4">{service.title}</h3>
                <p className="text-primary/60 font-light leading-relaxed mb-10 text-lg">
                  {service.description}
                </p>

                <div className="space-y-4 mb-10">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-primary/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  href="/booking" 
                  className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest group-hover:text-accent transition-colors"
                >
                  Book this service <ChevronRight size={14} />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Add-ons - Minimalist Horizontal Scroll on Mobile */}
        <div className="mb-32">
          <h2 className="font-playfair text-4xl text-primary mb-12 text-center">A La Carte <span className="italic">Add-ons</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {addOns.map((addon, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-100 text-center hover:border-accent transition-colors">
                <p className="text-[10px] uppercase tracking-tighter font-bold text-primary/40 mb-2">{addon.name}</p>
                <p className="font-playfair text-lg text-primary">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Editorial Layout */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          <div className="p-10 bg-primary rounded-[2.5rem] text-white">
            <Award className="w-8 h-8 text-accent mb-6" />
            <h3 className="font-playfair text-2xl mb-4">Elite Quality</h3>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Utilizing RED cinema cameras and high-end glass to ensure every frame is gallery-ready.
            </p>
          </div>
          <div className="p-10 bg-white border border-neutral-100 rounded-[2.5rem] text-primary">
            <Zap className="w-8 h-8 text-accent mb-6" />
            <h3 className="font-playfair text-2xl mb-4">48hr Delivery</h3>
            <p className="text-primary/60 text-sm leading-relaxed font-light">
              Speed without compromise. We deliver fully edited assets within 2 business days.
            </p>
          </div>
          <div className="p-10 bg-white border border-neutral-100 rounded-[2.5rem] text-primary">
            <Clock className="w-8 h-8 text-accent mb-6" />
            <h3 className="font-playfair text-2xl mb-4">Live Scheduling</h3>
            <p className="text-primary/60 text-sm leading-relaxed font-light">
              Our digital booking system allows you to secure slots instantly across Nairobi.
            </p>
          </div>
        </div>

        {/* Dynamic CTA */}
        <div className="relative overflow-hidden bg-white rounded-[3rem] p-12 md:p-24 text-center border border-neutral-100">
          <div className="relative z-10">
            <h2 className="font-playfair text-4xl md:text-6xl text-primary mb-6">Ready to <span className="italic text-accent">Elevate?</span></h2>
            <p className="text-primary/50 mb-12 max-w-lg mx-auto font-light">
              Join the elite agencies using Naires Media to capture, showcase, and sell.
            </p>
            <Link
              href="/booking"
              className="inline-block px-12 py-5 bg-primary text-white text-[11px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-accent transition-all shadow-xl shadow-primary/20"
            >
              Start Your Project
            </Link>
          </div>
          {/* Decorative watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-playfair font-bold text-primary/[0.01] select-none pointer-events-none">
            NAIRES
          </div>
        </div>

      </div>
      <Footer />
    </main>
  )
}