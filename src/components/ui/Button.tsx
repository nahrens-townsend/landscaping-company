import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gold'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-green-deep text-white hover:bg-green-mid border border-green-deep hover:border-green-mid',
  secondary: 'bg-transparent text-green-deep border border-green-deep hover:bg-green-deep hover:text-white',
  ghost: 'bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal',
  gold: 'bg-gold text-white hover:bg-gold/90 border border-gold',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-base',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, external, className, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center font-body font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-lg',
      variantClasses[variant],
      sizeClasses[size],
      className
    )

    if (href) {
      return (
        <Link href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
