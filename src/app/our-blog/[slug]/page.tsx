import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { blogPosts } from '@/data/blogPosts'
import { formatDate } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  const canonical = `https://sunnyviewexteriors.netlify.app/our-blog/${post.slug}`
  return {
    title: `${post.title} | Sunny View Exteriors Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: canonical,
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `${post.coverImage.split('?')[0]}?w=1200&h=630&fit=crop&auto=format&q=80`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: { canonical },
  }
}

/** Converts simple markdown-ish content to React elements */
function renderContent(content: string) {
  return content.split('\n\n').map((block, i) => {
    // Standalone bold heading: **Heading Text**
    if (block.startsWith('**') && block.endsWith('**') && !block.slice(2, -2).includes('**')) {
      return (
        <h3 key={i} className="font-display text-xl font-semibold text-green-deep mt-8 mb-3">
          {block.slice(2, -2)}
        </h3>
      )
    }

    // List block (unordered "- item" or ordered "1. item") — returned as <ul>, never wrapped in <p>
    const listMarker = /^(?:-\s+|\d+\.\s)/
    if (listMarker.test(block)) {
      const items = block.split('\n').filter(Boolean)
      return (
        <ul key={i} className="space-y-2 my-4 pl-4">
          {items.map((item, k) => (
            <li key={k} className="flex items-start gap-2 text-stone-gray font-body text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
              <span>{item.replace(/^(?:-\s+|\d+\.\s+)/, '')}</span>
            </li>
          ))}
        </ul>
      )
    }

    // Regular paragraph with optional inline **bold**
    const parts = block.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={i} className="font-body text-stone-gray text-sm leading-relaxed mb-4">
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={j} className="font-semibold text-green-deep">{part.slice(2, -2)}</strong>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
      </p>
    )
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const canonicalUrl = `https://sunnyviewexteriors.netlify.app/our-blog/${post.slug}`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Sunny View Exteriors',
      url: 'https://sunnyviewexteriors.netlify.app',
    },
    datePublished: post.date,
    image: `${post.coverImage.split('?')[0]}?w=1200&h=630&fit=crop&auto=format&q=80`,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="relative h-72 md:h-[480px] bg-green-deep overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <Link
              href="/our-blog"
              className="inline-flex items-center gap-2 text-white/60 font-body text-xs tracking-wide hover:text-white mb-5 transition-colors"
            >
              <ArrowLeft size={13} /> Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-green-deep text-white text-[9px] tracking-widest uppercase font-body px-3 py-1 border border-white/20">
                {post.category}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-light text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-stone-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Article */}
          <article className="lg:col-span-7">
            <div className="flex items-center gap-6 mb-10 pb-10 border-b border-stone-warm">
              <div className="flex items-center gap-2 text-stone-gray">
                <User size={14} />
                <span className="font-body text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-gray">
                <Calendar size={14} />
                <span className="font-body text-sm">{formatDate(post.date)}</span>
              </div>
            </div>

            <p className="font-display text-xl text-green-deep italic leading-relaxed mb-8">{post.excerpt}</p>

            <div className="prose-content">{renderContent(post.content)}</div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-5">
            <div className="bg-stone-warm p-8 mb-10 rounded-lg">
              <h3 className="font-display text-xl font-semibold text-green-deep mb-6">Ready to Transform Your Landscape?</h3>
              <p className="text-stone-gray font-body text-sm leading-relaxed mb-6">
                The ideas in this article can become reality in your own backyard. Our team would love to
                discuss how to bring them to life for your specific space.
              </p>
              <Link
                href="/consultation"
                className="block text-center px-6 py-3 bg-green-deep text-white text-sm font-body font-medium tracking-wide hover:bg-green-mid transition-colors duration-200 rounded-lg"
              >
                Request a Consultation
              </Link>
            </div>

            <h3 className="font-display text-xl font-semibold text-green-deep mb-6">Related Articles</h3>
            <div className="space-y-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/our-blog/${r.slug}`} className="group flex gap-4 items-start">
                  <div className="relative w-20 flex-shrink-0 overflow-hidden rounded-lg" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={r.coverImage}
                      alt={r.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-green-deep group-hover:text-green-mid transition-colors leading-snug line-clamp-2 mb-1">
                      {r.title}
                    </p>
                    <p className="text-stone-gray font-body text-xs">{formatDate(r.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </>
  )
}
