import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Clients } from '@/components/clients'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Clients />
        <Services />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
    </main>
  )
}