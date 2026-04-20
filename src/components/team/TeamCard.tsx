import Image from 'next/image'
import type { TeamMember } from '@/data/team'

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg" style={{ aspectRatio: '4/5' }}>
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={500}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="border-t-2 border-green-deep pt-5 mt-0">
        <h3 className="font-display text-xl font-semibold text-green-deep">{member.name}</h3>
        <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-body font-medium mt-1 mb-3">
          {member.title}
        </p>
        <p className="text-stone-gray text-sm font-body leading-relaxed">{member.bio}</p>
      </div>
    </div>
  )
}
