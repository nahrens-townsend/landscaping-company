import type { Metadata } from 'next'
import { Oswald, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const BASE_URL = 'https://sunnyviewexteriors.netlify.app'
const OG_IMAGE = 'https://images.unsplash.com/photo-1761637823293-f96835ec5038?w=1200&h=630&fit=crop&auto=format&q=80'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | Sunny View Exteriors',
    default: "Sunny View Exteriors — Winnipeg Landscaping & Exterior Services",
  },
  description:
    'Sunny View Exteriors creates exceptional outdoor living spaces in Winnipeg, Manitoba. Expert landscape design, custom patios, stonework, gardens, and full exterior construction — built to last in Manitoba\'s climate.',
  keywords: [
    'landscaping Winnipeg',
    'landscape design Winnipeg',
    'outdoor living Winnipeg',
    'patio construction Winnipeg',
    'hardscaping Winnipeg',
    'Manitoba landscape contractor',
    'residential landscaping Winnipeg',
    'commercial landscaping Winnipeg',
    'Sunny View Exteriors',
    'exterior services Winnipeg',
  ],
  authors: [{ name: 'Sunny View Exteriors', url: BASE_URL }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Sunny View Exteriors',
    url: BASE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Sunny View Exteriors — Winnipeg outdoor living spaces' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: BASE_URL,
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://www.wikidata.org/wiki/Q1137655',
  name: 'Sunny View Exteriors',
  url: BASE_URL,
  description:
    'Sunny View Exteriors creates exceptional outdoor living spaces in Winnipeg, Manitoba. Expert landscape design, custom patios, stonework, and full exterior construction.',
  telephone: '(204) 555-0100',
  email: 'info@sunnyviewexteriors.ca',
  areaServed: [
    { '@type': 'City', name: 'Winnipeg', sameAs: 'https://en.wikipedia.org/wiki/Winnipeg' },
    { '@type': 'AdministrativeArea', name: 'Manitoba' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Winnipeg',
    addressRegion: 'MB',
    addressCountry: 'CA',
  },
  sameAs: [
    'https://www.facebook.com/sunnyviewexteriors',
    'https://www.instagram.com/sunnyviewexteriors',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sunny View Exteriors',
  url: BASE_URL,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="font-body bg-stone-white text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-green-deep focus:text-white focus:rounded-lg focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
