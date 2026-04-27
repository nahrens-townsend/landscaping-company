"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1761637823293-f96835ec5038?w=1920&h=1080&fit=crop&auto=format&q=80",
    alt: "Stunning natural stone patio with fire feature",
  },
  {
    src: "https://images.unsplash.com/photo-1727012896963-2fd364e34a99?w=1920&h=1080&fit=crop&auto=format&q=80",
    alt: "Beautiful perennial garden in full bloom",
  },
  {
    src: "https://images.unsplash.com/photo-1766087752966-b9a7b058b7da?w=1920&h=1080&fit=crop&auto=format&q=80",
    alt: "Elegant outdoor kitchen and entertainment space",
  },
  {
    src: "https://images.unsplash.com/photo-1767247795570-8b82bbd7307a?w=1920&h=1080&fit=crop&auto=format&q=80",
    alt: "Expert stone pathway through lush landscaping",
  },
  {
    src: "https://images.unsplash.com/photo-1765288108580-85f0e03f7b18?w=1920&h=1080&fit=crop&auto=format&q=80",
    alt: "Serene water feature surrounded by native plantings",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div
      className="relative h-screen min-h-[640px] overflow-hidden bg-green-deep"
      aria-roledescription="carousel"
      aria-label="Featured landscaping projects"
    >
      {/* Slides — image crossfades with subtle Ken Burns scale */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/65" />
        </motion.div>
      </AnimatePresence>

      {/* Static content */}
      <div className="relative z-10 h-full flex items-end pb-28 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl md:text-5xl lg:text-7xl font-light text-white leading-none mb-6">
            Expert Landscape Design in Winnipeg
          </h1>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/consultation"
              className="inline-flex items-center px-8 py-4 bg-green-deep text-white text-sm font-body font-medium tracking-wide hover:bg-green-mid transition-colors duration-200 rounded-lg"
            >
              Request a Consultation
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border border-white/50 text-sm font-body font-medium tracking-wide hover:bg-white/10 transition-colors duration-200 rounded-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute z-10 bottom-8 left-8 md:left-16 lg:left-24 hidden md:flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-white animate-pulse" />
        <span className="text-white text-[9px] tracking-[0.25em] uppercase font-body">
          Scroll
        </span>
      </div>
    </div>
  );
}
