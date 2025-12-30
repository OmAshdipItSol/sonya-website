"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

const serviceOptions = [
  "CCTV Surveillance",
  "EPABX Systems",
  "Time Attendance",
  "Access Control",
  "Video Door Phone",
  "Projectors",
  "Telephones",
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.phone || !formData.name) {
      alert("Please fill in all required fields")
      return
    }

    // WhatsApp message
    const whatsappMessage = `Hi Digital-I! I'm interested in your ${formData.service || "services"}. Here are my details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Location: ${formData.city || "Not provided"}
Message: ${formData.message || "No additional details"}

Please get back to me soon!`

    const whatsappUrl = `https://wa.me/919158031664?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({ name: "", phone: "", email: "", city: "", service: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase mb-4 block">Contact</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Request a free site visit or ask any questions about our security solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-lg p-8 hover:border-accent/50 hover:bg-white/12 transition-all duration-300 group flex flex-col items-center text-center">
            <div className="p-3 bg-accent/20 text-accent rounded-lg mb-6 group-hover:bg-accent/30 transition-colors">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Phone</h3>
            <a href="tel:9158031664" className="text-accent hover:opacity-80 transition-opacity font-medium">
              +91 9158031664
            </a>
          </div>

          <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-lg p-8 hover:border-accent/50 hover:bg-white/12 transition-all duration-300 group flex flex-col items-center text-center">
            <div className="p-3 bg-accent/20 text-accent rounded-lg mb-6 group-hover:bg-accent/30 transition-colors">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Email</h3>
            <a
              href="mailto:digitali3721@gmail.com"
              className="text-accent hover:opacity-80 transition-opacity font-medium break-all"
            >
              digitali3721@gmail.com
            </a>
          </div>

          <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-lg p-8 hover:border-accent/50 hover:bg-white/12 transition-all duration-300 group flex flex-col items-center text-center">
            <div className="p-3 bg-accent/20 text-accent rounded-lg mb-6 group-hover:bg-accent/30 transition-colors">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Location</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Shivthirth Nagar, Kothrud
              <br />
              Pune, Maharashtra 411038
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white/8 backdrop-blur-sm border border-white/15 rounded-lg p-8 hover:border-accent/50 transition-all duration-300">
          <h3 className="text-2xl font-bold text-foreground mb-8">Request a Free Site Visit</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">City/Location</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Pune"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Service Required *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder="Tell us about your security needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold transition-all duration-300 text-sm tracking-wide hover:opacity-90 shadow-lg hover:shadow-xl hover:shadow-accent/30"
            >
              Send Request via WhatsApp
            </button>

            <p className="text-sm text-foreground/50 text-center">
              Your message will be sent to our WhatsApp for a quick response
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
