"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image src="/images/logo.jpeg" alt="Digital-I Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-lg hidden sm:inline text-foreground">Digital-I</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="tel:9158031664"
              className="hidden sm:flex items-center gap-2 px-6 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity text-sm"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/60 hover:text-accent transition-colors hover:bg-secondary rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9158031664"
              className="px-4 py-2 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Call Now
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
