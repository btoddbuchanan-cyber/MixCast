import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const issues = [
  {
    title: "Traditional Green Screen",
    points: [
      "Time consuming",
      "Labor intensive",
      "Bloated and expensive backend process",
    ],
    keyIssue:
      "Production teams are unable to view digital effects during filming, essentially shooting in the dark.",
  },
  {
    title: "LED Video Wall",
    points: [
      "Extremely expensive ($1–5M+)",
      "Digital assets only appear behind the actors",
      "Requires significant expertise to get right",
    ],
    keyIssue:
      "LED walls demand picture-locked assets on the day of filming. What you film is what you get.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-3">
            The Problem
          </p>
          <h2
            id="problem-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-text-primary tracking-tight leading-[1.05] max-w-4xl"
          >
            The industry needs{" "}
            <span className="gradient-text">a better solution</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
            Virtual production is in high demand, but current methods carry
            significant limitations. Traditional green screen is outdated, and
            LED walls are prohibitively expensive.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {issues.map((issue, i) => (
            <ScrollReveal key={issue.title} delay={i * 0.15}>
              <div className="relative p-8 rounded-lg bg-bg-secondary border border-border-subtle h-full">
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
                  {issue.title}
                </h3>
                <ul className="space-y-3 mb-8">
                  {issue.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400/80 mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-border-subtle">
                  <p className="text-xs text-text-muted uppercase tracking-[0.3em] mb-2 font-semibold">
                    Key Issue
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {issue.keyIssue}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 relative rounded-lg overflow-hidden aspect-[21/9]">
            <Image
              src="/deck-studio-greenscreen.png"
              alt="MixCast green screen studio at CBS Radford Studios"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
            <p className="absolute bottom-4 left-6 text-xs text-text-muted">
              MixCast stage at CBS Radford Studios, Studio City, California
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
