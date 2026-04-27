import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { MessageSquare, PenTool, HardHat } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: MessageSquare,
    title: "Discover",
    description:
      "We begin with a comprehensive site visit and conversation — understanding your vision, lifestyle, and goals before a single line is drawn.",
    href: "/services#discover",
  },
  {
    number: "02",
    Icon: PenTool,
    title: "Design",
    description:
      "Our design team develops detailed plans, 3D visualizations, and material specifications so you can see your landscape before it's built.",
    href: "/services#design",
  },
  {
    number: "03",
    Icon: HardHat,
    title: "Craft",
    description:
      "Experienced crews execute your approved design with precision craftsmanship, managing every aspect of construction from grade to planting.",
    href: "/services#craft",
  },
];

export default function ThreeStepProcess() {
  return (
    <SectionWrapper className="bg-stone-warm">
      <div className="text-center mb-16">
        <p className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-medium mb-4">
          Our Process
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-green-deep">
          How We Work
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {steps.map(({ number, Icon, title, description, href }) => (
          <div key={number} className="relative group overflow-hidden">
            <span className="absolute -top-3 right-1 font-display text-[6rem] font-light leading-none text-green-deep/[0.06] select-none pointer-events-none">
              {number}
            </span>
            <div className="w-11 h-11 flex items-center justify-center bg-green-deep text-white mb-6 group-hover:bg-green-mid transition-colors duration-300 rounded-lg">
              <Icon size={20} />
            </div>
            <h3 className="font-display text-2xl font-semibold text-green-deep mb-4">
              {title}
            </h3>
            <p className="text-stone-gray text-sm font-body leading-relaxed mb-6">
              {description}
            </p>
            <Link
              href={href}
              className="inline-flex items-center text-sm font-body font-medium text-green-deep hover:text-gold transition-colors duration-200 tracking-wide underline underline-offset-4 decoration-green-deep/30 hover:decoration-gold"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
