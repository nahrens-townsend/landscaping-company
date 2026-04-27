import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building, Sprout, Wrench, ClipboardList } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

export const metadata: Metadata = {
  title: 'Commercial Landscaping Winnipeg — Sunny View Exteriors',
  description:
    'Sunny View Exteriors delivers professional commercial landscape design, construction, and maintenance for Winnipeg businesses, corporate campuses, and multi-family developments.',
  openGraph: {
    title: 'Commercial Landscaping Winnipeg — Sunny View Exteriors',
    description:
      'Professional commercial landscaping in Winnipeg — design, construction, and ongoing maintenance for businesses, developers, and institutions.',
    url: 'https://sunnyviewexteriors.netlify.app/winnipeg-commercial-landscaping',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?w=1200&h=630&fit=crop&auto=format&q=80',
        width: 1200,
        height: 630,
        alt: 'Commercial landscaping Winnipeg — Sunny View Exteriors',
      },
    ],
  },
  alternates: { canonical: 'https://sunnyviewexteriors.netlify.app/winnipeg-commercial-landscaping' },
}

const services = [
  { Icon: Building, title: 'Property Development', text: 'Site landscaping for new multi-family, commercial, and mixed-use developments from groundbreaking to final punch-list.' },
  { Icon: Sprout, title: 'Corporate Campuses', text: 'Grounds management and enhancement for office parks, corporate headquarters, and professional buildings.' },
  { Icon: Wrench, title: 'Ongoing Maintenance', text: 'Seasonal maintenance programs for commercial properties — snow removal, spring and fall cleanup, mowing, and bed care.' },
  { Icon: ClipboardList, title: 'Landscape Consulting', text: 'Expert consulting for property managers, developers, and architects on landscape specifications and feasibility.' },
]

export default function CommercialPage() {
  return (
    <>
      <div className="relative h-72 md:h-[480px] bg-green-deep overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1771911651523-e050dc4189ea?w=1920&h=700&fit=crop&auto=format&q=80"
          alt="Commercial landscape project"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 h-full flex items-end pb-16 px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-3">
              Commercial Division
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-white leading-none">
              Commercial<br />Landscaping
            </h1>
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-stone-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">
              Built for Business
            </p>
            <h2 className="font-display text-4xl font-light text-green-deep leading-tight mb-6">
              Landscape That Works<br />as Hard as You Do
            </h2>
            <div className="space-y-4 text-stone-gray font-body text-sm leading-relaxed">
              <p>
                Commercial landscape projects demand more than good design — they require rigorous project
                management, reliable scheduling, and partners who understand the complexity of large-scale builds.
                Sunny View Exteriors has delivered for Winnipeg commercial clients who demand quality and
                professionalism on every project.
              </p>
              <p>
                Whether you&apos;re a developer looking for a landscape contractor who can keep pace with your
                construction schedule, or a property manager seeking a reliable maintenance partner, we have the
                team and the systems to deliver.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1764025851527-78f9d7c52bc5?w=800&h=650&fit=crop&auto=format&q=80"
              alt="Commercial property landscape"
              width={800}
              height={650}
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-stone-warm">
        <div className="text-center mb-14">
          <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">What We Offer</p>
          <h2 className="font-display text-4xl font-light text-green-deep">Commercial Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map(({ Icon, title, text }) => (
            <div key={title} className="flex gap-6">
              <div className="w-12 h-12 flex items-center justify-center bg-green-deep text-white flex-shrink-0 rounded-lg">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-green-deep mb-2">{title}</h3>
                <p className="text-stone-gray font-body text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-green-deep text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-16">
          {[['Residential & Commercial', 'Project Experience'], ['Winnipeg', 'Based & Proud'], ['100%', 'Client Satisfaction']].map(
            ([num, label]) => (
              <div key={label}>
                <p className="font-display text-5xl font-semibold text-gold mb-2">{num}</p>
                <p className="font-body text-sm text-white/60 tracking-wide uppercase">{label}</p>
              </div>
            ),
          )}
        </div>
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-body font-medium tracking-wide hover:bg-white/10 transition-colors duration-200 rounded-lg"
          >
            Talk to Our Commercial Team <ArrowRight size={15} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
