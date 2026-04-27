import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { galleryCategories } from '@/data/gallery'

export const metadata: Metadata = {
  title: 'Landscape Project Gallery — Winnipeg Patios, Gardens & More',
  description:
    'Browse Sunny View Exteriors project photos across 14 categories — custom patios, stonework, gardens, fire pits, outdoor kitchens, water features, and more. Serving Winnipeg, MB.',
  openGraph: {
    title: 'Landscape Project Gallery — Winnipeg Patios, Gardens & More',
    description:
      'Browse completed landscape projects by Sunny View Exteriors — patios, gardens, fire pits, outdoor kitchens, water features, and more in Winnipeg, MB.',
    url: 'https://sunnyviewexteriors.netlify.app/gallery',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1761637823293-f96835ec5038?w=1200&h=630&fit=crop&auto=format&q=80',
        width: 1200,
        height: 630,
        alt: 'Sunny View Exteriors project gallery — Winnipeg',
      },
    ],
  },
  alternates: { canonical: 'https://sunnyviewexteriors.netlify.app/gallery' },
}

export default function GalleryPage() {
  return (
    <>
      <div className="relative h-72 md:h-96 bg-green-deep overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1761637823293-f96835ec5038?w=1920&h=600&fit=crop&auto=format&q=80"
          alt="Featured landscape project"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 h-full flex items-end pb-12 px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-3">Our Work</p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white">Project Gallery</h1>
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-stone-white">
        <div className="text-center mb-14 max-w-xl mx-auto">
          <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">Browse by Category</p>
          <h2 className="font-display text-4xl font-light text-green-deep mb-4">14 Project Categories</h2>
          <p className="text-stone-gray font-body text-sm leading-relaxed">
            From intimate residential patios to expansive estate landscapes — explore the full range of what
            Sunny View Exteriors creates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/gallery/${cat.id}`}
              className="group relative overflow-hidden bg-charcoal rounded-lg"
              style={{ aspectRatio: '4/3' }}
            >
              <Image
                src={cat.coverImage}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-display text-2xl font-semibold text-white mb-1 drop-shadow">{cat.label}</h3>
                <p className="text-white/70 font-body text-xs leading-relaxed line-clamp-2">{cat.description}</p>
                <div className="mt-3 flex items-center gap-1 text-gold text-[10px] uppercase tracking-widest font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Gallery <span className="text-base">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
