"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const capabilities = [
  {
    title: "Real-Time Capture",
    description:
      "See the final composited frame on set, instantly. No waiting for post-production to reveal the shot.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Volumetric Sync",
    description:
      "Proprietary technology merges real-world camera data with 3D environments in perfect spatial alignment.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
      />
    ),
  },
  {
    title: "Fraction of the Cost",
    description:
      "Dramatically less expensive than LED wall volumes. Use standard green screen stages you already have.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

export default function Product() {
  return (
    <section
      id="product"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="product-heading"
    >
      {/* Background: diagonal gradient slab */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-primary"
        aria-hidden="true"
      />
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Split layout: large text left, description right */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-end mb-24">
          <ScrollReveal>
            <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-3">
              The Platform
            </p>
            <h2
              id="product-heading"
              className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
            >
              <span className="text-text-primary">Our</span>
              <br />
              <span className="gradient-text">Product</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-text-secondary leading-relaxed lg:pb-2">
              A proprietary capture solution for the Film/TV industry. MixCast
              enables filmmakers to place real actors inside fully-realized 3D
              digital worlds — and see the finished result while still on set.
            </p>
          </ScrollReveal>
        </div>

        {/* Hero image for product section */}
        <ScrollReveal>
          <div className="mb-16 relative rounded-lg overflow-hidden aspect-[16/10] lg:aspect-[21/9]">
            <Image
              src="/deck-lightsaber-r2d2.png"
              alt="MixCast digital prop control — actor with lightsaber and R2D2 composited in real-time on a green screen stage"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/40 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Feature cards — horizontal with left accent bar */}
        <div className="space-y-6">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 0.1}>
              <div className="group flex flex-col sm:flex-row gap-6 sm:gap-8 items-start p-6 sm:p-8 rounded-lg bg-bg-elevated/50 border border-border-subtle hover:border-border-accent transition-all duration-300">
                <div className="shrink-0 w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {cap.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
