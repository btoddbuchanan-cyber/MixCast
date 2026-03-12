"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Green Screen Capture",
    description:
      "Actors perform on a standard green screen stage with professional film equipment. No specialized LED walls needed.",
  },
  {
    num: "02",
    title: "Volumetric Sync",
    description:
      "MixCast tracks camera position, lens data, and actor movement, synchronizing everything with the 3D digital environment.",
  },
  {
    num: "03",
    title: "Real-Time Output",
    description:
      "The director sees the final composited image live. Adjustments to lighting, camera angle, and environment happen instantly on set.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Grid mesh background for this section */}
      <div className="absolute inset-0 grid-mesh" aria-hidden="true" />
      {/* Accent glow: bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] bg-brand-blue/8"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Center-aligned heading — different from left-aligned About & Product */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-3">
              How It Works
            </p>
            <h2
              id="process-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6"
            >
              From green screen to
              <br />
              <span className="gradient-text">final frame</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We volumetrically sync real-world elements and 3D digital
              environments, enabling cameras and filmmakers to see and film
              both simultaneously.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps — large numbered, horizontal on desktop */}
        <div className="grid md:grid-cols-3 gap-px bg-border-subtle rounded-xl overflow-hidden">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.12}>
              <div className="bg-bg-secondary p-8 lg:p-10 h-full group hover:bg-bg-elevated transition-colors duration-300">
                <span className="block font-heading text-5xl lg:text-6xl font-bold text-accent/15 group-hover:text-accent/25 transition-colors duration-300 mb-6 select-none">
                  {step.num}
                </span>
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
