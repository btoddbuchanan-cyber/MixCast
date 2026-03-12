import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    title: "Live On-Set Visualization",
    description:
      "Production teams view digital effects in real-time during filming, with the capability to produce a final composite on the same day.",
  },
  {
    title: "Flexible Asset Workflow",
    description:
      "Modify any digital element in real-time or at a future date. Film with temporary drafts or final assets at any stage of development.",
  },
  {
    title: "Risk & Cost Reduction",
    description:
      "Every feature is designed to enhance efficiency, minimize risk, and ultimately reduce production costs by up to 90% compared to LED walls.",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="solution-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-3">
                The Solution
              </p>
              <h2
                id="solution-heading"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.05]"
              >
                MixCast eliminates{" "}
                <span className="gradient-text">the old problems</span>
              </h2>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                MixCast combines the best of both traditional VFX and LED wall
                solutions. Film in any direction — filmmakers are not confined by
                the dimensions of an LED wall.
              </p>
            </ScrollReveal>

            <div className="mt-10 space-y-8">
              {benefits.map((benefit, i) => (
                <ScrollReveal key={benefit.title} delay={i * 0.12}>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-accent text-sm font-semibold">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/deck-realtime-monitor.png"
                alt="Real-time composite shown on monitor during green screen filming"
                width={600}
                height={940}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
