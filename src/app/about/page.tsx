'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Check, Linkedin, Twitter, Instagram } from 'lucide-react'
import { team } from '@/data/team'

export default function AboutPage() {
  const values = [
    { title: 'Excellence', description: 'We pursue perfection in every frame.' },
    { title: 'Innovation', description: 'We embrace cutting-edge technology and techniques.' },
    { title: 'Integrity', description: 'We deliver honest work that exceeds expectations.' },
    { title: 'Partnership', description: 'We work as an extension of your team.' },
  ]

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navbar />
      
      {/* Hero - More White Space */}
      <div className="pt-48 pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-accent font-medium tracking-[0.4em] uppercase text-[10px] mb-4 block animate-fadeIn">
            Cinematic Excellence
          </span>
          <h1 className="font-playfair text-6xl md:text-7xl font-light text-primary mb-8 leading-tight">
            About <span className="italic">Cinematic.</span>
          </h1>
          <p className="font-playfair text-xl text-primary/60 max-w-2xl mx-auto font-light leading-relaxed">
            Redefining luxury property presentation through technical precision and artistic storytelling.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-32 relative z-10">
        
        {/* Story - Modern Floating Card */}
        <div className="mb-32">
          <div className="bg-white p-12 md:p-20 rounded-[2.5rem] shadow-sm border border-neutral-100 relative overflow-hidden">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-8">Our Story</h2>
            <div className="font-playfair grid md:grid-cols-2 gap-12 text-primary/70 text-lg leading-relaxed font-light">
              <p>
                Founded with a vision to transform how luxury properties are presented, Cinematic Media
                combines artistic excellence with technical precision. We believed that premium properties
                deserved premium visual storytelling.
              </p>
              <p>
                Today, we're trusted by Kenya's leading real estate brands to capture the essence of their most
                prestigious listings. Every project is a celebration of architectural beauty and luxury living.
              </p>
            </div>
            {/* Decorative Background Text */}
            <div className="absolute -bottom-10 -right-10 text-9xl font-playfair font-bold text-primary/[0.02] select-none">
              NAIRES
            </div>
          </div>
        </div>

        {/* Mission & Vision - Refined Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="bg-primary text-white p-12 rounded-[2rem] hover:-translate-y-1 transition-transform duration-500">
            <h3 className="text-accent text-[10px] uppercase tracking-widest font-bold mb-6">Our Mission</h3>
            <p className="font-playfair text-2xl leading-relaxed font-light">
              To provide exceptional cinematic media services that elevate luxury real estate listings through compelling visual narratives.
            </p>
          </div>

          <div className="bg-white border border-neutral-100 p-12 rounded-[2rem] hover:-translate-y-1 transition-transform duration-500 shadow-sm">
            <h3 className="text-accent text-[10px] uppercase tracking-widest font-bold mb-6">Our Vision</h3>
            <p className="font-playfair text-2xl leading-relaxed font-light italic text-primary">
              To be the preferred choice for premium real estate media in East Africa, setting the standard for innovation.
            </p>
          </div>
        </div>

        {/* Values - Grid Style */}
        <div className="mb-32">
          <h2 className="font-playfair text-4xl text-primary mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border border-neutral-100 hover:border-accent transition-colors group">
                <Check className="w-5 h-5 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-playfair text-xl font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-primary/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section - Fixed TypeScript Error */}
        <div className="mb-20">
          <h2 className="font-playfair text-4xl text-primary mb-20 text-center italic">Meet the Collective</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {team.map((member, idx) => {
              // Cast socials to 'any' to bypass the TypeScript error for .twitter
              const socials = member.socials as any;

              return (
                <div key={idx} className="group">
                  <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-[4/5] bg-neutral-200 shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <div className="flex gap-4 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {socials?.linkedin && (
                          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                            <Linkedin size={18} />
                          </a>
                        )}
                        {socials?.twitter && (
                          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                            <Twitter size={18} />
                          </a>
                        )}
                        {socials?.instagram && (
                          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                            <Instagram size={18} />
                          </a>
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
              );
            })}
          </div>
        </div>

      </div>
      <Footer />
    </main>
  )
}