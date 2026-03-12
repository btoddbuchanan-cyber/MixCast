export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 particle-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue/10 to-cyan/5 blur-[120px]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo icon */}
        <div className="mb-8 animate-float">
          <svg
            viewBox="0 0 120 80"
            className="w-32 h-20 mx-auto"
            fill="none"
          >
            <circle cx="20" cy="40" r="8" fill="#1a5cff" opacity="0.5" />
            <circle cx="35" cy="40" r="10" fill="#1a5cff" opacity="0.6" />
            <circle cx="52" cy="40" r="12" fill="#1a5cff" opacity="0.7" />
            <polygon points="65,20 100,40 65,60" fill="#00d4ff" />
          </svg>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-blue">MIX</span>
          <span className="gradient-text">CAST</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light tracking-wide">
          NEXT GENERATION VIRTUAL PRODUCTION
        </p>

        <p className="text-lg text-cyan/80 mb-12">
          Efficient, Flexible, Affordable
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#product"
            className="px-8 py-3 bg-gradient-to-r from-blue to-cyan text-white font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Explore the Technology
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-cyan/30 text-cyan rounded-full hover:bg-cyan/5 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-cyan/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
