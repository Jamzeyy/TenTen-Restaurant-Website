"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Not Just Dim Sum",
    titleChinese: "不仅是点心",
    description:
      "We take the tradition of Dim Sum and make it modern — new flavors and ingredients meet classic technique. Every piece is handmade daily, from the dough to the filling.",
    image:
      "https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20221126075455-71836435-698w.png",
    imageAlt: "An assortment of handcrafted dim sum dishes arranged on bamboo steamers",
    align: "left" as const,
  },
  {
    title: "Delicacies of China",
    titleChinese: "中华美食",
    description:
      "Dishes from all regions of China give you a taste of the country's unique flavors. Our chefs bring recipes and techniques passed down generation after generation.",
    image:
      "https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20221126075511-698w.png",
    imageAlt: "Regional Chinese delicacies featuring seafood and traditional Cantonese dishes",
    align: "right" as const,
  },
  {
    title: "Desserts with a Twist",
    titleChinese: "创意甜点",
    description:
      "Our desserts blend Asian flavors with sophisticated Western presentation. We also serve traditional Chinese desserts for a taste of what we call 'Home.'",
    image:
      "https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20221126075526-698w.jpg",
    imageAlt: "Artistically plated desserts combining Eastern and Western pastry traditions",
    align: "left" as const,
  },
];

export default function FoodFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      aria-label="What makes our cuisine special"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0b0907] to-[#0a0a0a]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 space-y-32">
        {features.map((feature, i) => (
          <article
            key={feature.title}
            className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{
              transitionDelay: isVisible ? `${i * 200}ms` : "0ms",
            }}
          >
            {/* Image */}
            <div
              className={`relative ${
                feature.align === "right" ? "lg:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-brand-500/30 rounded-tl-lg" aria-hidden="true" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-brand-500/30 rounded-br-lg" aria-hidden="true" />
            </div>

            {/* Text */}
            <div
              className={feature.align === "right" ? "lg:order-1" : ""}
            >
              <span className="font-[var(--font-chinese)] text-brand-600 text-sm" aria-hidden="true">
                {feature.titleChinese}
              </span>
              <h3 className="mt-2 font-[var(--font-display)] text-3xl sm:text-4xl font-bold">
                {feature.title.split(" ").map((word, j) =>
                  j === feature.title.split(" ").length - 1 ? (
                    <span key={j} className="text-brand-400">
                      {" "}
                      {word}
                    </span>
                  ) : (
                    <span key={j}>{j > 0 ? " " : ""}{word}</span>
                  )
                )}
              </h3>
              <p className="mt-6 text-neutral-300 leading-relaxed text-lg">
                {feature.description}
              </p>
              <a
                href="#menu"
                className="mt-8 inline-flex items-center gap-2 py-2 text-brand-400 font-semibold tracking-wider uppercase text-sm hover:text-brand-300 transition-colors group"
              >
                Explore the Menu
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
