"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

/* Pre-computed particle positions to avoid Math.random() hydration mismatch */
const PARTICLES = [
  { left: 5, top: 12, delay: 0.2, duration: 5.1 },
  { left: 15, top: 78, delay: 3.4, duration: 6.2 },
  { left: 22, top: 35, delay: 1.1, duration: 4.8 },
  { left: 30, top: 90, delay: 4.7, duration: 7.3 },
  { left: 38, top: 22, delay: 2.0, duration: 5.6 },
  { left: 45, top: 65, delay: 5.3, duration: 4.4 },
  { left: 52, top: 8, delay: 0.8, duration: 6.9 },
  { left: 58, top: 48, delay: 3.9, duration: 5.2 },
  { left: 65, top: 82, delay: 1.6, duration: 7.1 },
  { left: 72, top: 30, delay: 4.2, duration: 4.6 },
  { left: 78, top: 55, delay: 2.5, duration: 6.4 },
  { left: 84, top: 15, delay: 5.8, duration: 5.8 },
  { left: 90, top: 70, delay: 0.5, duration: 4.2 },
  { left: 95, top: 42, delay: 3.1, duration: 7.5 },
  { left: 10, top: 58, delay: 1.9, duration: 6.0 },
  { left: 35, top: 5, delay: 4.5, duration: 5.4 },
  { left: 48, top: 92, delay: 2.8, duration: 4.9 },
  { left: 62, top: 18, delay: 5.1, duration: 6.7 },
  { left: 75, top: 75, delay: 0.3, duration: 5.0 },
  { left: 88, top: 38, delay: 3.6, duration: 7.8 },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Welcome to Ten Ten Seafood & Dim Sum"
    >
      {/* Background layers */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/-E5-BE-AE-E4-BF-A1-E5-9B-BE-E7-89-87_20221126075526-93382c9a-1920w.jpg')`,
            transform: !mounted || prefersReducedMotion
              ? "scale(1.05)"
              : `scale(1.1) translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
            transition: "transform 0.3s ease-out",
          }}
          role="img"
          aria-label="Beautifully plated seafood dishes"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Floating particles — decorative, only render after hydration */}
      {mounted && !prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-brand-400/30 rounded-full animate-float"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Chinese characters accent — decorative */}
        <p
          className="mb-6 opacity-0"
          style={{ animation: "fade-up 0.8s ease-out 0.2s forwards" }}
          aria-hidden="true"
        >
          <span className="font-[var(--font-chinese)] text-brand-600 text-lg tracking-[0.5em]">
            天天海鲜点心
          </span>
        </p>

        {/* Decorative divider */}
        <div
          className="flex items-center justify-center gap-4 mb-8 opacity-0"
          style={{ animation: "fade-up 0.8s ease-out 0.3s forwards" }}
          aria-hidden="true"
        >
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-brand-500" />
          <div className="w-2 h-2 rotate-45 border border-brand-500" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-brand-500" />
        </div>

        {/* Main headline */}
        <h1
          className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight opacity-0"
          style={{ animation: "fade-up 1s ease-out 0.4s forwards" }}
        >
          <span className="block text-white">Where Tradition</span>
          <span className="block mt-2 bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
            Meets the Sea
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="mt-8 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed text-balance opacity-0"
          style={{ animation: "fade-up 0.8s ease-out 0.7s forwards" }}
        >
          Handcrafted dim sum, live seafood, and time-honored Cantonese recipes
          — made fresh daily by master chefs in Sunrise, Florida.
        </p>

        {/* CTA Buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          style={{ animation: "fade-up 0.8s ease-out 0.9s forwards" }}
        >
          <a
            href="https://tentenseafoodgrill.kwickmenu.com/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase bg-brand-500 text-navy-900 rounded-full hover:bg-brand-400 transition-all duration-500 shadow-2xl shadow-brand-500/30 hover:shadow-brand-400/50 hover:scale-105"
          >
            Order Online
          </a>
          <a
            href="#menu"
            className="px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase border-2 border-brand-500/50 text-brand-400 rounded-full hover:bg-brand-500/10 hover:border-brand-500/80 transition-all duration-500"
          >
            View Our Menu
          </a>
        </div>

        {/* Business hours badge */}
        <div
          className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-brand-700/30 rounded-full opacity-0"
          style={{ animation: "fade-up 0.8s ease-out 1.1s forwards" }}
        >
          <div className="w-2 h-2 bg-jade-500 rounded-full animate-pulse" aria-hidden="true" />
          <span className="text-sm text-neutral-300">
            Open Daily &middot;{" "}
            <span className="text-brand-400 font-medium">11 AM – 10 PM</span>
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span className="text-xs tracking-widest uppercase text-brand-500/70">
          Explore
        </span>
        <ChevronDown className="w-5 h-5 text-brand-500/70" />
      </div>
    </section>
  );
}
