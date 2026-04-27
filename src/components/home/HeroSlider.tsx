'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1761637823293-f96835ec5038?w=1920&h=1080&fit=crop&auto=format&q=80',
    alt: 'Stunning natural stone patio with fire feature',
    headline: 'Expert Landscape Design in Winnipeg',
    subline: "Sunny View Exteriors — Winnipeg's trusted landscaping and exterior services company",
  },
  {
    src: 'https://images.unsplash.com/photo-1727012896963-2fd364e34a99?w=1920&h=1080&fit=crop&auto=format&q=80',
    alt: 'Beautiful perennial garden in full bloom',
    headline: 'Where Nature Meets Design',
    subline: "Custom landscapes built to thrive in Manitoba's four seasons",
  },
  {
    src: 'https://images.unsplash.com/photo-1766087752966-b9a7b058b7da?w=1920&h=1080&fit=crop&auto=format&q=80',
    alt: 'Elegant outdoor kitchen and entertainment space',
    headline: 'Built for the Way You Live',
    subline: 'From intimate garden retreats to expansive outdoor rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1767247795570-8b82bbd7307a?w=1920&h=1080&fit=crop&auto=format&q=80',
    alt: 'Expert stone pathway through lush landscaping',
    headline: 'Craftsmanship in Every Stone',
    subline: 'Landscape excellence across Winnipeg and Manitoba',
  },
  {
    src: 'https://images.unsplash.com/photo-1765288108580-85f0e03f7b18?w=1920&h=1080&fit=crop&auto=format&q=80',
    alt: 'Serene water feature surrounded by native plantings',
    headline: 'Landscapes That Endure',
    subline: 'Premium materials. Expert installation. Lasting beauty.',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 6000)
  }, [])

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startTimer])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
    startTimer()
  }, [startTimer])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
    startTimer()
  }, [startTimer])

  const goTo = useCallback((i: number) => {
    setCurrent(i)
    startTimer()
  }, [startTimer])

  const slide = slides[current]

  return (
    <div
      className="relative h-screen min-h-[640px] overflow-hidden bg-green-deep"
      aria-roledescription="carousel"
      aria-label="Featured landscaping projects"
    >
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/65" />
        </motion.div>
      </AnimatePresence>

      {/* Content — static container, only the changing text crossfades */}
      <div className="relative z-10 h-full flex items-end pb-28 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <p className="text-gold text-[10px] tracking-[0.35em] uppercase mb-5 font-body font-medium">
            Winnipeg, Manitoba
          </p>
          <div className="relative mb-6 min-h-[1em]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.h1
                key={`headline-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-none"
              >
                {slide.headline}
              </motion.h1>
            </AnimatePresence>
          </div>
          <div className="relative mb-10 min-h-[1em]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={`subline-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-white/75 text-lg md:text-xl font-body font-light max-w-xl leading-relaxed"
              >
                {slide.subline}
              </motion.p>
            </AnimatePresence>
          </div>
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

      {/* Slide Controls */}
      <div className="absolute z-10 bottom-8 right-8 md:right-16 lg:right-24 flex gap-2">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-200 rounded-lg"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-200 rounded-lg"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-400 h-0.5 ${i === current ? 'w-8 bg-gold' : 'w-2 bg-white/35 hover:bg-white/60'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute z-10 bottom-8 left-8 md:left-16 lg:left-24 hidden md:flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-white animate-pulse" />
        <span className="text-white text-[9px] tracking-[0.25em] uppercase font-body">Scroll</span>
      </div>
    </div>
  )
}
