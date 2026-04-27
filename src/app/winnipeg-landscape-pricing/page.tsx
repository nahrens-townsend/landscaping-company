import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

export const metadata: Metadata = {
  title: 'Landscape Pricing Winnipeg — What Does Landscaping Cost?',
  description:
    "Honest, transparent landscape pricing for Winnipeg homeowners. Sunny View Exteriors explains real project costs — from foundation projects to custom outdoor living spaces.",
  openGraph: {
    title: 'Landscape Pricing Winnipeg — What Does Landscaping Cost?',
    description:
      'Honest landscape pricing in Winnipeg. Understand real project costs — foundation projects, mid-range renovations, and luxury outdoor living — from Sunny View Exteriors.',
    url: 'https://sunnyviewexteriors.netlify.app/winnipeg-landscape-pricing',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=1200&h=630&fit=crop&auto=format&q=80',
        width: 1200,
        height: 630,
        alt: 'Landscape pricing Winnipeg — Sunny View Exteriors',
      },
    ],
  },
  alternates: { canonical: 'https://sunnyviewexteriors.netlify.app/winnipeg-landscape-pricing' },
}

const tiers = [
  {
    range: '$15,000 – $40,000',
    label: 'Foundation Projects',
    description: 'Refreshing an existing landscape: new planting beds, patios under 300 sq ft, basic sod and grading.',
    includes: ['Small patio or walkway', 'Planting bed redesign', 'Lawn grading and sod', 'Basic irrigation'],
  },
  {
    range: '$40,000 – $100,000',
    label: 'Signature Landscapes',
    description: 'A complete outdoor living transformation: full hardscape, planting plan, lighting, and features.',
    includes: ['Large patio and outdoor kitchen', 'Fire feature or water feature', 'Comprehensive planting plan', 'Landscape lighting'],
    featured: true,
  },
  {
    range: '$100,000+',
    label: 'Estate Projects',
    description: 'Multi-phase, full-property landscape transformations for large properties or complex designs.',
    includes: ['Pool surrounds and deck', 'Custom water features', 'Complete softscape program', 'Ongoing maintenance plan'],
  },
]

export default function PricingPage() {
  return (
    <>
      <div className="relative h-72 md:h-96 bg-green-deep overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1761637823293-f96835ec5038?w=1920&h=600&fit=crop&auto=format&q=80"
          alt="Completed Winnipeg landscape project"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 h-full flex items-end pb-12 px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-3">Transparent Pricing</p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white">Winnipeg Landscape Pricing</h1>
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-stone-white">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">Why We Share This</p>
          <h2 className="font-display text-4xl font-light text-green-deep mb-6">No Sticker Shock</h2>
          <p className="text-stone-gray font-body text-sm leading-relaxed">
            We believe you deserve to know what landscape investments look like before you ever meet with us. The
            ranges below reflect real project costs in Winnipeg — not theoretical estimates. Use them to plan, to
            prioritize, and to walk into your consultation with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className={`p-8 rounded-lg ${tier.featured ? 'bg-green-deep text-white' : 'bg-stone-warm'}`}
            >
              {tier.featured && (
                <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-body font-medium mb-4">
                  Most Common
                </p>
              )}
              <p
                className={`font-display text-2xl font-semibold mb-2 ${tier.featured ? 'text-white' : 'text-green-deep'}`}
              >
                {tier.range}
              </p>
              <p className={`font-display text-lg font-light italic mb-4 ${tier.featured ? 'text-gold' : 'text-stone-gray'}`}>
                {tier.label}
              </p>
              <p className={`text-sm font-body leading-relaxed mb-6 ${tier.featured ? 'text-white/70' : 'text-stone-gray'}`}>
                {tier.description}
              </p>
              <ul className="space-y-2">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${tier.featured ? 'text-gold' : 'text-green-mid'}`}
                    />
                    <span className={`text-xs font-body ${tier.featured ? 'text-white/80' : 'text-stone-dark'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-stone-warm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-light text-green-deep mb-6">What Affects Your Cost</h2>
            <div className="space-y-6">
              {[
                { label: 'Site Conditions', text: 'Grading, drainage issues, soil quality, and existing vegetation all affect prep costs — sometimes significantly.' },
                { label: 'Material Selection', text: 'The difference between standard and premium natural stone, for example, can be 2–3× in material cost alone.' },
                { label: 'Project Phasing', text: 'Breaking large projects into phases over multiple seasons can make ambitious landscapes financially accessible.' },
                { label: 'Complexity & Features', text: 'Water features, outdoor kitchens, and custom stonework add both cost and value to your landscape.' },
              ].map(({ label, text }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-1 bg-gold flex-shrink-0 self-stretch" />
                  <div>
                    <p className="font-display text-base font-semibold text-green-deep mb-1">{label}</p>
                    <p className="text-stone-gray font-body text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1659242484336-edb4f31b0d0c?w=700&h=580&fit=crop&auto=format&q=80"
              alt="Natural stone material selection"
              width={700}
              height={580}
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: '5/4' }}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-green-deep text-white">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-4xl font-light text-white mb-4">Get a Real Number</h2>
          <p className="text-white/60 font-body text-sm leading-relaxed mb-8">
            The best way to understand your specific project cost is a conversation with our team. We&apos;ll give
            you an honest assessment — no pressure, no obligation.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-sm font-body font-medium tracking-wide hover:opacity-90 transition-opacity duration-200 rounded-lg"
          >
            Request a Free Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
