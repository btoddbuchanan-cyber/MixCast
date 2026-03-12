"use client";

import ScrollReveal from "./ScrollReveal";

const patents = [
  {
    title: "Cinematography Via Immersive Computing Environment",
    id: "01",
  },
  {
    title: "Self-Coordinating Camera Drone System",
    id: "02",
  },
  {
    title: "Multi-Modal Data Fusion for Scene Segmentation",
    id: "03",
  },
  {
    title: "Method And System For Chroma Keying",
    id: "04",
  },
];

export default function Patents() {
  return (
    <section
      id="patents"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="patents-heading"
    >
      {/* Background treatment: subtle diagonal */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-secondary"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Horizontal layout: big number left, content right */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 items-start">
          {/* Left: Patent count as bold statement */}
          <ScrollReveal direction="left">
            <div className="lg:sticky lg:top-32">
              <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-3">
                Intellectual Property
              </p>
              <h2
                id="patents-heading"
                className="font-heading text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-6"
              >
                Our Patents
              </h2>
              <div className="flex items-baseline gap-3">
                <span className="text-8xl lg:text-9xl font-heading font-bold gradient-text leading-none">
                  4
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                    Patents
                  </p>
                  <p className="text-sm text-accent">Awarded</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Patent list as bordered cards */}
          <div className="space-y-4">
            {patents.map((patent, i) => (
              <ScrollReveal key={patent.id} delay={i * 0.1}>
                <div className="flex items-start gap-6 p-6 rounded-lg border border-border-subtle hover:border-border-accent bg-bg-secondary/50 transition-all duration-300 group">
                  <span className="text-3xl font-heading font-bold text-accent/20 group-hover:text-accent/40 transition-colors shrink-0 select-none">
                    {patent.id}
                  </span>
                  <p className="text-lg text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed pt-1">
                    {patent.title}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
