"use client";

import { useEffect, useRef, useState } from "react";
import { Flame, Leaf, Award, Clock } from "lucide-react";

const stats = [
  { icon: Flame, value: "100+", label: "Dishes Daily" },
  { icon: Leaf, value: "Fresh", label: "Every Morning" },
  { icon: Award, value: "30+", label: "Years of Tradition" },
  { icon: Clock, value: "7 Days", label: "A Week" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-500/[0.03] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="font-[var(--font-chinese)] text-brand-600 text-sm tracking-[0.5em]" aria-hidden="true">
            关于我们
          </span>
          <h2 id="about-heading" className="mt-4 font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold">
            The Beauty of{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              Tradition
            </span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4" aria-hidden="true">
            <div className="w-12 h-[1px] bg-brand-600" />
            <div className="w-2 h-2 rotate-45 bg-brand-500" />
            <div className="w-12 h-[1px] bg-brand-600" />
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/img_v2_ac3bb7da-6cda-4829-89d2-df928752107g-1920w.jpg"
                alt="Elegant dining area at Ten Ten Seafood Restaurant with warm lighting and traditional Chinese decor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-brand-500 text-navy-900 p-6 rounded-2xl shadow-2xl shadow-brand-500/20 max-w-[220px]">
              <p className="font-[var(--font-display)] text-3xl font-bold">
                Est. 2022
              </p>
              <p className="mt-1 text-sm font-medium text-navy-800">
                Sunrise, Florida
              </p>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-semibold leading-snug">
              Founded on the love for food{" "}
              <span className="text-brand-400">& tradition</span>
            </h3>
            <p className="mt-6 text-neutral-300 leading-relaxed text-lg">
              Ten Ten Seafood & Dim Sum Restaurant is a celebration of culture
              and identity. Our mission is to bring happiness to all who walk
              through our doors. Every dish is made fresh daily with the highest
              quality ingredients available.
            </p>
            <p className="mt-4 text-neutral-300 leading-relaxed text-lg">
              Our talented chefs bring sophistication and richness to every
              plate — old school techniques reimagined with modern flair. From
              handcrafted dim sum to live seafood prepared to order, we guarantee
              you&apos;ll never leave without a smile.
            </p>

            {/* Mini features */}
            <ul className="mt-10 grid grid-cols-2 gap-6" aria-label="Our specialties">
              {[
                "Handmade Dim Sum Daily",
                "Live Seafood Selection",
                "Regional Chinese Flavors",
                "Family-Style Dining",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 bg-brand-500 rounded-full flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-neutral-200">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#menu"
              className="mt-10 inline-flex items-center gap-2 text-brand-400 font-semibold tracking-wider uppercase text-sm hover:text-brand-300 transition-colors group py-2"
            >
              Explore Our Menu
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          role="list"
          aria-label="Restaurant highlights"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              role="listitem"
              className="text-center p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl hover:border-brand-500/30 hover:bg-brand-500/[0.03] transition-all duration-500"
            >
              <Icon className="w-6 h-6 text-brand-500 mx-auto mb-3" aria-hidden="true" />
              <p className="font-[var(--font-display)] text-3xl font-bold text-white">
                {value}
              </p>
              <p className="mt-1 text-sm text-neutral-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
