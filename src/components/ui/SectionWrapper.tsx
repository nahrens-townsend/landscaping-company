import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article'
  innerClassName?: string
  fullWidth?: boolean
}

export default function SectionWrapper({
  as: Tag = 'section',
  children,
  className,
  innerClassName,
  fullWidth = false,
  ...props
}: SectionWrapperProps) {
  return (
    <Tag className={cn('py-20 lg:py-28', className)} {...props}>
      {fullWidth ? (
        children
      ) : (
        <div className={cn('max-w-7xl mx-auto px-6 lg:px-8', innerClassName)}>{children}</div>
      )}
    </Tag>
  )
}
