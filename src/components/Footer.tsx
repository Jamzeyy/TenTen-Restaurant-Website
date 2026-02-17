import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer role="contentinfo" className="relative border-t border-white/[0.08]">
      {/* Pre-footer CTA strip */}
      <div className="bg-gradient-to-r from-brand-700/10 via-brand-600/5 to-brand-700/10 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold">
            Ready for an{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              Unforgettable Meal
            </span>
            ?
          </h2>
          <p className="mt-4 text-neutral-300">
            From handcrafted dim sum to live seafood — your table is waiting.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://tentenseafoodgrill.kwickmenu.com/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase bg-brand-500 text-navy-900 rounded-full hover:bg-brand-400 transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-400/40"
            >
              Order Online Now
            </a>
            <a
              href="tel:9549995298"
              className="px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase border-2 border-brand-500/50 text-brand-400 rounded-full hover:bg-brand-500/10 hover:border-brand-500/80 transition-all"
              aria-label="Call 954-999-5298"
            >
              Call 954-999-5298
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-[#050505] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <img
                src="/images/logo.png"
                alt="Ten Ten Seafood & Dim Sum Restaurant"
                className="h-14 w-auto"
                width={190}
                height={56}
              />
              <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-sm">
                Where tradition meets the sea. Authentic Cantonese cuisine
                handcrafted daily by master chefs in Sunrise, Florida.
              </p>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer navigation">
              <h3 className="text-sm tracking-wider uppercase text-neutral-300 font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "#hero" },
                  { label: "About Us", href: "#about" },
                  { label: "Menu", href: "#menu" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Reviews", href: "#testimonials" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-brand-400 transition-colors py-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h3 className="text-sm tracking-wider uppercase text-neutral-300 font-semibold mb-4">
                Get in Touch
              </h3>
              <address className="not-italic space-y-4">
                <a
                  href="tel:9549995298"
                  className="flex items-center gap-3 text-sm text-neutral-400 hover:text-brand-400 transition-colors py-1"
                  aria-label="Call 954-999-5298"
                >
                  <Phone className="w-4 h-4 text-brand-500" aria-hidden="true" />
                  954-999-5298
                </a>
                <a
                  href="mailto:Tentenseafooddimsum@gmail.com"
                  className="flex items-center gap-3 text-sm text-neutral-400 hover:text-brand-400 transition-colors py-1"
                  aria-label="Email Tentenseafooddimsum@gmail.com"
                >
                  <Mail className="w-4 h-4 text-brand-500" aria-hidden="true" />
                  Tentenseafooddimsum@gmail.com
                </a>
                <a
                  href="https://maps.google.com/?q=10101+Sunset+Strip+Sunrise+FL+33322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-neutral-400 hover:text-brand-400 transition-colors py-1"
                  aria-label="Get directions to 10101 Sunset Strip, Sunrise, FL 33322"
                >
                  <MapPin className="w-4 h-4 text-brand-500 mt-0.5" aria-hidden="true" />
                  10101 Sunset Strip, Sunrise, FL 33322
                </a>
              </address>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} Ten Ten Seafood & Dim Sum
              Restaurant. All rights reserved.
            </p>
            <p className="text-xs text-neutral-500">
              Open Daily: 11 AM – 10 PM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
