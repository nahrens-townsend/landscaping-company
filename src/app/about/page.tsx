import type { Metadata } from 'next'
import Image from 'next/image'

import SectionWrapper from '@/components/ui/SectionWrapper'
import TeamCard from '@/components/team/TeamCard'
import { team } from '@/data/team'

export const metadata: Metadata = {
  title: 'Winnipeg Landscaping Company Since 1995 — About Stonefield',
  description:
    'Meet the team behind Stonefield Landscaping — experienced Winnipeg landscape designers, horticulturalists, and master craftspeople who have transformed outdoor spaces across Manitoba since 1995.',
  openGraph: {
    title: 'Winnipeg Landscaping Company Since 1995 — About Stonefield',
    description:
      'Meet the Stonefield Landscaping team — Winnipeg landscape designers, horticulturalists, and craftspeople building exceptional outdoor spaces since 1995.',
    url: 'https://stonefieldlandscaping.netlify.app/about',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1679200271071-2b3f17d1d1af?w=1200&h=630&fit=crop&auto=format&q=80',
        width: 1200,
        height: 630,
        alt: 'Stonefield Landscaping team at work in Winnipeg',
      },
    ],
  },
  alternates: { canonical: 'https://stonefieldlandscaping.netlify.app/about' },
}

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-72 md:h-96 bg-green-deep overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1679200271071-2b3f17d1d1af?w=1920&h=600&fit=crop&auto=format&q=80"
          alt="Stonefield Landscaping team at work"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 h-full flex items-end pb-12 px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-3">Our Story</p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white">About Us</h1>
          </div>
        </div>
      </div>

      {/* Story */}
      <SectionWrapper className="bg-stone-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">Since 1995</p>
            <h2 className="font-display text-4xl font-light text-green-deep leading-tight mb-6">
              Built on a Love for the Land
            </h2>
            <div className="space-y-4 text-stone-gray font-body text-sm leading-relaxed">
              <p>
                Stonefield Landscaping was founded in Winnipeg with a single conviction: that outdoor spaces deserve the
                same thoughtfulness and craftsmanship as the homes they surround. For nearly three decades, we&apos;ve
                been proving that belief through every project we complete.
              </p>
              <p>
                What started as a small crew with a passion for stonework and horticulture has grown into one of
                Manitoba&apos;s most respected landscape design and construction companies. But our values haven&apos;t
                changed — we still approach every project with the same attention to detail and genuine care for our
                clients&apos; outcomes.
              </p>
              <p>
                We don&apos;t just build landscapes. We build the spaces where families gather, children play, and
                memories are made. That responsibility is something we take seriously on every single project.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1690404946138-f12ca2497d36?w=800&h=650&fit=crop&auto=format&q=80"
              alt="Landscape team planning a project"
              width={800}
              height={650}
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-stone-warm">
        <div className="text-center mb-16">
          <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">What Drives Us</p>
          <h2 className="font-display text-4xl font-light text-green-deep">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Craftsmanship',
              text: 'We build things to last. Every stone is set with precision, every plant is placed with purpose. We never cut corners because the landscapes we build will outlast us.',
            },
            {
              title: 'Integrity',
              text: "We say what we'll do and do what we say. Transparent pricing, honest timelines, and direct communication — always. No surprises, no excuses.",
            },
            {
              title: 'Stewardship',
              text: "Manitoba's natural environment is extraordinary. We design landscapes that enhance it, selecting plants that support local ecosystems and using practices that preserve the soil we work with.",
            },
          ].map((v) => (
            <div key={v.title} className="border-t-2 border-green-deep pt-8">
              <h3 className="font-display text-2xl font-semibold text-green-deep mb-4">{v.title}</h3>
              <p className="text-stone-gray font-body text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="bg-stone-white">
        <div className="text-center mb-16">
          <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">The People</p>
          <h2 className="font-display text-4xl font-light text-green-deep">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </SectionWrapper>

    </>
  )
}
