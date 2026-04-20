export interface GalleryCategory {
  id: string
  label: string
  description: string
  coverImage: string
  images: { src: string; alt: string }[]
}

const U = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const galleryPhotos: Record<string, { cover: string; images: string[] }> = {
  patio: {
    cover: 'photo-1761637823293-f96835ec5038',
    images: [
      'photo-1763431879889-cdcec4d31e46', 'photo-1761637824276-a75efae3adcf',
      'photo-1760624493013-a852d68854a7', 'photo-1758555225908-9930716a8e19',
      'photo-1759020625323-019affd022a3', 'photo-1762926628099-a27b380d94c9',
      'photo-1722768828491-e9342b10c8e1', 'photo-1722169008852-012bec0885fc',
      'photo-1590034973922-08ef47ff7d99',
    ],
  },
  driveway: {
    cover: 'photo-1646519553441-fcf1b8481043',
    images: [
      'photo-1596204655484-2c0974da73a3', 'photo-1589968378251-ebfca39a0c0d',
      'photo-1761637823622-eaaaee0660db', 'photo-1761637822930-fb1c1a3df94d',
      'photo-1718966151008-0afc77bb0749', 'photo-1501780029-030a17f237bf',
    ],
  },
  steps: {
    cover: 'photo-1770823191461-6d48b51a0349',
    images: [
      'photo-1774198970801-460a43229914', 'photo-1771258057366-0c2f2d4ff7f1',
      'photo-1759862302312-99075011aa1b', 'photo-1771326110934-04aa135f417e',
      'photo-1760345970360-e776c34f98be', 'photo-1754956042991-213b2e27db67',
    ],
  },
  garden: {
    cover: 'photo-1727012896963-2fd364e34a99',
    images: [
      'photo-1690404946138-f12ca2497d36', 'photo-1728667088041-ee116cf57c6c',
      'photo-1746348053354-c36fd8a7486d', 'photo-1652500083128-dccc90fae878',
      'photo-1654525270894-fd5ac8b5a8fc', 'photo-1611704125993-89c715adcfd2',
      'photo-1595672049786-43da1581214c', 'photo-1597201278257-3687be27d954',
      'photo-1706098609406-ebdfe2f04d73',
    ],
  },
  retaining: {
    cover: 'photo-1659242484336-edb4f31b0d0c',
    images: [
      'photo-1723544541292-181dadbae61e', 'photo-1761637823941-0ffae96ec487',
      'photo-1750053409515-de9998d31c89', 'photo-1719757117671-a92edcf0340b',
      'photo-1694432759476-8db2bef4b334', 'photo-1687175195323-567f86d5c241',
    ],
  },
  walkway: {
    cover: 'photo-1767247795570-8b82bbd7307a',
    images: [
      'photo-1766585464526-3c66169a0eee', 'photo-1762251375413-fe99d5a3aad5',
      'photo-1628151052841-936235e0dbe7', 'photo-1760774717629-b8450944ae0d',
      'photo-1766025065806-0ed92891692d', 'photo-1764996660523-4f8a82ac2a3d',
    ],
  },
  accent: {
    cover: 'photo-1767334996666-e288d67821c2',
    images: [
      'photo-1759577085348-7b7d9fb537a4', 'photo-1760014844693-a0a915679500',
      'photo-1740811619788-0e29c107e2a3', 'photo-1765099272108-693e9d618bed',
      'photo-1766179117093-29b68bb2da4a', 'photo-1764505879979-010703addc52',
    ],
  },
  firepit: {
    cover: 'photo-1766823343386-586aac281b28',
    images: [
      'photo-1692101166120-cefc9ac3f9be', 'photo-1684704182972-99ffeb87bcae',
      'photo-1715090576114-c07384af2069', 'photo-1626075246403-544a14566c3d',
      'photo-1694885161486-6390b35de012', 'photo-1694885193823-92929c013213',
      'photo-1694885090746-d90472e11c0e', 'photo-1694885186013-5aa7d91ae5d5',
      'photo-1714138690309-6d8d1e3adf2c',
    ],
  },
  pool: {
    cover: 'photo-1766302524641-0961724b1781',
    images: [
      'photo-1763479142280-675629f6db27', 'photo-1774280960001-ce8169cfc38f',
      'photo-1764114656553-7ba452bed8bd', 'photo-1758530273862-f765619474c2',
      'photo-1709755502254-3a71dab6fa58', 'photo-1769339764809-522564cf34c9',
    ],
  },
  water: {
    cover: 'photo-1765288108580-85f0e03f7b18',
    images: [
      'photo-1772779275666-ac9875e032da', 'photo-1758787413116-0abc98b9493c',
      'photo-1772893320219-a67d8ca8f010', 'photo-1702667750473-5c497ecfe5dc',
      'photo-1714687382110-5bcd608ad5d8', 'photo-1727302788943-e26aec0f6987',
    ],
  },
  pergola: {
    cover: 'photo-1766087752966-b9a7b058b7da',
    images: [
      'photo-1743790126910-acd76c7a0fbc', 'photo-1655987775420-276b03da2fee',
      'photo-1674672670977-bcf517fc2376', 'photo-1617372122508-ddde42169b4c',
      'photo-1696846912973-3233cc80bf86', 'photo-1707056683255-1ec0180cf5ac',
    ],
  },
  screen: {
    cover: 'photo-1719700218227-06191819577f',
    images: [
      'photo-1599151893427-e09096e38d6d', 'photo-1632904819918-f3f3f940410d',
      'photo-1465596557297-bd4c79d0e6bd', 'photo-1755843819306-eecb961efab7',
      'photo-1612227422414-59180fc46e64', 'photo-1649719988126-41e6d8cf8925',
    ],
  },
  kitchen: {
    cover: 'photo-1770318724110-c9d426f2125e',
    images: [
      'photo-1694885090746-d90472e11c0e', 'photo-1674672670977-bcf517fc2376',
      'photo-1605495121546-5bd6c3fbfeec', 'photo-1694885161486-6390b35de012',
      'photo-1605494708770-7ad22155b2fe', 'photo-1694885193823-92929c013213',
      'photo-1716904519810-349244919824', 'photo-1626075246403-544a14566c3d',
      'photo-1684704182972-99ffeb87bcae',
    ],
  },
  video: {
    cover: 'photo-1597201278257-3687be27d954',
    images: [
      'photo-1755275526214-a106840d664d', 'photo-1679200271071-2b3f17d1d1af',
      'photo-1619430120434-7cbec8ac6632', 'photo-1665265368388-dbe023c7b0dd',
    ],
  },
}

const makeImages = (seed: string, count: number) => {
  const pool = galleryPhotos[seed]
  if (!pool) return []
  return pool.images.slice(0, count).map((id, i) => ({
    src: U(id, 900, 700),
    alt: `${seed} project ${i + 1}`,
  }))
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'patios',
    label: 'Patios',
    description: 'Custom-designed patio spaces that extend your home into the outdoors.',
    coverImage: U(galleryPhotos.patio.cover, 800, 600),
    images: makeImages('patio', 9),
  },
  {
    id: 'driveways',
    label: 'Driveways',
    description: 'Sweeping driveways crafted from premium stone and pavers.',
    coverImage: U(galleryPhotos.driveway.cover, 800, 600),
    images: makeImages('driveway', 6),
  },
  {
    id: 'steps',
    label: 'Steps',
    description: 'Stately stone steps and staircases for every property style.',
    coverImage: U(galleryPhotos.steps.cover, 800, 600),
    images: makeImages('steps', 6),
  },
  {
    id: 'gardens',
    label: 'Gardens',
    description: "Lush, thoughtfully planted gardens that thrive in Manitoba's climate.",
    coverImage: U(galleryPhotos.garden.cover, 800, 600),
    images: makeImages('garden', 9),
  },
  {
    id: 'planters-retaining-walls',
    label: 'Planters & Retaining Walls',
    description: 'Structural beauty that defines and elevates your landscape.',
    coverImage: U(galleryPhotos.retaining.cover, 800, 600),
    images: makeImages('retaining', 6),
  },
  {
    id: 'paths-walkways',
    label: 'Paths & Walkways',
    description: 'Guiding stone paths that invite exploration through your outdoor space.',
    coverImage: U(galleryPhotos.walkway.cover, 800, 600),
    images: makeImages('walkway', 6),
  },
  {
    id: 'accents',
    label: 'Accents',
    description: 'The finishing touches that turn a good landscape into a great one.',
    coverImage: U(galleryPhotos.accent.cover, 800, 600),
    images: makeImages('accent', 6),
  },
  {
    id: 'fire-pits-fireplaces',
    label: 'Fire Pits & Fireplaces',
    description: 'Gather around a custom-built fire feature designed for year-round enjoyment.',
    coverImage: U(galleryPhotos.firepit.cover, 800, 600),
    images: makeImages('firepit', 9),
  },
  {
    id: 'pool-decks',
    label: 'Pool Decks',
    description: 'Resort-inspired pool surrounds crafted for the Manitoba summer.',
    coverImage: U(galleryPhotos.pool.cover, 800, 600),
    images: makeImages('pool', 6),
  },
  {
    id: 'water-features',
    label: 'Water Features',
    description: 'Serene ponds, waterfalls, and fountains that bring tranquility to any space.',
    coverImage: U(galleryPhotos.water.cover, 800, 600),
    images: makeImages('water', 6),
  },
  {
    id: 'pergolas',
    label: 'Pergolas',
    description: 'Architectural structures that define outdoor rooms with elegance.',
    coverImage: U(galleryPhotos.pergola.cover, 800, 600),
    images: makeImages('pergola', 6),
  },
  {
    id: 'screens',
    label: 'Screens',
    description: 'Privacy screens and living walls that create intimate outdoor sanctuaries.',
    coverImage: U(galleryPhotos.screen.cover, 800, 600),
    images: makeImages('screen', 6),
  },
  {
    id: 'outdoor-kitchens-countertops',
    label: 'Outdoor Kitchens & Countertops',
    description: 'Fully equipped outdoor culinary spaces for the ultimate entertaining experience.',
    coverImage: U(galleryPhotos.kitchen.cover, 800, 600),
    images: makeImages('kitchen', 9),
  },
  {
    id: 'video',
    label: 'Video',
    description: 'See our projects come to life through stunning video showcases.',
    coverImage: U(galleryPhotos.video.cover, 800, 600),
    images: makeImages('video', 4),
  },
]
