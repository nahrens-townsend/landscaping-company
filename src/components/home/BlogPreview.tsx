import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blogPosts'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { formatDate } from '@/lib/utils'

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3)

  return (
    <SectionWrapper className="bg-stone-warm">
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">From the Studio</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-green-deep">Latest Articles</h2>
        </div>
        <Link
          href="/our-blog"
          className="hidden md:inline-flex items-center gap-2 text-sm font-body font-medium text-green-deep hover:text-gold transition-colors duration-200 tracking-wide"
        >
          All articles <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link key={post.slug} href={`/our-blog/${post.slug}`} className="group">
            <div className="overflow-hidden mb-5 rounded-lg" style={{ aspectRatio: '16/10' }}>
              <Image
                src={post.coverImage}
                alt={post.title}
                width={600}
                height={375}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-body font-medium">{post.category}</span>
            <h3 className="font-display text-xl font-semibold text-green-deep mt-2 mb-3 group-hover:text-gold transition-colors duration-200 leading-snug">
              {post.title}
            </h3>
            <p className="text-stone-gray text-sm font-body leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs font-body text-stone-gray">
              <span>{post.author}</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <Link
          href="/our-blog"
          className="inline-flex items-center gap-2 text-sm font-body font-medium text-green-deep hover:text-gold transition-colors duration-200 tracking-wide underline underline-offset-4"
        >
          View all articles <ArrowRight size={15} />
        </Link>
      </div>
    </SectionWrapper>
  )
}
