"use client"

import { ArrowRight, PhoneCall } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Eyebrow text */}
        <div className="mb-8 flex justify-center">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">
            Professional Security Solutions
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance leading-tight">
          Smart Surveillance &amp; Security for Modern Businesses
        </h1>

        <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto mb-12 text-pretty leading-relaxed">
          Professional CCTV systems, EPABX solutions, and advanced security technology. Trusted by businesses across
          Pune.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => {
              const contactSection = document.querySelector("#contact")
              contactSection?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold transition-all duration-300 text-sm tracking-wide hover:opacity-90 hover:shadow-xl shadow-lg hover:shadow-accent/30 flex items-center justify-center gap-2"
          >
            Get Free Site Visit <ArrowRight size={18} />
          </button>

          <a
            href="tel:9158031664"
            className="px-8 py-3 rounded-lg border border-foreground/20 text-foreground hover:border-accent hover:text-accent font-semibold transition-all duration-300 text-sm tracking-wide flex items-center justify-center gap-2"
          >
            <PhoneCall size={18} /> Call: 9158031664
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 justify-center text-sm text-foreground/50 border-t border-border/30 pt-12">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span>Professional Installation</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span>Latest Technology</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
