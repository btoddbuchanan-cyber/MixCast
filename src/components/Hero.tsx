"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Layered background depth */}
      <div className="absolute inset-0 grid-mesh" />
      <div className="absolute inset-0 noise-overlay" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(0,229,255,0.06) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-[15%] w-px h-[60vh] bg-gradient-to-b from-transparent via-accent/20 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-6">
                Virtual Production Platform
              </p>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold tracking-tight leading-[0.95] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <span className="text-brand-blue">MIX</span>
              <span className="gradient-text">CAST</span>
              <br />
              <span className="text-text-primary text-3xl sm:text-4xl lg:text-5xl font-light block mt-4">
                Film the impossible.
                <br />
                In real time.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-text-secondary max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Capture real actors inside 3D digital environments with zero
              post-compositing delay. What you see on set is the final frame.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#product"
                className="px-8 py-3.5 bg-accent text-bg-primary font-semibold rounded-md hover:bg-accent-dim transition-colors duration-200 text-sm tracking-wide"
              >
                Explore Technology
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-border-accent text-accent rounded-md hover:bg-accent/5 transition-colors duration-200 text-sm tracking-wide"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: Logo mark */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="animate-float">
              <Image
                src="/logo.png"
                alt=""
                width={280}
                height={200}
                className="w-64 h-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                aria-hidden="true"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
        <motion.div
          className="w-5 h-9 border-2 border-text-muted/30 rounded-full flex items-start justify-center p-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-1 h-2.5 bg-accent rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
