'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { faqItems } from '@/data/faq'
import SectionWrapper from '@/components/ui/SectionWrapper'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <SectionWrapper className="bg-stone-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-green-deep leading-tight">
            Common
            <br />
            Questions
          </h2>
          <p className="text-stone-gray font-body text-sm leading-relaxed mt-6">
            Have a question not covered here? We&apos;re always happy to talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 text-sm font-body font-medium text-green-deep hover:text-gold transition-colors duration-200 tracking-wide underline underline-offset-4 decoration-green-deep/30 hover:decoration-gold"
          >
            Contact us directly →
          </Link>
        </div>

        <div className="lg:col-span-8">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-stone-warm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between py-6 text-left gap-4 group"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-display text-lg font-medium text-green-deep group-hover:text-gold transition-colors duration-200 pr-4">
                  {item.question}
                </span>
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center border border-green-deep/20 text-green-deep group-hover:border-gold group-hover:text-gold transition-colors duration-200 mt-0.5 rounded-lg">
                  {open === i ? <Minus size={13} /> : <Plus size={13} />}
                </span>
              </button>
              <div id={`faq-answer-${i}`} role="region" aria-label={item.question}>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-stone-gray font-body text-sm leading-relaxed pb-6">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
