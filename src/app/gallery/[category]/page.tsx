import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import { galleryCategories } from '@/data/gallery'

interface Props {
  params: { category: string }
}

export async function generateStaticParams() {
  return galleryCategories.map((c) => ({ category: c.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = galleryCategories.find((c) => c.id === params.category)
  if (!cat) return {}
  const canonical = `https://sunnyviewexteriors.netlify.app/gallery/${cat.id}`
  return {
    title: `${cat.label} — Winnipeg Landscape Gallery`,
    description: `${cat.description} Browse completed ${cat.label.toLowerCase()} projects by Sunny View Exteriors in Winnipeg, MB.`,
    openGraph: {
      title: `${cat.label} — Winnipeg Landscape Gallery`,
      description: `${cat.description} See completed projects by Sunny View Exteriors.`,
      url: canonical,
      images: [
        {
          url: `${cat.coverImage.split('?')[0]}?w=1200&h=630&fit=crop&auto=format&q=80`,
          width: 1200,
          height: 630,
          alt: `${cat.label} by Sunny View Exteriors — Winnipeg`,
        },
      ],
    },
    alternates: { canonical },
  }
}

export default function GalleryCategoryPage({ params }: Props) {
  const cat = galleryCategories.find((c) => c.id === params.category)
  if (!cat) notFound()

  return (
    <>
      <div className="relative h-64 md:h-80 bg-green-deep overflow-hidden">
        <Image
          src={cat.coverImage}
          alt={cat.label}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 h-full flex flex-col justify-end pb-10 px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-white/60 font-body text-xs tracking-wide hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={13} /> Back to Gallery
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-light text-white">{cat.label}</h1>
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-stone-white">
        <p className="text-stone-gray font-body text-sm leading-relaxed max-w-2xl mb-12">{cat.description}</p>
        <GalleryGrid images={cat.images} />
      </SectionWrapper>
    </>
  )
}
