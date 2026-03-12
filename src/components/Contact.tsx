"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Centered glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] bg-accent/6"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <ScrollReveal>
          <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-3">
            Let&apos;s Talk
          </p>
          <h2
            id="contact-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6"
          >
            Ready to transform
            <br />
            <span className="gradient-text">your production?</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-12 max-w-xl mx-auto">
            Whether you&apos;re producing a feature film, episodic series, or
            commercial content, MixCast can revolutionize your virtual
            production workflow.
          </p>
          <a
            href="mailto:info@mixcast.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-bg-primary font-semibold rounded-md hover:bg-accent-dim transition-colors duration-200 text-base tracking-wide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Us
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
