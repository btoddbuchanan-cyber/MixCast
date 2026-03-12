"use client";

import Image from "next/image";
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
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
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

        {/* Data export layers visualization */}
        <ScrollReveal>
          <div className="mt-20 relative rounded-xl overflow-hidden">
            <Image
              src="/deck-data-layers.png"
              alt="MixCast 24+ data export layers — base color, velocity, face tracking, depth, normals, camera tracking, and composite"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
