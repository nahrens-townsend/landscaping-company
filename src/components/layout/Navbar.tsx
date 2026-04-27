'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Pricing',
    href: '/winnipeg-landscape-pricing',
  },
  {
    label: 'Projects',
    href: '/gallery',
    children: [
      { label: 'Gallery', href: '/gallery' },
      { label: 'Blog', href: '/our-blog' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const navTextClass = scrolled || !isHome ? 'text-charcoal hover:text-green-deep' : 'text-white/90 hover:text-white'
  const logoClass = scrolled || !isHome ? 'text-green-deep' : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group" aria-label="Sunny View Exteriors home">
            <div className="flex flex-col">
              <span className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-300 ${logoClass}`}>
                Sunny View
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-body font-medium">
                Exteriors
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
          <div
            key={item.label}
            className="relative pb-1"
            onMouseEnter={() => item.children && setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
            onFocus={() => item.children && setActiveDropdown(item.label)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setActiveDropdown(null)
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setActiveDropdown(null)
            }}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-body font-medium tracking-wide transition-colors duration-200 ${navTextClass}`}
              aria-haspopup={item.children ? 'menu' : undefined}
              aria-expanded={item.children ? activeDropdown === item.label : undefined}
            >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-52 bg-white shadow-lg border border-stone-warm overflow-hidden rounded-lg"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-sm font-body text-charcoal hover:bg-stone-warm hover:text-green-deep transition-colors border-b border-stone-warm last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/consultation"
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-green-deep text-white text-sm font-body font-medium tracking-wide hover:bg-green-mid transition-colors duration-200 rounded-lg"
            >
              Request a Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors duration-200 ${scrolled || !isHome ? 'text-charcoal' : 'text-white'}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-stone-warm overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-3 text-charcoal font-body font-medium border-b border-stone-warm last:border-0"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm font-body text-stone-gray hover:text-green-deep transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/consultation"
                  className="block text-center px-6 py-3 bg-green-deep text-white text-sm font-body font-medium tracking-wide hover:bg-green-mid transition-colors rounded-lg"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
