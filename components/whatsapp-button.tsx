"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919158031664?text=Hi%20Digital-I!%20I'd%20like%20to%20know%20more%20about%20your%20security%20solutions."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 animate-bounce"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
