"use client"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Gallery from "@/components/sections/gallery"
import WhyChoose from "@/components/sections/why-choose"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import Header from "@/components/header"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <WhyChoose />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
