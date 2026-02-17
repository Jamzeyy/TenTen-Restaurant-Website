"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl shadow-2xl shadow-brand-900/20 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
          aria-label="Ten Ten Seafood & Dim Sum — go to top"
        >
          <img
            src="/images/logo.png"
            alt="Ten Ten Seafood & Dim Sum Restaurant logo"
            className="h-12 w-auto"
            width={160}
            height={48}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-2 text-sm tracking-widest uppercase text-neutral-300 hover:text-brand-400 transition-colors duration-300 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[2px] after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:9549995298"
            className="flex items-center gap-2 py-2 text-sm text-brand-400 hover:text-brand-300 transition-colors"
            aria-label="Call us at 954-999-5298"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>954-999-5298</span>
          </a>
          <a
            href="https://tentenseafoodgrill.kwickmenu.com/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-2.5 text-sm font-semibold tracking-wider uppercase bg-brand-500 text-navy-900 rounded-full hover:bg-brand-400 transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-400/40"
          >
            Order Online
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brand-400 p-3"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
        >
          {isMobileOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isMobileOpen}
      >
        <div className="px-6 py-6 bg-black/95 backdrop-blur-xl border-t border-brand-800/30 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 text-lg tracking-wider text-neutral-300 hover:text-brand-400 transition-colors"
              tabIndex={isMobileOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-neutral-800 space-y-3">
            <a
              href="tel:9549995298"
              className="flex items-center gap-2 py-2 text-brand-400"
              tabIndex={isMobileOpen ? 0 : -1}
              aria-label="Call us at 954-999-5298"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>954-999-5298</span>
            </a>
            <a
              href="https://tentenseafoodgrill.kwickmenu.com/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-3 font-semibold tracking-wider uppercase bg-brand-500 text-navy-900 rounded-full"
              tabIndex={isMobileOpen ? 0 : -1}
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
