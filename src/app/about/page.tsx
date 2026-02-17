'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Check, Linkedin, Twitter, Instagram } from 'lucide-react'
import { team } from '@/data/team'

export default function AboutPage() {
  const values = [
    { title: 'Excellence', description: 'We pursue perfection in every frame, ensuring your property stands alone.' },
    { title: 'Innovation', description: 'Embracing cutting-edge 8K cinema tech and FPV drone capabilities.' },
    { title: 'Integrity', description: 'Transparent partnerships built on consistent, world-class delivery.' },
    { title: 'Partnership', description: 'We don’t just film for you; we strategize with you as a creative ally.' },
  ]

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navbar />
      
      {/* HERO SECTION - More expansive and airy */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-accent font-medium tracking-[0.4em] uppercase text-xs mb-6 block animate-fadeIn">
            Established Excellence
          </span>
          <h1 className="font-playfair text-6xl md:text-8xl font-light text-primary mb-8 leading-tight">
            Cinematic <br />
            <span className="italic">Perspective.</span>
          </h1>
          <p className="font-playfair text-xl md:text-2xl text-primary/60 max-w-2xl mx-auto font-light leading-relaxed">
            Redefining luxury property presentation through technical precision and artistic storytelling.
          </p>
        </div>
      </section>

      {/* STORY SECTION - Overlapping design for high-end feel */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative grid lg:grid-cols-12 items-center">
            {/* The "Box" is now a sophisticated floating element */}
            <div className="lg:col-span-7 bg-white p-12 md:p-20 rounded-3xl shadow-sm border border-neutral-100 z-10">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-8">Our Story</h2>
              <div className="space-y-6 text-primary/70 text-lg leading-relaxed font-light">
                <p>
                  Founded with a vision to transform how luxury properties are presented, Cinematic Media
                  combines artistic excellence with technical precision. We believe that premium properties
                  deserve premium visual storytelling.
                </p>
                <p>
                  Today, we are trusted by Kenya’s leading real estate brands to capture the essence of their most
                  prestigious listings. Every project is a celebration of architectural beauty and luxury living.
                </p>
              </div>
            </div>
            {/* Decorative background text */}
            <div className="hidden lg:block lg:col-span-5 absolute -right-10 text-[12rem] font-playfair font-bold text-primary/[0.03] select-none">
              History
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION - Clean, minimal cards */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="group p-12 bg-primary rounded-3xl transition-transform duration-500 hover:-translate-y-2">
            <h3 className="text-accent font-medium tracking-widest uppercase text-xs mb-6">The Mission</h3>
            <p className="font-playfair text-3xl text-white font-light leading-snug">
              To elevate luxury real estate through compelling visual narratives that connect qualified buyers to their dream estates.
            </p>
          </div>
          <div className="group p-12 bg-white border border-neutral-100 rounded-3xl transition-transform duration-500 hover:-translate-y-2 shadow-sm">
            <h3 className="text-accent font-medium tracking-widest uppercase text-xs mb-6">The Vision</h3>
            <p className="font-playfair text-3xl text-primary font-light leading-snug italic">
              To set the global standard for premium real estate media in East Africa, one frame at a time.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES - Grid with custom borders */}
      <section className="pb-32 px-6 bg-white py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl text-center text-primary mb-20">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100 border border-neutral-100">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-10 hover:bg-[#FAF9F6] transition-colors group">
                <Check className="w-5 h-5 text-accent mb-6 group-hover:scale-125 transition-transform" />
                <h4 className="font-playfair text-xl font-bold text-primary mb-4">{value.title}</h4>
                <p className="text-primary/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION - Updated with the "New Look" logic */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-accent font-medium tracking-[0.3em] uppercase text-xs mb-4 block">The Collective</span>
            <h2 className="font-playfair text-5xl font-light text-primary">Meet the Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/5] bg-neutral-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="flex gap-4 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {member.socials?.linkedin && (
                        <a href={member.socials.linkedin} className="text-white hover:text-accent"><Linkedin size={18} /></a>
                      )}
                      {member.socials?.instagram && (
                        <a href={member.socials.instagram} className="text-white hover:text-accent"><Instagram size={18} /></a>
                      )}
                    </div>
                    <p className="text-white/80 text-sm italic font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="font-playfair text-2xl text-primary mb-1">{member.name}</h4>
                  <p className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}