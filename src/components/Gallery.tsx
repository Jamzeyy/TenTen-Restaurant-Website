"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20221126075531-698w.jpg",
    alt: "Signature seafood platter with fresh prawns and seasonal catch",
    caption: "Fresh From the Ocean",
  },
  {
    src: "https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/%E5%A4%A9%E9%B9%85%E9%85%A5-698w.png",
    alt: "Delicate swan-shaped durian pastries with golden crust",
    caption: "Swan Durian Crisp",
  },
  {
    src: "https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/%E6%A4%92%E7%9B%90%E6%B3%A2%E5%A3%AB%E9%A1%BF%E5%A4%A7%E9%BE%99%E8%99%BE-698w.png",
    alt: "Whole salt and pepper Boston lobster with crispy garlic and chili",
    caption: "Salt & Pepper Boston Lobster",
  },
  {
    src: "https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/%E7%81%8C%E6%B1%A4%E5%8C%85-698w.png",
    alt: "Handmade Shanghai soup dumplings in a bamboo steamer",
    caption: "Xiao Long Bao",
  },
  {
    src: "https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/%E8%9E%83%E8%9F%B92-698w.png",
    alt: "Live crab prepared with ginger and scallion",
    caption: "Live Crab Selection",
  },
  {
    src: "https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/%E6%89%87%E8%B4%9D-698w.jpg",
    alt: "Fresh scallops served on the half shell with garlic vermicelli",
    caption: "Garlic Scallops on Shell",
  },
  {
    src: "https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/%E7%83%A4%E9%B8%AD-698w.jpg",
    alt: "Whole roast duck with crispy skin and aromatic glaze",
    caption: "Signature Roast Duck",
  },
  {
    src: "https://lirp.cdn-website.com/d480aa8d/dms3rep/multi/opt/%E7%89%9B%E8%82%89%E7%90%83-698w.png",
    alt: "Steamed beef balls with cilantro in a bamboo steamer",
    caption: "Steamed Beef Balls",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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

  // WCAG: Focus management for lightbox
  useEffect(() => {
    if (lightboxIndex !== null) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % galleryImages.length : null
        );
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + galleryImages.length) % galleryImages.length
            : null
        );
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="font-[var(--font-chinese)] text-brand-600 text-sm tracking-[0.5em]" aria-hidden="true">
            美食相册
          </span>
          <h2 id="gallery-heading" className="mt-4 font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold">
            A Feast for{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              the Eyes
            </span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4" aria-hidden="true">
            <div className="w-12 h-[1px] bg-brand-600" />
            <div className="w-2 h-2 rotate-45 bg-brand-500" />
            <div className="w-12 h-[1px] bg-brand-600" />
          </div>
        </div>

        {/* Gallery grid */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          role="list"
          aria-label="Food gallery"
        >
          {galleryImages.map((image, i) => (
            <div
              key={i}
              role="listitem"
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms",
              }}
            >
              <button
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer w-full"
                aria-label={`View larger: ${image.caption}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                  aria-hidden="true"
                >
                  <span className="text-sm font-medium text-brand-300">
                    {image.caption}
                  </span>
                </div>
                <div
                  className="absolute inset-0 border-2 border-brand-400/0 group-hover:border-brand-400/40 rounded-xl transition-all duration-500"
                  aria-hidden="true"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox — WCAG: dialog role, focus trap, escape to close */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${galleryImages[lightboxIndex].caption}`}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            ref={closeButtonRef}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-3 transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close image viewer"
          >
            <X className="w-8 h-8" aria-hidden="true" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + galleryImages.length) %
                  galleryImages.length
              );
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" aria-hidden="true" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex + 1) % galleryImages.length
              );
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" aria-hidden="true" />
          </button>
          <div
            className="max-w-4xl max-h-[85vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="mt-4 text-center text-brand-400 font-medium">
              {galleryImages[lightboxIndex].caption}
            </p>
            <p className="mt-1 text-center text-sm text-neutral-400" aria-live="polite">
              Image {lightboxIndex + 1} of {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
