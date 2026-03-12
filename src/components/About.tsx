"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const team = [
  { name: "Tarrnie Williams", role: "COO & Founder", initials: "TW", photo: "/headshot-tarrnie.png" },
  { name: "Sean McGowan", role: "CEO", initials: "SM", photo: "/headshot-sean.png" },
  { name: "Ben Sheftel", role: "CTO & Founder", initials: "BS", photo: "/headshot-ben.png" },
  { name: "Todd Buchanan", role: "Executive Advisor, Officer", initials: "TB", photo: "/headshot-todd.png" },
  { name: "Justin Maxwell", role: "VP Corporate Development", initials: "JM", photo: "/headshot-justin.png" },
];

const clientLogos = [
  "VIVE", "Pepsi", "Unity", "National Geographic", "Netflix",
  "Sony Pictures", "NBC", "Discovery", "EA Games", "Intel",
  "Relic", "Activision", "Magic Leap", "History",
];

function LogoCarousel({ logos }: { logos: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let pos = 0;
    const speed = 0.5; // px per frame

    const animate = () => {
      pos += speed;
      // When we've scrolled past the first set, reset seamlessly
      const halfWidth = el.scrollWidth / 2;
      if (pos >= halfWidth) pos = 0;
      el.style.transform = `translateX(-${pos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

  // Double the logos for seamless infinite scroll
  const doubled = [...logos, ...logos];

  return (
    <div className="overflow-hidden mask-fade">
      <div ref={scrollRef} className="flex items-center gap-12 whitespace-nowrap will-change-transform">
        {doubled.map((logo, i) => (
          <span
            key={`${logo}-${i}`}
            className="text-lg sm:text-xl font-heading font-semibold text-text-muted/60 tracking-wide hover:text-text-secondary transition-colors duration-200 shrink-0 select-none"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero image */}
        <ScrollReveal>
          <div className="relative rounded-xl overflow-hidden mb-16 aspect-[16/7]">
            <Image
              src="/hero-about.png"
              alt="Real-time virtual production — actor composited into a 3D basketball arena with real-time reflections"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-3">
                Who We Are
              </p>
              <h2
                id="about-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.1]"
              >
                60+ years combined{" "}
                <span className="gradient-text">Film, TV & Games</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.08}>
              <div className="group text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-bg-elevated border-2 border-border-subtle overflow-hidden mb-4 group-hover:border-border-accent transition-colors">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="w-full h-full flex items-center justify-center text-lg font-heading font-bold text-accent">
                      {member.initials}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-heading font-semibold text-text-primary mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs text-text-secondary">{member.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 pt-10 border-t border-border-subtle">
            <p className="text-xs text-text-muted text-center uppercase tracking-[0.4em] mb-8">
              Leadership experience includes
            </p>
            <LogoCarousel logos={clientLogos} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
