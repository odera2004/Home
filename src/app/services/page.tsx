import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Video, Camera, Zap, Sparkles, Clock, Award } from 'lucide-react'

export const metadata = {
  title: 'Services | Cinematic Media',
  description: 'Explore our professional media services for luxury real estate photography, videography, and drone coverage.',
}

const detailedServices = [
  {
    icon: Video,
    title: 'Cinematic Videography',
    price: 'From $1,500',
    description: 'Professional video walkthroughs with cinematic camera movements, color grading, and sound design.',
    features: [
      '4K/8K video production',
      'Drone footage integration',
      'Professional color grading',
      '30-60 second highlight reel included',
      'Music & sound design',
    ],
  },
  {
    icon: Camera,
    title: 'Premium Photography',
    price: 'From $800',
    description: 'High-resolution interior and exterior photography with professional lighting and composition.',
    features: [
      '100+ high-resolution images',
      'Professional lighting setup',
      'Virtual staging options',
      'Day and twilight shots',
      'Raw files included',
    ],
  },
  {
    icon: Zap,
    title: 'Aerial Drone Coverage',
    price: 'From $600',
    description: 'Stunning aerial perspectives showcasing property context and architectural details.',
    features: [
      '4K drone footage',
      'Multiple angles and elevations',
      'Smooth cinematic movements',
      'Sunset/sunrise options',
      'Property mapping included',
    ],
  },
  {
    icon: Sparkles,
    title: 'Social Media Content',
    price: 'From $1,000',
    description: 'Dynamic short-form content optimized for Instagram, TikTok, and other platforms.',
    features: [
      '20-30 short clips',
      'Trending audio & effects',
      'Captions & text overlays',
      'Multiple format exports',
      'Month of posting guidance',
    ],
  },
]

const addOns = [
  { name: 'Virtual Staging', description: 'AI-powered room staging', price: '$300-500' },
  { name: 'Matterport 3D Tour', description: 'Interactive virtual walkthrough', price: '$400' },
  { name: 'Twilight Photography', description: 'Evening exterior shots', price: '$200' },
  { name: 'Video Editing Package', description: 'Additional editing/revisions', price: '$500' },
  { name: 'Aerial Photography Only', description: 'Still images from drone', price: '$300' },
  { name: 'Rush Turnaround', description: '48-hour delivery', price: '+$200' },
]

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-32">
        {/* Hero */}
        <div className="bg-secondary py-16 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary text-opacity-60">
              Comprehensive media solutions designed for luxury real estate excellence
            </p>
          </div>
        </div>

        {/* Main Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {detailedServices.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="border-2 border-border rounded-lg p-8 hover:border-accent transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-10 h-10 text-accent" />
                    <span className="text-lg font-bold text-accent">{service.price}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>

                  <p className="text-primary text-opacity-70 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span className="text-primary text-opacity-80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Add-ons */}
          <div className="bg-secondary rounded-lg p-12 mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Available Add-ons
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {addOns.map((addon, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-primary mb-1">{addon.name}</h4>
                  <p className="text-sm text-primary text-opacity-60 mb-3">
                    {addon.description}
                  </p>
                  <p className="font-bold text-accent">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Why Choose Cinematic
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary p-8 rounded-lg">
                <Award className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Award-Winning Quality</h3>
                <p className="text-primary text-opacity-70">
                  Professional-grade equipment and techniques used by top production companies.
                </p>
              </div>
              <div className="bg-secondary p-8 rounded-lg">
                <Clock className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Fast Turnaround</h3>
                <p className="text-primary text-opacity-70">
                  Typically 5-7 business days, with rush options available.
                </p>
              </div>
              <div className="bg-secondary p-8 rounded-lg">
                <Sparkles className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Full Creative Control</h3>
                <p className="text-primary text-opacity-70">
                  Unlimited revisions until you're completely satisfied.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Listings?</h2>
            <p className="text-accent mb-8 max-w-2xl mx-auto">
              Let's discuss which services are perfect for your properties.
            </p>
            <a
              href="/booking"
              className="inline-block px-8 py-3 bg-accent text-primary font-semibold rounded hover:bg-opacity-90 transition-all"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}