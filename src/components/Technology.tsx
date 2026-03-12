"use client";

import ScrollReveal from "./ScrollReveal";

const featuresLeft = [
  "Full editorial & post viz data support",
  "Industry standard media handling",
  "Body & face performance capture",
  "Multi-cam pro-cinema capable",
  "Live Lens Data handling",
  "Layer exporting support",
];

const featuresRight = [
  "Unreal Engine & Unity supported",
  "BlackMagic Design integration",
  "Optitrack Tracking integration",
  "Network functionality",
  "4K & 8K support at 60fps",
  "VR & AR supported",
];

const layers = [
  "Base Color",
  "Lens Data",
  "Velocity",
  "Face Tracking",
  "Material Properties",
  "Body Tracking",
  "Depth",
  "Prop Tracking",
  "Normals",
  "Camera Tracking",
  "Physical Layer",
  "Composite",
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="tech-heading"
    >
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[200px] bg-accent/5"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Right-aligned heading — asymmetry from previous sections */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <ScrollReveal>
            <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-3">
              Under the Hood
            </p>
            <h2
              id="tech-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight"
            >
              Technical
              <br />
              <span className="gradient-text">Overview</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-5 lg:pb-2">
              <span className="text-5xl lg:text-6xl font-heading font-bold gradient-text">
                35+
              </span>
              <div>
                <p className="text-sm text-text-primary font-semibold uppercase tracking-wider">
                  Data Layers
                </p>
                <p className="text-sm text-text-secondary">
                  Exported every frame
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Features in two columns with dot markers */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 mb-20">
          <ScrollReveal>
            <ul className="space-y-4" role="list">
              {featuresLeft.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-text-secondary leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="space-y-4" role="list">
              {featuresRight.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-text-secondary leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* Layer tags — visual rhythm */}
        <ScrollReveal>
          <div className="pt-12 border-t border-border-subtle">
            <p className="text-xs text-text-muted uppercase tracking-[0.4em] mb-6">
              Export layers include
            </p>
            <div className="flex flex-wrap gap-2" role="list" aria-label="Data export layers">
              {layers.map((layer) => (
                <span
                  key={layer}
                  role="listitem"
                  className="px-4 py-2 text-xs font-medium rounded-md border border-border-subtle text-text-secondary hover:border-border-accent hover:text-accent transition-colors duration-200 cursor-default"
                >
                  {layer}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
