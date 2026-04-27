import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { blogPosts } from '@/data/blogPosts'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Landscaping Blog — Tips & Ideas for Winnipeg Homeowners',
  description:
    'Landscape design ideas, Winnipeg-specific plant guides, seasonal care tips, and expert insights from the Sunny View Exteriors team.',
  openGraph: {
    title: 'Landscaping Blog — Tips & Ideas for Winnipeg Homeowners',
    description:
      'Landscape design ideas, plant guides, and seasonal care tips for Winnipeg homeowners from the experts at Sunny View Exteriors.',
    url: 'https://sunnyviewexteriors.netlify.app/our-blog',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1727012896963-2fd364e34a99?w=1200&h=630&fit=crop&auto=format&q=80',
        width: 1200,
        height: 630,
        alt: 'Sunny View Exteriors blog — Winnipeg landscape tips',
      },
    ],
  },
  alternates: { canonical: 'https://sunnyviewexteriors.netlify.app/our-blog' },
}

export default function BlogPage() {
  return (
    <>
      <div className="relative h-72 md:h-96 bg-green-deep overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1727012896963-2fd364e34a99?w=1920&h=600&fit=crop&auto=format&q=80"
          alt="Garden blog"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 h-full flex items-end pb-12 px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-3">Ideas &amp; Inspiration</p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white">Our Blog</h1>
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-stone-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Featured post */}
          <div className="lg:col-span-7">
            <Link href={`/our-blog/${blogPosts[0].slug}`} className="group block">
              <div className="relative overflow-hidden mb-6 rounded-lg" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={blogPosts[0].coverImage}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-deep text-white text-[9px] tracking-widest uppercase font-body px-3 py-1">
                  {blogPosts[0].category}
                </span>
                <span className="text-stone-gray text-xs font-body">{formatDate(blogPosts[0].date)}</span>
              </div>
              <h2 className="font-display text-3xl font-semibold text-green-deep group-hover:text-green-mid transition-colors mb-3 leading-tight">
                {blogPosts[0].title}
              </h2>
              <p className="text-stone-gray font-body text-sm leading-relaxed mb-4">{blogPosts[0].excerpt}</p>
              <span className="inline-flex items-center gap-2 text-green-deep font-body text-xs tracking-wide group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={13} />
              </span>
            </Link>
          </div>

          {/* Other posts */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-6">Recent Articles</p>
            {blogPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/our-blog/${post.slug}`} className="group flex gap-5 items-start">
                <div className="relative w-24 flex-shrink-0 overflow-hidden rounded-lg" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Calendar size={11} className="text-stone-gray" />
                    <span className="text-stone-gray text-xs font-body">{formatDate(post.date)}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-green-deep group-hover:text-green-mid transition-colors leading-snug mb-1 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-stone-gray font-body text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
