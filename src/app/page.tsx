import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import HeroSlider from "@/components/home/HeroSlider";
import ThreeStepProcess from "@/components/home/ThreeStepProcess";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import FAQAccordion from "@/components/home/FAQAccordion";
import BlogPreview from "@/components/home/BlogPreview";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { galleryCategories } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Stonefield Landscaping — Winnipeg's Premier Landscape Design Company",
  description:
    "Winnipeg's most trusted landscape design and construction company since 1995. Custom patios, stonework, gardens, and complete outdoor living spaces — built to last in Manitoba's climate.",
  openGraph: {
    title:
      "Stonefield Landscaping — Winnipeg's Premier Landscape Design Company",
    description:
      "Winnipeg's most trusted landscape design and construction company since 1995. Custom patios, stonework, gardens, and complete outdoor living spaces.",
    url: "https://stonefieldlandscaping.netlify.app",
    images: [
      {
        url: "https://images.unsplash.com/photo-1761637823293-f96835ec5038?w=1200&h=630&fit=crop&auto=format&q=80",
        width: 1200,
        height: 630,
        alt: "Stonefield Landscaping — Winnipeg outdoor living spaces",
      },
    ],
  },
  alternates: { canonical: "https://stonefieldlandscaping.netlify.app" },
};

const featuredIds = [
  "patios",
  "gardens",
  "fire-pits-fireplaces",
  "outdoor-kitchens-countertops",
  "water-features",
  "pool-decks",
];

export default function HomePage() {
  const featured = galleryCategories.filter((c) => featuredIds.includes(c.id));

  return (
    <>
      <HeroSlider />

      {/* Residential */}
      <SectionWrapper className="bg-stone-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">
              Residential Landscaping
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-green-deep leading-tight mb-6">
              Your Backyard,
              <br />
              <em>Reimagined</em>
            </h2>
            <p className="text-stone-gray font-body leading-relaxed mb-8 text-sm">
              We believe the space behind your home is as important as the space
              inside it. Stonefield Landscaping specializes in creating
              residential landscapes that are as functional as they are
              beautiful — outdoor living areas you&apos;ll actually live in,
              gardens that thrive across Manitoba&apos;s four seasons, and
              hardscaping that stands the test of time.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-deep text-white text-sm font-body font-medium tracking-wide hover:bg-green-mid transition-colors duration-200 rounded-lg"
            >
              View Gallery <ArrowRight size={15} />
            </Link>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1755275526214-a106840d664d?w=900&h=720&fit=crop&auto=format&q=80"
              alt="Beautiful residential landscape with stone patio"
              width={900}
              height={720}
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: "5/4" }}
            />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gold hidden md:flex flex-col items-center justify-center text-white text-center p-4">
              <span className="font-display text-3xl font-semibold leading-none">
                25+
              </span>
              <span className="text-[9px] tracking-wide font-body uppercase mt-1">
                Years of Excellence
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Commercial */}
      <SectionWrapper className="bg-green-deep text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1771911651523-e050dc4189ea?w=900&h=720&fit=crop&auto=format&q=80"
              alt="Commercial landscaping project"
              width={900}
              height={720}
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: "5/4" }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">
              Commercial Landscaping
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-6">
              First Impressions
              <br />
              <em>That Last</em>
            </h2>
            <p className="text-white/65 font-body leading-relaxed mb-8 text-sm">
              From corporate campuses and multi-family developments to retail
              environments and public spaces, Stonefield delivers commercial
              landscape solutions that elevate your property&apos;s presence and
              value. We understand the unique demands of commercial projects —
              scale, durability, and ongoing maintenance.
            </p>
            <Link
              href="/winnipeg-commercial-landscaping"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/40 text-white text-sm font-body font-medium tracking-wide hover:bg-white/10 transition-colors duration-200 rounded-lg"
            >
              View Commercial Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* 3-Step Process */}
      <ThreeStepProcess />

      {/* Pricing CTA */}
      <SectionWrapper className="bg-stone-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">
              Transparent Pricing
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-green-deep leading-tight mb-6">
              Understand Your Investment
            </h2>
            <p className="text-stone-gray font-body leading-relaxed mb-8 text-sm">
              We believe in honest conversations about cost from the very
              beginning. Our pricing page gives you a realistic framework for
              landscape budgets in Winnipeg — so you can approach our
              consultation with confidence.
            </p>
            <Link
              href="/winnipeg-landscape-pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-deep text-white text-sm font-body font-medium tracking-wide hover:bg-green-mid transition-colors duration-200 rounded-lg"
            >
              Explore Pricing <ArrowRight size={15} />
            </Link>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1761637823293-f96835ec5038?w=800&h=600&fit=crop&auto=format&q=80"
              alt="Landscaping project consultation"
              width={800}
              height={600}
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Gallery Feature Grid */}
      <SectionWrapper className="bg-charcoal">
        <div className="text-center mb-14">
          <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">
            Our Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {featured.map((cat) => (
            <Link
              key={cat.id}
              href={`/gallery/${cat.id}`}
              className="group relative overflow-hidden rounded-lg"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={cat.coverImage}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display text-lg font-semibold text-white">
                  {cat.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-sm font-body font-medium tracking-wide hover:bg-white/10 transition-colors duration-200 rounded-lg"
          >
            View All Categories <ArrowRight size={15} />
          </Link>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* FAQ */}
      <FAQAccordion />

      {/* Winnipeg Map Callout */}
      <SectionWrapper className="bg-stone-warm">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-green-deep text-white rounded-lg">
              <MapPin size={24} />
            </div>
          </div>
          <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">
            Serving Manitoba
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-green-deep mb-6">
            Proudly Rooted in Winnipeg
          </h2>
          <p className="text-stone-gray font-body text-sm leading-relaxed mb-8">
            From River Heights to Linden Woods, from Charleswood to St. Vital —
            we&apos;ve transformed outdoor spaces across every neighbourhood in
            Winnipeg and beyond. Our deep knowledge of Manitoba&apos;s soils,
            climate, and plant palette means every landscape we build is
            designed to endure.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-deep text-white text-sm font-body font-medium tracking-wide hover:bg-green-mid transition-colors duration-200 rounded-lg"
          >
            Start Your Project <ArrowRight size={15} />
          </Link>
        </div>
      </SectionWrapper>

      {/* Blog Preview */}
      <BlogPreview />
    </>
  );
}
