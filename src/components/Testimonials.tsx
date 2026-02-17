"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria C.",
    date: "January 2026",
    rating: 5,
    text: "The dim sum here is absolutely incredible! The shrimp dumplings are the best I've ever had outside of Hong Kong. Every piece is handmade and you can taste the difference. We drive 30 minutes just for their weekend dim sum.",
  },
  {
    name: "James L.",
    date: "December 2025",
    rating: 5,
    text: "Ten Ten is our family's go-to spot for authentic Chinese food. The roast duck is crispy perfection and the lobster is always so fresh. The staff is warm and welcoming — it feels like eating at a family member's home.",
  },
  {
    name: "Sarah & David W.",
    date: "February 2026",
    rating: 5,
    text: "We celebrated our anniversary here and it was magical. The swan durian crisp was a showstopper — almost too beautiful to eat! Incredible variety on the menu and everything we tried was outstanding.",
  },
  {
    name: "Tommy H.",
    date: "November 2025",
    rating: 5,
    text: "As someone who grew up eating dim sum in Guangzhou, I can honestly say Ten Ten does it right. The soup dumplings have that perfect thin skin and the broth inside is deeply savory. A real gem in Sunrise.",
  },
  {
    name: "Patricia M.",
    date: "January 2026",
    rating: 5,
    text: "Brought my visiting parents here and they were blown away. The seafood selection is unmatched — the salt and pepper shrimp was cooked to perfection. Already planning our next visit!",
  },
  {
    name: "Kevin & Lisa R.",
    date: "December 2025",
    rating: 5,
    text: "Best Chinese restaurant in South Florida, hands down. The congee is soul-warming, the beef chow fun has that perfect wok flavor, and the desserts are creative and delicious. Five stars across the board.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
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

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-[#0a0a0a] via-[#0c0908] to-[#0a0a0a]"
      aria-labelledby="testimonials-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="font-[var(--font-chinese)] text-brand-600 text-sm tracking-[0.5em]" aria-hidden="true">
            客户评价
          </span>
          <h2 id="testimonials-heading" className="mt-4 font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold">
            What Our{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              Guests Say
            </span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4" aria-hidden="true">
            <div className="w-12 h-[1px] bg-brand-600" />
            <div className="w-2 h-2 rotate-45 bg-brand-500" />
            <div className="w-12 h-[1px] bg-brand-600" />
          </div>
        </div>

        {/* Scroll controls */}
        <div className="mt-12 flex justify-end gap-2" aria-label="Review navigation">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full border border-white/10 text-neutral-300 hover:text-brand-400 hover:border-brand-500/40 transition-all"
            aria-label="Scroll reviews left"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full border border-white/10 text-neutral-300 hover:text-brand-400 hover:border-brand-500/40 transition-all"
            aria-label="Scroll reviews right"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Testimonials carousel */}
        <div
          ref={scrollRef}
          className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          role="list"
          aria-label="Customer reviews"
        >
          {testimonials.map((testimonial, i) => (
            <article
              key={i}
              role="listitem"
              className={`flex-shrink-0 w-[380px] snap-center p-8 bg-white/[0.03] border border-white/[0.08] rounded-2xl hover:border-brand-500/30 hover:bg-brand-500/[0.02] transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${300 + i * 100}ms` : "0ms",
              }}
            >
              <Quote className="w-8 h-8 text-brand-500/30 mb-4" aria-hidden="true" />
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-brand-500 text-brand-500"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote>
                <p className="text-neutral-300 leading-relaxed text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </blockquote>
              <footer className="mt-6 pt-4 border-t border-white/[0.06]">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs text-neutral-400 mt-1">
                  <time>{testimonial.date}</time>
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
