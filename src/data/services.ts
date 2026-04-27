export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  iconName: string
  image: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'consult',
    title: 'Discover',
    subtitle: 'Where every great landscape begins',
    description:
      'A thorough on-site conversation about your vision, lifestyle, and space. We listen first, then bring our expertise to shape a clear direction.',
    longDescription:
      "Every successful landscape transformation starts with understanding. During our consultation, we visit your property, assess the existing conditions, and spend real time discussing how you live, what you love, and what's not working. We ask questions other landscaping companies don't — because understanding your lifestyle is as important as understanding your soil.",
    iconName: 'MessageSquare',
    image: 'https://images.unsplash.com/photo-1597201278257-3687be27d954?w=1200&h=800&fit=crop&auto=format&q=80',
    features: [
      'On-site property assessment',
      'Lifestyle and usage discussions',
      'Budget alignment and phasing options',
      'Concept direction and inspiration review',
      'Written summary of scope and next steps',
    ],
  },
  {
    id: 'design',
    title: 'Design',
    subtitle: 'Vision made tangible',
    description:
      'Our design team translates your goals into detailed plans — from conceptual sketches to precise construction drawings.',
    longDescription:
      "Great landscapes are built on great plans. Our design process bridges the gap between your vision and a buildable reality. We develop detailed drawings, material specifications, planting plans, and 3D visualizations so you can see — and approve — every element before a single shovel enters the ground.",
    iconName: 'PenTool',
    image: 'https://images.unsplash.com/photo-1727012896963-2fd364e34a99?w=1200&h=800&fit=crop&auto=format&q=80',
    features: [
      'Conceptual design sketches',
      '2D plans and site drawings',
      '3D visualizations and renderings',
      'Material and plant specifications',
      'Hardscape and softscape integration',
    ],
  },
  {
    id: 'build',
    title: 'Craft',
    subtitle: 'Craftsmanship you can stand on',
    description:
      'Our experienced crews bring decades of combined expertise to every project, building with precision and pride.',
    longDescription:
      'When the design is approved and the plan is set, our construction teams take over with the same dedication to quality that defines every Sunny View Exteriors project. We manage all aspects of construction — grading, drainage, hardscaping, planting, and site cleanup — with a consistent crew foreman overseeing your project from start to finish.',
    iconName: 'HardHat',
    image: 'https://images.unsplash.com/photo-1770823191461-6d48b51a0349?w=1200&h=800&fit=crop&auto=format&q=80',
    features: [
      'Experienced, dedicated project crews',
      'Grading, drainage, and base preparation',
      'Hardscape installation (stone, pavers, concrete)',
      'Planting and softscape installation',
      'Final walkthrough and care instructions',
    ],
  },
]
