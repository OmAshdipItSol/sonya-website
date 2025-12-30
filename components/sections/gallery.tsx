"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/images/intimage1.jpeg",
    title: "Professional Monitoring Center",
    description: "State-of-the-art CCTV surveillance system with multi-camera setup",
  },
  {
    id: 2,
    type: "image",
    src: "/images/intimage2.jpeg",
    title: "Advanced Security Installation",
    description: "Comprehensive facility monitoring with professional equipment deployment",
  },
  {
    id: 3,
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/intvideo1-H0hm7hKZctwhC16kd3gFUyRRTVXBWi.mp4",
    title: "CCTV System Demo - Camera Feed 1",
    description: "Live demonstration of our professional CCTV monitoring system in action",
  },
  {
    id: 4,
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/intvideo2-jMWOp9ZbUs6McagJ630DmgV3niBE6q.mp4",
    title: "Multi-Camera Surveillance Setup",
    description: "Advanced multi-angle surveillance installation showcasing comprehensive coverage",
  },
  {
    id: 5,
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/intvideo3-FzPx65ElYW6oGbiDe9qCe3LupyGfvs.mp4",
    title: "Facility Security Monitoring",
    description: "Real-time facility monitoring with professional security infrastructure",
  },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1))
  }

  const current = galleryItems[currentIndex]

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase mb-4 block">
            Project Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Work</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Real installations and projects from satisfied clients across Pune
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left thumbnail */}
          <div className="hidden lg:flex items-center justify-center">
            {currentIndex > 0 && (
              <div
                className="relative h-56 w-full rounded-lg overflow-hidden border border-border/50 opacity-40 hover:opacity-70 transition-all duration-300 cursor-pointer"
                onClick={prev}
              >
                {galleryItems[currentIndex - 1].type === "video" ? (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <Play size={32} className="text-white" />
                  </div>
                ) : (
                  <Image
                    src={galleryItems[currentIndex - 1].src || "/placeholder.svg"}
                    alt="Previous"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            )}
          </div>

          {/* Main content */}
          <div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-border/50 mb-8 shadow-lg hover:shadow-xl transition-shadow">
              {current.type === "video" ? (
                <div className="w-full h-full bg-black flex flex-col items-center justify-center relative group">
                  <video
                    src={current.src}
                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                    controls
                    controlsList="nodownload"
                  />
                </div>
              ) : (
                <Image src={current.src || "/placeholder.svg"} alt={current.title} fill className="object-cover" />
              )}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-3">{current.title}</h3>
            <p className="text-foreground/60 mb-8 leading-relaxed">{current.description}</p>

            {/* Navigation buttons */}
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="flex-1 py-3 rounded-lg border border-foreground/20 text-foreground hover:border-accent hover:text-accent transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm"
              >
                <ChevronLeft size={18} /> Previous
              </button>
              <button
                onClick={next}
                className="flex-1 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium transition-all duration-300 text-sm tracking-wide hover:opacity-90 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right thumbnail */}
          <div className="hidden lg:flex items-center justify-center">
            {currentIndex < galleryItems.length - 1 && (
              <div
                className="relative h-56 w-full rounded-lg overflow-hidden border border-border/50 opacity-40 hover:opacity-70 transition-all duration-300 cursor-pointer"
                onClick={next}
              >
                {galleryItems[currentIndex + 1].type === "video" ? (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <Play size={32} className="text-white" />
                  </div>
                ) : (
                  <Image
                    src={galleryItems[currentIndex + 1].src || "/placeholder.svg"}
                    alt="Next"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-12 text-foreground/50 text-sm">
          {currentIndex + 1} of {galleryItems.length}
        </div>
      </div>
    </section>
  )
}
