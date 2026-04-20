import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CardProps {
  image: string
  imageAlt: string
  title: string
  description?: string
  href?: string
  className?: string
  imageHeight?: number
}

export default function Card({ image, imageAlt, title, description, href, className, imageHeight = 280 }: CardProps) {
  const content = (
    <div className={cn('group overflow-hidden bg-white border border-stone-warm hover:border-green-pale transition-colors duration-300 rounded-lg', className)}>
      <div className="overflow-hidden rounded-t-lg" style={{ height: imageHeight }}>
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={imageHeight}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-green-deep mb-2 group-hover:text-gold transition-colors duration-200">
          {title}
        </h3>
        {description && <p className="text-stone-gray text-sm font-body leading-relaxed mb-4">{description}</p>}
        {href && (
          <span className="inline-flex items-center gap-2 text-sm font-body font-medium text-green-deep group-hover:gap-3 transition-all duration-200">
            Learn more <ArrowRight size={15} />
          </span>
        )}
      </div>
    </div>
  )

  if (href) return <Link href={href}>{content}</Link>
  return content
}
