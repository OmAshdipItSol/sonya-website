"use client"

import { Camera, Phone, Clock, Lock, Video, Projector } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "CCTV Surveillance",
    description: "Advanced surveillance systems with HD recording and remote monitoring capabilities.",
  },
  {
    icon: Phone,
    title: "EPABX Systems",
    description: "Modern telephone exchange systems for seamless business communication.",
  },
  {
    icon: Clock,
    title: "Time Attendance",
    description: "Automated tracking to streamline employee attendance and payroll.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Secure biometric and card-based authentication for restricted areas.",
  },
  {
    icon: Video,
    title: "Video Door Phones",
    description: "Smart video intercom systems for secure visitor screening.",
  },
  {
    icon: Projector,
    title: "Projectors & Phones",
    description: "Professional-grade equipment for modern office environments.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase mb-4 block">Our Solutions</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Comprehensive Security Solutions
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Tailored for residential, commercial, and enterprise needs with professional installation and 24/7 support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-lg p-8 hover:bg-white/12 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="mb-6 inline-flex p-3 bg-accent/20 text-accent rounded-lg group-hover:bg-accent/30 transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
