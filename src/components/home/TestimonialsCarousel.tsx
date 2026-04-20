'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import SectionWrapper from '@/components/ui/SectionWrapper'

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [paused])

  const prev = () => {
    setPaused(true)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setPaused(true)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <SectionWrapper className="bg-green-deep text-white overflow-hidden">
      <div className="text-center mb-16">
        <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">Client Stories</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-white">What Our Clients Say</h2>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-center gap-1.5 mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-gold" />
              ))}
            </div>
            <blockquote className="font-display text-2xl md:text-3xl font-light text-white leading-relaxed mb-8 italic">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <div>
              <p className="font-body font-semibold text-white text-sm tracking-wide">{t.name}</p>
              <p className="text-white/45 text-sm font-body mt-1">{t.location}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-all duration-200 rounded-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={17} />
          </button>
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPaused(true); setCurrent(i) }}
                className={`h-0.5 transition-all duration-400 ${i === current ? 'w-6 bg-gold' : 'w-2 bg-white/25 hover:bg-white/50'}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold transition-all duration-200 rounded-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  )
}
