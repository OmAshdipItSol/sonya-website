"use client"

import { CheckCircle } from "lucide-react"

const reasons = [
  "Professional Installation by Certified Experts",
  "Latest Security & Surveillance Technology",
  "Reliable 24/7 After-Sales Support",
  "Residential & Commercial Expertise",
  "Customized Solutions for Your Needs",
  "Competitive Pricing & Flexible Payment Options",
]

export default function WhyChoose() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Why Digital-I?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-5">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <CheckCircle
                    className="text-accent flex-shrink-0 mt-1 transition-transform group-hover:scale-110"
                    size={24}
                  />
                  <p className="text-lg text-foreground/80 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-accent/30 aspect-square flex items-center justify-center bg-gradient-to-br from-accent/15 via-transparent to-transparent shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all">
            <div className="text-center px-8">
              <div className="text-6xl font-bold text-accent/30 mb-4">10+</div>
              <h3 className="text-3xl font-bold text-foreground mb-3">Years of Excellence</h3>
              <p className="text-lg text-foreground/70 mb-2">Trusted Partner in Security</p>
              <p className="text-foreground/50 text-sm">1000+ satisfied clients across Pune</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
