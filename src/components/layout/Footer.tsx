import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-deep text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-display text-3xl font-semibold text-white">
                Sunny View
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold mt-1 font-body font-medium">
                Exteriors
              </div>
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-6">
              Creating extraordinary outdoor living spaces in Winnipeg and
              across Manitoba.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/sunnyviewexteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-colors duration-200 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com/sunnyviewexteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-colors duration-200 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm font-body">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span>
                  Winnipeg, Manitoba
                  <br />
                  Canada
                </span>
              </li>
              <li>
                <a
                  href="tel:+12045550100"
                  className="flex items-center gap-3 text-white/60 text-sm font-body hover:text-white transition-colors duration-200"
                >
                  <Phone size={15} className="text-gold flex-shrink-0" />
                  (204) 555-0100
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sunnyviewexteriors.ca"
                  className="flex items-center gap-3 text-white/60 text-sm font-body hover:text-white transition-colors duration-200"
                >
                  <Mail size={15} className="text-gold flex-shrink-0" />
                  info@sunnyviewexteriors.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Discover", href: "/services#discover" },
                { label: "Design", href: "/services#design" },
                { label: "Craft", href: "/services#craft" },
                {
                  label: "Commercial",
                  href: "/winnipeg-commercial-landscaping",
                },
                { label: "Pricing", href: "/winnipeg-landscape-pricing" },
              ].map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/60 text-sm font-body hover:text-white transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Gallery", href: "/gallery" },
                { label: "Blog", href: "/our-blog" },
                { label: "Our Team", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Request a Consultation", href: "/consultation" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/60 text-sm font-body hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            © {new Date().getFullYear()} Sunny View Exteriors Inc. All rights
            reserved. Winnipeg, Manitoba.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="text-white/40 text-xs font-body hover:text-white/70 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-white/40 text-xs font-body hover:text-white/70 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
