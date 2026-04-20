'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import Lightbox from './Lightbox'

interface GalleryGridProps {
  images: { src: string; alt: string }[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg"
            aria-label={`View: ${img.alt}`}
          >
            <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '4/3' }}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-body tracking-[0.2em] uppercase border border-white/60 px-4 py-2">
                  View
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* AnimatePresence must live outside Lightbox so exit animation fires on unmount */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            key="lightbox"
            images={images}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
