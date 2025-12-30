"use client"

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold tracking-widest text-accent uppercase mb-4 block">Our Story</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">About Digital-I</h2>

        <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed mb-8">
          Digital-I is your trusted partner in advanced security and surveillance solutions. With over a decade of
          expertise, we've been delivering cutting-edge CCTV systems, EPABX solutions, and smart security technologies
          to residential complexes, corporate offices, and enterprises across Pune.
        </p>

        <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed mb-16">
          Our commitment to excellence, professional installation, and exceptional support has earned the trust of 1000+
          satisfied clients. We deliver comprehensive security solutions that provide peace of mind.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-lg p-8 hover:border-accent/50 hover:bg-white/12 transition-all duration-300 group text-center">
            <div className="text-5xl font-bold text-accent mb-3">1000+</div>
            <p className="text-foreground/70 font-medium">Satisfied Clients</p>
          </div>
          <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-lg p-8 hover:border-accent/50 hover:bg-white/12 transition-all duration-300 group text-center">
            <div className="text-5xl font-bold text-accent mb-3">500+</div>
            <p className="text-foreground/70 font-medium">Successful Installations</p>
          </div>
          <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-lg p-8 hover:border-accent/50 hover:bg-white/12 transition-all duration-300 group text-center">
            <div className="text-5xl font-bold text-accent mb-3">24/7</div>
            <p className="text-foreground/70 font-medium">Expert Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
