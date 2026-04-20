'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
  images: { src: string; alt: string }[]
  initialIndex: number
  onClose: () => void
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const safeIndex = images.length > 0 ? Math.max(0, Math.min(initialIndex, images.length - 1)) : 0
  const [current, setCurrent] = useState(safeIndex)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length],
  )
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length],
  )

  useEffect(() => {
    if (!images.length) return
    const prevFocus = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowLeft') { prev(); return }
      if (e.key === 'ArrowRight') { next(); return }
      if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        if (!focusables || focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      prevFocus?.focus()
    }
  }, [images.length, onClose, prev, next])

  if (!images.length) return null

  return (
    <motion.div
      ref={dialogRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/40 text-white hover:bg-black/70 hover:border-white/80 transition-colors duration-200 rounded-lg"
        aria-label="Close lightbox"
      >
        <X size={18} />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10 text-white/50 text-xs font-body tracking-wide">
        {current + 1} / {images.length}
      </div>

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-5xl px-16 py-12"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '85vh', aspectRatio: '4/3' }}
      >
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </motion.div>

      {/* Nav */}
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/40 text-white hover:bg-black/70 hover:border-white/80 transition-colors duration-200 rounded-lg"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/40 text-white hover:bg-black/70 hover:border-white/80 transition-colors duration-200 rounded-lg"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Caption */}
      <p className="absolute bottom-5 left-0 right-0 text-center text-white/40 text-xs font-body">
        {images[current].alt}
      </p>
    </motion.div>
  )
}

