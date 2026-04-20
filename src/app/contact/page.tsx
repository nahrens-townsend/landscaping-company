import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: 'Contact Stonefield Landscaping — Winnipeg, Manitoba',
  description:
    "Get in touch with Stonefield Landscaping. We're here to answer your questions and discuss your Winnipeg landscape project. Call, email, or send us a message.",
  openGraph: {
    title: 'Contact Stonefield Landscaping — Winnipeg, Manitoba',
    description:
      "Ready to transform your outdoor space? Contact Stonefield Landscaping in Winnipeg, MB — call, email, or fill in the form.",
    url: 'https://stonefieldlandscaping.netlify.app/contact',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1665265368388-dbe023c7b0dd?w=1200&h=630&fit=crop&auto=format&q=80',
        width: 1200,
        height: 630,
        alt: 'Contact Stonefield Landscaping in Winnipeg',
      },
    ],
  },
  alternates: { canonical: 'https://stonefieldlandscaping.netlify.app/contact' },
};

export default function ContactPage() {
  return (
    <>
      <div className="relative h-72 md:h-80 bg-green-deep overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1665265368388-dbe023c7b0dd?w=1920&h=500&fit=crop&auto=format&q=80"
          alt="Stonefield Landscaping office"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 h-full flex items-end pb-12 px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-3">
              Let&apos;s Talk
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-stone-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">
              Send a Message
            </p>
            <h2 className="font-display text-3xl font-light text-green-deep mb-8">
              How can we help?
            </h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl font-light text-green-deep mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 mb-10">
              {[
                {
                  Icon: Phone,
                  label: "Phone",
                  value: "(204) 555-0182",
                  href: "tel:+12045550182",
                },
                {
                  Icon: Mail,
                  label: "Email",
                  value: "hello@example.ca",
                  href: "mailto:hello@example.ca",
                },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "Winnipeg, Manitoba",
                  href: null,
                },
                {
                  Icon: Clock,
                  label: "Hours",
                  value: "Mon–Fri 8am–5pm",
                  href: null,
                },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-deep text-white flex-shrink-0 rounded-lg">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase font-body text-stone-gray mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-sm text-green-deep hover:text-green-mid transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-charcoal">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-stone-warm p-8 rounded-lg">
              <p className="font-display text-lg font-semibold text-green-deep mb-2">
                Starting a New Project?
              </p>
              <p className="text-stone-gray font-body text-sm leading-relaxed">
                For new project inquiries, we recommend using our consultation
                request form instead — it helps us understand your project
                before we speak with you.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
