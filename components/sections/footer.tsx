"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border/50 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 relative">
                <Image src="/images/logo.jpeg" alt="Digital-I Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-lg text-foreground">Digital-I</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Professional security solutions for homes, offices, and enterprises across Pune.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-wide uppercase text-foreground">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-foreground/60 hover:text-accent transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-foreground/60 hover:text-accent transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/60 hover:text-accent transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-wide uppercase text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:9158031664"
                  className="text-foreground/60 hover:text-accent transition-colors duration-300"
                >
                  +91 9158031664
                </a>
              </li>
              <li>
                <a
                  href="mailto:digitali3721@gmail.com"
                  className="text-foreground/60 hover:text-accent transition-colors duration-300"
                >
                  digitali3721@gmail.com
                </a>
              </li>
              <li className="text-foreground/60 text-xs leading-relaxed">
                Shivthirth Nagar, Kothrud
                <br />
                Pune, Maharashtra 411038
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-6 text-sm tracking-wide uppercase text-foreground">Follow</h4>
            <a
              href="https://instagram.com/digital_i.21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 bg-accent/20 hover:bg-accent/30 rounded-lg transition-all duration-300 text-sm font-medium text-accent"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <p className="text-center text-foreground/50 text-sm">
            © {currentYear} Digital-I Security Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
