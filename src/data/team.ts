export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  image: string
}

export const team: TeamMember[] = [
  {
    id: 'zohaib-cheema',
    name: 'Zohaib Cheema',
    title: 'Owner & Founder',
    bio: 'Zohaib founded Sunny View Exteriors with a passion for transforming Manitoba outdoor spaces. He brings hands-on expertise, a sharp eye for design, and a personal commitment to every client relationship.',
    image: 'https://images.unsplash.com/photo-1769636930047-4478f12cf430?w=400&h=500&fit=crop&auto=format&q=80',
  },
  {
    id: 'mara-voss',
    name: 'Mara Voss',
    title: 'Senior Landscape Designer',
    bio: "Mara's formal training in landscape design paired with her passion for sustainable outdoor spaces has made her an invaluable part of the Sunny View Exteriors team.",
    image: 'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?w=400&h=500&fit=crop&auto=format&q=80',
  },
  {
    id: 'cal-drummond',
    name: 'Cal Drummond',
    title: 'Construction Supervisor',
    bio: 'Cal oversees every build phase with meticulous attention to craftsmanship, ensuring that our designs come to life exactly as envisioned — on time and on budget.',
    image: 'https://images.unsplash.com/photo-1769636929261-e913ed023c83?w=400&h=500&fit=crop&auto=format&q=80',
  },
  {
    id: 'nora-blackwell',
    name: 'Nora Blackwell',
    title: 'Horticultural Specialist',
    bio: "Nora's expertise in Manitoba-hardy plants ensures that every garden we create thrives beautifully across all four seasons, year after year.",
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=400&h=500&fit=crop&auto=format&q=80',
  },
]
