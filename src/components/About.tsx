"use client";

import ScrollReveal from "./ScrollReveal";

const team = [
  { name: "Tarrnie Williams", role: "COO & Founder", initials: "TW" },
  { name: "Sean McGowan", role: "CEO", initials: "SM" },
  { name: "Ben Sheftel", role: "CTO & Founder", initials: "BS" },
];

const clientLogos = [
  "VIVE", "Pepsi", "Unity", "National Geographic", "Netflix",
  "Sony Pictures", "NBC", "Discovery", "EA Games", "Intel",
  "Relic", "Activision", "Magic Leap", "History",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div
        className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent/20 via-brand-blue/10 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-3">
            Who We Are
          </p>
          <h2
            id="about-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-text-primary tracking-tight leading-[1.05]"
          >
            60+ years combined
            <br />
            <span className="gradient-text">Film, TV & Games</span>
          </h2>
        </ScrollReveal>

        <div className="mt-20 grid md:grid-cols-3 gap-6 lg:gap-10">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.12}>
              <div
                className={`group relative p-8 rounded-lg bg-bg-secondary border border-border-subtle hover:border-border-accent transition-all duration-300 ${
                  i === 1 ? "md:translate-y-8" : ""
                }`}
              >
                <span
                  className="absolute top-4 right-4 text-6xl font-heading font-bold text-text-primary/[0.04] leading-none select-none"
                  aria-hidden="true"
                >
                  {member.initials}
                </span>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-md bg-bg-elevated border border-border-subtle flex items-center justify-center mb-6 group-hover:border-border-accent transition-colors">
                    <span className="text-lg font-heading font-bold text-accent">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-text-secondary">{member.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-24 pt-16 border-t border-border-subtle">
            <p className="text-xs text-text-muted text-center uppercase tracking-[0.3em] mb-10">
              Leadership experience includes
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3" aria-label="Companies our leadership has worked with">
              {clientLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-sm text-text-muted/80 font-medium tracking-wide hover:text-text-secondary transition-colors duration-200"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
