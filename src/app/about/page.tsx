import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'About | Cinematic Media',
  description: 'Learn about our mission, vision, and the team behind cinematic media for luxury real estate.',
}

export default function AboutPage() {
  const values = [
    { title: 'Excellence', description: 'We pursue perfection in every frame.' },
    { title: 'Innovation', description: 'We embrace cutting-edge technology and techniques.' },
    { title: 'Integrity', description: 'We deliver honest work that exceeds expectations.' },
    { title: 'Partnership', description: 'We work as an extension of your team.' },
  ]

  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="mb-20 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              About Cinematic
            </h1>
            <p className="text-xl text-primary text-opacity-60">
              Redefining luxury property presentation through cinematic excellence
            </p>
          </div>

          {/* Story */}
          <div className="mb-20">
            <div className="bg-secondary p-12 rounded-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-primary text-opacity-70 mb-4 leading-relaxed">
                Founded with a vision to transform how luxury properties are presented, Cinematic Media
                combines artistic excellence with technical precision. We believed that premium properties
                deserved premium visual storytelling.
              </p>
              <p className="text-lg text-primary text-opacity-70 leading-relaxed">
                Today, we're trusted by Kenya's leading real estate brands to capture the essence of their most
                prestigious listings. Every project is a celebration of architectural beauty and luxury living.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-primary text-white p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-accent leading-relaxed">
                To provide exceptional cinematic media services that elevate luxury real estate listings,
                helping agents and developers connect with qualified buyers through compelling visual narratives.
              </p>
            </div>

            <div className="bg-accent text-white p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed">
                To be the preferred choice for premium real estate media in East Africa, setting the standard for
                cinematic excellence and innovation in property presentation.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-6 bg-secondary rounded-lg hover:border-accent border-2 border-transparent transition-all"
                >
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {value.title}
                    </h4>
                    <p className="text-primary text-opacity-70">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-primary text-white rounded-lg p-12">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold mb-2">500+</p>
                <p className="text-accent">Properties Showcased</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">100%</p>
                <p className="text-accent">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">5+</p>
                <p className="text-accent">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}