"use client";

import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="relative py-32"
      aria-labelledby="contact-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="font-[var(--font-chinese)] text-brand-600 text-sm tracking-[0.5em]" aria-hidden="true">
            联系我们
          </span>
          <h2 id="contact-heading" className="mt-4 font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold">
            Visit{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              Us Today
            </span>
          </h2>
          <p className="mt-6 text-neutral-300 text-lg">
            We can&apos;t wait to serve you. Stop by, call ahead, or order
            online.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4" aria-hidden="true">
            <div className="w-12 h-[1px] bg-brand-600" />
            <div className="w-2 h-2 rotate-45 bg-brand-500" />
            <div className="w-12 h-[1px] bg-brand-600" />
          </div>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Map embed */}
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.08]">
              <iframe
                src="https://www.google.com/maps?q=10101+Sunset+Strip,+Sunrise,+FL+33322&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ten Ten Seafood & Dim Sum location on Google Maps — 10101 Sunset Strip, Sunrise, FL 33322"
              />
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:9549995298"
                className="group flex items-start gap-4 p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:border-brand-500/30 hover:bg-brand-500/[0.03] transition-all duration-500"
                aria-label="Call us at 954-999-5298"
              >
                <div className="p-3 bg-brand-500/10 rounded-lg group-hover:bg-brand-500/20 transition-colors" aria-hidden="true">
                  <Phone className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-neutral-400">
                    Call Us
                  </p>
                  <p className="mt-1 text-white font-medium">954-999-5298</p>
                </div>
              </a>
              <a
                href="mailto:Tentenseafooddimsum@gmail.com"
                className="group flex items-start gap-4 p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:border-brand-500/30 hover:bg-brand-500/[0.03] transition-all duration-500"
                aria-label="Email us at Tentenseafooddimsum@gmail.com"
              >
                <div className="p-3 bg-brand-500/10 rounded-lg group-hover:bg-brand-500/20 transition-colors" aria-hidden="true">
                  <Mail className="w-5 h-5 text-brand-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs tracking-wider uppercase text-neutral-400">
                    Email
                  </p>
                  <p className="mt-1 text-white font-medium text-sm break-all">
                    Tentenseafooddimsum@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=10101+Sunset+Strip+Sunrise+FL+33322"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:border-brand-500/30 hover:bg-brand-500/[0.03] transition-all duration-500"
                aria-label="Get directions to 10101 Sunset Strip, Sunrise, FL 33322"
              >
                <div className="p-3 bg-brand-500/10 rounded-lg group-hover:bg-brand-500/20 transition-colors" aria-hidden="true">
                  <MapPin className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-neutral-400">
                    Address
                  </p>
                  <p className="mt-1 text-white font-medium text-sm">
                    10101 Sunset Strip
                    <br />
                    Sunrise, FL 33322
                  </p>
                </div>
              </a>
              <div className="group flex items-start gap-4 p-5 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                <div className="p-3 bg-brand-500/10 rounded-lg" aria-hidden="true">
                  <Clock className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-neutral-400">
                    Hours
                  </p>
                  <p className="mt-1 text-white font-medium text-sm">
                    Open Daily
                    <br />
                    11 AM – 10 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="p-8 bg-white/[0.03] border border-white/[0.08] rounded-2xl">
              <h3 className="font-[var(--font-display)] text-2xl font-semibold">
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                We&apos;ll get back to you as soon as possible.
              </p>
              <form className="mt-8 space-y-5" aria-label="Contact form">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs tracking-wider uppercase text-neutral-400 mb-2"
                    >
                      Name <span className="text-brand-500" aria-label="required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/25 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs tracking-wider uppercase text-neutral-400 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/25 transition-all"
                      placeholder="Your phone"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs tracking-wider uppercase text-neutral-400 mb-2"
                  >
                    Email <span className="text-brand-500" aria-label="required">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/25 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs tracking-wider uppercase text-neutral-400 mb-2"
                  >
                    Message <span className="text-brand-500" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/25 transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-bold tracking-[0.2em] uppercase bg-brand-500 text-navy-900 rounded-full hover:bg-brand-400 transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-400/40"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Quick order CTA */}
            <a
              href="https://tentenseafoodgrill.kwickmenu.com/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-between p-6 bg-brand-700/10 border border-brand-600/20 rounded-2xl hover:border-brand-500/40 transition-all duration-500 group"
            >
              <div>
                <p className="font-semibold text-brand-400">
                  Skip the wait — order online
                </p>
                <p className="text-sm text-neutral-400 mt-1">
                  Browse our full menu and order for pickup
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-brand-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
