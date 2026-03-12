import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "90%", label: "Of all film productions use VFX" },
  { value: "$247B", label: "Global content spend in 2024" },
  { value: "$35.6B", label: "Global VFX market (12.9% CAGR)" },
  { value: "20–25%", label: "Of major film budgets allocated to VFX" },
];

const demoClients = [
  "Netflix",
  "Paramount",
  "Sony",
  "Blackmagic Designs",
];

export default function Traction() {
  return (
    <section
      id="traction"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="traction-heading"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-3">
            Market & Traction
          </p>
          <h2
            id="traction-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-text-primary tracking-tight leading-[1.05]"
          >
            Proven demand,{" "}
            <span className="gradient-text">massive market</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="p-6 rounded-lg bg-bg-secondary border border-border-subtle text-center">
                <p className="text-3xl lg:text-4xl font-heading font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/deck-innovation-center.png"
                alt="MixCast Innovation Center in Los Angeles"
                width={800}
                height={360}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
                CBS Radford Studios Residency
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Between November 2023 and February 2024, MixCast established a
                presence at CBS Radford Studios in Studio City, California,
                conducting daily demonstrations for major studios, industry
                veterans, and top-tier AAA production teams.
              </p>
              <p className="text-xs text-text-muted uppercase tracking-[0.3em] mb-3 font-semibold">
                Demos included
              </p>
              <div className="flex flex-wrap gap-2">
                {demoClients.map((client) => (
                  <span
                    key={client}
                    className="px-3 py-1 text-sm text-text-secondary bg-bg-elevated border border-border-subtle rounded-md"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
