import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ConsultationForm from '@/components/forms/ConsultationForm'

export const metadata: Metadata = {
  title: 'Request a Free Landscape Consultation — Winnipeg, MB',
  description:
    'Book your free on-site landscape consultation with Stonefield Landscaping. We visit your Winnipeg property, discuss your vision, and provide a written project summary — no obligation.',
  openGraph: {
    title: 'Request a Free Landscape Consultation — Winnipeg, MB',
    description:
      'Book a free on-site landscape consultation with Stonefield Landscaping. No pressure, no obligation — just expert advice for your Winnipeg outdoor space.',
    url: 'https://stonefieldlandscaping.netlify.app/consultation',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=1200&h=630&fit=crop&auto=format&q=80',
        width: 1200,
        height: 630,
        alt: 'Free landscape consultation — Stonefield Landscaping Winnipeg',
      },
    ],
  },
  alternates: { canonical: 'https://stonefieldlandscaping.netlify.app/consultation' },
}

const whyUs = [
  'We come to you — on-site consultations only',
  'No pressure, no obligation after the visit',
  'You\'ll receive a written project summary',
  'We discuss budget openly and honestly',
  'Currently accepting new clients for 2025',
]

export default function ConsultationPage() {
  return (
    <>
      <div className="relative h-72 md:h-80 bg-green-deep overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1766087752966-b9a7b058b7da?w=1920&h=500&fit=crop&auto=format&q=80"
          alt="Landscape consultation"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 h-full flex items-end pb-12 px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-3">
              The First Step
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white">Request a Consultation</h1>
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-stone-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <p className="text-stone-gray font-body text-sm leading-relaxed mb-8">
              Tell us a little about your project. One of our team members will be in touch within one business day
              to confirm your consultation and answer any initial questions.
            </p>
            <ConsultationForm />
          </div>

          {/* Why Us */}
          <div className="lg:col-span-5">
            <div className="bg-stone-warm p-8 mb-8 rounded-lg">
              <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">
                What to Expect
              </p>
              <h3 className="font-display text-2xl font-semibold text-green-deep mb-6">
                The Stonefield Consultation
              </h3>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-green-mid mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-charcoal leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Image
              src="https://images.unsplash.com/photo-1728667088041-ee116cf57c6c?w=700&h=500&fit=crop&auto=format&q=80"
              alt="Landscape consultation in progress"
              width={700}
              height={500}
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: '7/5' }}
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
