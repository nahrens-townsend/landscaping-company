import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageSquare, PenTool, HardHat, ChevronRight } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Landscape Design & Construction Services — Winnipeg',
  description:
    'Sunny View Exteriors delivers full-service landscape design and construction in Winnipeg — from on-site consultation and custom design through to complete outdoor build.',
  openGraph: {
    title: 'Landscape Design & Construction Services — Winnipeg',
    description:
      'Full-service landscape design and construction in Winnipeg, MB. Consultation, custom design, and complete outdoor construction by Sunny View Exteriors.',
    url: 'https://sunnyviewexteriors.netlify.app/services',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=1200&h=630&fit=crop&auto=format&q=80',
        width: 1200,
        height: 630,
        alt: 'Sunny View Exteriors — professional landscape construction in Winnipeg',
      },
    ],
  },
  alternates: { canonical: 'https://sunnyviewexteriors.netlify.app/services' },
}

const discoverService = services.find((s) => s.id === 'consult')!
const designService = services.find((s) => s.id === 'design')!
const craftService = services.find((s) => s.id === 'build')!

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-72 md:h-96 bg-green-deep overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1597201278257-3687be27d954?w=1920&h=600&fit=crop&auto=format&q=80"
          alt="Landscape design process"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 h-full flex items-end pb-12 px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-3">
              What We Do
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white">Our Services</h1>
          </div>
        </div>
      </div>

      {/* Process Overview */}
      <SectionWrapper className="bg-stone-white">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">A Complete Process</p>
          <h2 className="font-display text-4xl font-light text-green-deep mb-6">From Vision to Reality</h2>
          <p className="text-stone-gray font-body text-sm leading-relaxed">
            Every Sunny View Exteriors project follows our proven three-step process — Discover, Design, Craft. It&apos;s how we
            ensure that every landscape we create is exactly what our clients envisioned, built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {([
            { step: '01', title: 'Discover', anchor: '#discover', desc: discoverService.description, Icon: MessageSquare },
            { step: '02', title: 'Design',   anchor: '#design',   desc: designService.description,  Icon: PenTool },
            { step: '03', title: 'Craft',    anchor: '#craft',    desc: craftService.description,   Icon: HardHat },
          ] as const).map(({ step, title, anchor, desc, Icon }) => (
            <a
              key={step}
              href={anchor}
              className="group block p-8 border border-stone-warm bg-stone-warm hover:border-green-pale/40 hover:bg-white transition-all duration-300 rounded-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-[0.3em] uppercase font-body text-gold font-medium">
                  Step {step}
                </span>
                <Icon size={16} className="text-stone-gray group-hover:text-green-deep transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-green-deep mb-3">{title}</h3>
              <p className="text-stone-gray font-body text-sm leading-relaxed mb-6">{desc}</p>
              <div className="flex items-center gap-1.5 text-xs font-body font-medium text-green-deep">
                Explore <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </SectionWrapper>

      {/* Section: Discover */}
      <SectionWrapper id="discover" className="bg-stone-warm scroll-mt-20">
        <div className="mb-10">
          <span className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium">Step 01</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-5xl font-semibold text-green-deep mb-2">{discoverService.title}</h2>
            <p className="font-display text-lg text-stone-gray italic mb-8">{discoverService.subtitle}</p>
            <p className="font-body text-stone-gray text-base leading-relaxed mb-6">{discoverService.longDescription}</p>
            <p className="font-body text-stone-gray text-sm leading-relaxed mb-6">
              Our consultations are not rushed appointments — we typically spend 60 to 90 minutes on-site with you.
              We want to see how the sun moves across your yard, understand your family&apos;s rhythms, and discover
              what potential is hiding in your landscape.
            </p>
            <p className="font-body text-stone-gray text-sm leading-relaxed">
              After the visit, you&apos;ll receive a written summary of our findings, a rough scope of work, and
              clear guidance on next steps. There&apos;s no obligation, and you&apos;ll walk away with genuine value
              regardless of what you decide.
            </p>
          </div>
          <div>
            <Image
              src={discoverService.image}
              alt={discoverService.title}
              width={800}
              height={600}
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 mt-16 border-t border-stone-gray/20">
          <div>
            <h3 className="font-display text-xl font-semibold text-green-deep mb-6">What&apos;s Included</h3>
            <ul className="space-y-4">
              {discoverService.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-body text-charcoal">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-green-deep mb-6">Our Approach</h3>
            <div className="space-y-4 text-sm font-body text-stone-gray leading-relaxed">
              <p>
                We ask questions other landscaping companies don&apos;t — about how your family uses the yard, what
                you find yourself avoiding, and what you&apos;ve always wished was different. The goal is a clear,
                honest picture before any plans are drawn.
              </p>
              <p>
                No pressure, no obligation. You&apos;ll walk away with genuine value regardless of what you decide
                to do next.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section: Design */}
      <SectionWrapper id="design" className="bg-stone-white scroll-mt-20">
        <div className="mb-10">
          <span className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium">Step 02</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1">
            <Image
              src={designService.image}
              alt={designService.title}
              width={800}
              height={600}
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-5xl font-semibold text-green-deep mb-2">{designService.title}</h2>
            <p className="font-display text-lg text-stone-gray italic mb-8">{designService.subtitle}</p>
            <p className="font-body text-stone-gray text-base leading-relaxed mb-6">{designService.longDescription}</p>
            <p className="font-body text-stone-gray text-sm leading-relaxed mb-6">
              Our design process is collaborative by nature. You&apos;ll be involved at every stage, providing
              feedback and direction as concepts evolve from rough sketches to detailed plans. We don&apos;t
              disappear and return with a finished design — we build it together.
            </p>
            <p className="font-body text-stone-gray text-sm leading-relaxed">
              The deliverable is a complete design package: all the drawings, specifications, and documentation
              needed to build your landscape with precision — whether that&apos;s by our crew or yours.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 mt-16 border-t border-stone-gray/20">
          <div>
            <h3 className="font-display text-xl font-semibold text-green-deep mb-6">Design Package Includes</h3>
            <ul className="space-y-4">
              {designService.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-body text-charcoal">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-green-deep mb-6">Our Design Philosophy</h3>
            <div className="space-y-4 text-sm font-body text-stone-gray leading-relaxed">
              <p>
                We design landscapes for how people actually live — not for show gardens or photography portfolios.
                Every design decision is tested against real-world use: Will this be easy to maintain? Will it work
                in January and July? Will it age gracefully?
              </p>
              <p>
                We also design with the long view in mind. Plants grow. Materials weather. A great landscape
                design accounts for year 1 and year 15 equally.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section: Craft */}
      <SectionWrapper id="craft" className="bg-stone-warm scroll-mt-20">
        <div className="mb-10">
          <span className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium">Step 03</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-5xl font-semibold text-green-deep mb-2">{craftService.title}</h2>
            <p className="font-display text-lg text-stone-gray italic mb-8">{craftService.subtitle}</p>
            <p className="font-body text-stone-gray text-base leading-relaxed mb-6">{craftService.longDescription}</p>
            <p className="font-body text-stone-gray text-sm leading-relaxed mb-6">
              We work clean and communicate constantly. You&apos;ll know what&apos;s happening on your property every
              day. Our crews treat your home with respect — protecting existing plants, minimizing disruption to
              neighbours, and leaving the site tidy at the end of every workday.
            </p>
            <p className="font-body text-stone-gray text-sm leading-relaxed">
              Before we leave, we do a final walkthrough together — reviewing every element of the completed
              landscape and making sure you know exactly how to care for your new investment.
            </p>
          </div>
          <div>
            <Image
              src={craftService.image}
              alt={craftService.title}
              width={800}
              height={600}
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 mt-16 border-t border-stone-gray/20">
          <div>
            <h3 className="font-display text-xl font-semibold text-green-deep mb-6">Craft Services</h3>
            <ul className="space-y-4">
              {craftService.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-body text-charcoal">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-green-deep mb-6">Our Commitment</h3>
            <div className="space-y-6">
              {([
                { label: 'Our Promise',       text: 'Your project foreman is accountable to you, not just to a schedule. Real communication throughout.' },
                { label: 'Quality Materials', text: 'We source the highest quality hardscape materials, soils, and plant stock available in Manitoba.' },
                { label: 'Post-Build Care',   text: 'We provide written care instructions for every plant we install and follow up 30 days after completion.' },
              ] as const).map(({ label, text }) => (
                <div key={label}>
                  <p className="font-body text-sm font-semibold text-green-deep mb-1">{label}</p>
                  <p className="font-body text-sm text-stone-gray leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-stone-white">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-4xl font-light text-green-deep mb-6">Ready to Begin?</h2>
          <p className="text-stone-gray font-body text-sm leading-relaxed mb-8">
            The first step is a conversation. Request your consultation today and let&apos;s start building the
            landscape you&apos;ve been imagining.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-deep text-white text-sm font-body font-medium tracking-wide hover:bg-green-mid transition-colors duration-200 rounded-lg"
          >
            Request a Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
