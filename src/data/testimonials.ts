export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Lynn & Derek A.',
    location: 'Tuxedo, Winnipeg',
    rating: 5,
    text: 'Stonefield completely transformed our backyard from a forgotten space into the outdoor living area we always dreamed of. The attention to detail in the stonework and planting plan was extraordinary.',
  },
  {
    id: '2',
    name: 'Marcus Aldren',
    location: 'River Heights, Winnipeg',
    rating: 5,
    text: "From the initial consultation to the final walkthrough, the entire team was professional, communicative, and clearly passionate about their craft. Our new patio and fire pit area gets used every single week.",
  },
  {
    id: '3',
    name: 'Gillian Tate',
    location: 'Charleswood, Winnipeg',
    rating: 5,
    text: 'I was skeptical about the investment at first, but looking at the finished project now — and knowing how low-maintenance the plants they chose are — I understand the value completely. Worth every penny.',
  },
  {
    id: '4',
    name: 'The Calloway Family',
    location: 'Waverley Heights, Winnipeg',
    rating: 5,
    text: "Our outdoor kitchen project was massive in scope, and Owen's team never missed a beat. They worked clean, stayed on schedule, and the finished result is better than any rendering we could have imagined.",
  },
  {
    id: '5',
    name: 'Renée Moreau',
    location: 'St. Vital, Winnipeg',
    rating: 5,
    text: 'The water feature they installed has become the centrepiece of our whole yard. Guests always ask about it. The naturalistic pond design looks like it has been there for decades.',
  },
  {
    id: '6',
    name: 'Paul & Sandra Veitch',
    location: 'Linden Woods, Winnipeg',
    rating: 5,
    text: "Three years after installation, our landscape looks even better than year one — that tells you everything about the quality of the plants and hardscaping they used. Stonefield builds landscapes that last.",
  },
]
