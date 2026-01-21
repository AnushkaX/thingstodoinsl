import type { District } from '../types';

export const districts: District[] = [
  {
    id: 'trincomalee',
    name: 'Trincomalee',
    description: 'A coastal paradise known for pristine beaches, diving, and whale watching. Home to historical temples and stunning natural harbors.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    activities: ['snorkeling', 'whale-watching', 'beach-relaxation'],
    places: [
      { id: 'pigeon-island', name: 'Pigeon Island', description: 'Famous snorkeling destination with vibrant coral reefs' },
      { id: 'nilaveli', name: 'Nilaveli Beach', description: 'Long stretch of white sand beach perfect for relaxation' },
      { id: 'koneswaram-temple', name: 'Koneswaram Temple', description: 'Ancient Hindu temple overlooking the ocean' }
    ],
    coordinates: { x: 75, y: 30 }
  },
  {
    id: 'kandy',
    name: 'Kandy',
    description: 'The cultural capital featuring the Temple of the Sacred Tooth Relic, beautiful gardens, and traditional architecture.',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    activities: ['temple-visit', 'tea-tasting', 'hiking', 'yoga-retreat', 'cooking-class'],
    places: [
      { id: 'temple-of-tooth', name: 'Temple of the Sacred Tooth Relic', description: 'Most sacred Buddhist temple in Sri Lanka' },
      { id: 'royal-botanical', name: 'Royal Botanical Gardens', description: 'Lush gardens with diverse plant species' },
      { id: 'pedro-tea-estate', name: 'Pedro Tea Estate', description: 'Scenic tea plantation with guided tours' }
    ],
    coordinates: { x: 50, y: 45 }
  },
  {
    id: 'galle',
    name: 'Galle',
    description: 'Historic fort city with colonial architecture, beautiful beaches, and vibrant local culture.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    activities: ['snorkeling', 'beach-relaxation', 'temple-visit', 'cooking-class', 'yoga-retreat'],
    places: [
      { id: 'galle-fort', name: 'Galle Fort', description: 'UNESCO World Heritage Site with colonial architecture' },
      { id: 'unawatuna', name: 'Unawatuna Beach', description: 'Popular beach for swimming and snorkeling' },
      { id: 'hikkaduwa-beach', name: 'Hikkaduwa Beach', description: 'Great for surfing and marine life spotting' }
    ],
    coordinates: { x: 40, y: 80 }
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    description: 'Misty hill station known as "Little England" with tea plantations, waterfalls, and cool climate.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    activities: ['tea-tasting', 'hiking', 'yoga-retreat'],
    places: [
      { id: 'nuwara-eliya-plantations', name: 'Tea Plantations', description: 'Scenic tea estates with factory visits' },
      { id: 'gregory-lake', name: 'Gregory Lake', description: 'Beautiful lake perfect for boating and picnics' },
      { id: 'horton-plains', name: 'Horton Plains', description: 'Highland plateau with hiking trails' }
    ],
    coordinates: { x: 50, y: 60 }
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    description: 'Home to the ancient rock fortress, a UNESCO World Heritage Site with stunning views and frescoes.',
    image: 'https://images.unsplash.com/photo-1586664787423-d163760d01c5?w=800',
    activities: ['temple-visit', 'hiking'],
    places: [
      { id: 'sigiriya-rock', name: 'Sigiriya Rock Fortress', description: 'Ancient palace ruins atop a massive rock' },
      { id: 'pidurangala', name: 'Pidurangala Rock', description: 'Alternative viewpoint for sunrise' }
    ],
    coordinates: { x: 55, y: 40 }
  },
  {
    id: 'matara',
    name: 'Matara',
    description: 'Coastal town famous for beaches, surfing, and whale watching opportunities.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    activities: ['snorkeling', 'whale-watching', 'surfing', 'beach-relaxation'],
    places: [
      { id: 'mirissa', name: 'Mirissa', description: 'Best whale watching destination in Sri Lanka' },
      { id: 'weligama', name: 'Weligama Beach', description: 'Popular surf spot with gentle waves' }
    ],
    coordinates: { x: 42, y: 85 }
  },
  {
    id: 'ella',
    name: 'Ella',
    description: 'Mountain town with scenic train rides, hiking trails, and stunning viewpoints.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    activities: ['hiking', 'tea-tasting'],
    places: [
      { id: 'ella-rock', name: 'Ella Rock', description: 'Challenging hike with panoramic views' },
      { id: 'nine-arch-bridge', name: 'Nine Arch Bridge', description: 'Iconic railway bridge in the jungle' },
      { id: 'little-adams-peak', name: 'Little Adam\'s Peak', description: 'Easy hike with beautiful scenery' }
    ],
    coordinates: { x: 52, y: 65 }
  },
  {
    id: 'yala',
    name: 'Yala',
    description: 'Premier wildlife destination with the highest concentration of leopards in the world.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    activities: ['safari'],
    places: [
      { id: 'yala-national-park', name: 'Yala National Park', description: 'Famous for leopards, elephants, and diverse wildlife' }
    ],
    coordinates: { x: 45, y: 75 }
  },
  {
    id: 'anuradhapura',
    name: 'Anuradhapura',
    description: 'Ancient capital with well-preserved ruins of an ancient Sinhalese civilization.',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    activities: ['temple-visit'],
    places: [
      { id: 'anuradhapura-ruins', name: 'Sacred City', description: 'UNESCO World Heritage Site with ancient stupas and ruins' }
    ],
    coordinates: { x: 45, y: 35 }
  },
  {
    id: 'polonnaruwa',
    name: 'Polonnaruwa',
    description: 'Second ancient capital featuring impressive ruins, statues, and royal structures.',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    activities: ['temple-visit'],
    places: [
      { id: 'polonnaruwa-ruins', name: 'Ancient City', description: 'UNESCO World Heritage Site with well-preserved ruins' }
    ],
    coordinates: { x: 60, y: 38 }
  },
  {
    id: 'hikkaduwa',
    name: 'Hikkaduwa',
    description: 'Popular beach destination known for surfing, diving, and vibrant nightlife.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    activities: ['snorkeling', 'surfing', 'beach-relaxation'],
    places: [
      { id: 'hikkaduwa-beach', name: 'Hikkaduwa Beach', description: 'Coral reef sanctuary and surfing spot' }
    ],
    coordinates: { x: 38, y: 78 }
  },
  {
    id: 'arugam-bay',
    name: 'Arugam Bay',
    description: 'World-renowned surf destination with consistent waves and laid-back atmosphere.',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800',
    activities: ['surfing', 'beach-relaxation'],
    places: [
      { id: 'arugam-bay-beach', name: 'Arugam Bay Beach', description: 'One of the best surf breaks in Asia' }
    ],
    coordinates: { x: 70, y: 70 }
  },
  {
    id: 'bentota',
    name: 'Bentota',
    description: 'Resort town with beautiful beaches, water sports, and river cruises.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    activities: ['beach-relaxation', 'water-sports'],
    places: [
      { id: 'bentota-beach', name: 'Bentota Beach', description: 'Wide sandy beach with water sports facilities' }
    ],
    coordinates: { x: 35, y: 77 }
  },
  {
    id: 'wilpattu',
    name: 'Wilpattu',
    description: 'Largest national park known for leopards, sloth bears, and natural lakes called villus.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    activities: ['safari'],
    places: [
      { id: 'wilpattu-national-park', name: 'Wilpattu National Park', description: 'Wildlife sanctuary with diverse fauna' }
    ],
    coordinates: { x: 30, y: 25 }
  },
  {
    id: 'udawalawe',
    name: 'Udawalawe',
    description: 'National park famous for large elephant herds and bird watching.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    activities: ['safari'],
    places: [
      { id: 'udawalawe-national-park', name: 'Udawalawe National Park', description: 'Best place to see elephants in the wild' }
    ],
    coordinates: { x: 48, y: 70 }
  },
  {
    id: 'minneriya',
    name: 'Minneriya',
    description: 'National park known for "The Gathering" - largest Asian elephant gathering.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    activities: ['safari'],
    places: [
      { id: 'minneriya-national-park', name: 'Minneriya National Park', description: 'Witness hundreds of elephants gathering' }
    ],
    coordinates: { x: 58, y: 42 }
  },
  {
    id: 'rathnapura',
    name: 'Rathnapura',
    description: 'Gem city surrounded by mountains, waterfalls, and rich biodiversity.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    activities: ['hiking'],
    places: [
      { id: 'sinharaja', name: 'Sinharaja Forest', description: 'UNESCO World Heritage rainforest' }
    ],
    coordinates: { x: 42, y: 72 }
  },
  {
    id: 'colombo',
    name: 'Colombo',
    description: 'Vibrant capital city with colonial architecture, shopping, and diverse cuisine.',
    image: 'https://images.unsplash.com/photo-1527828304104-0e2c0c3b4d2e?w=800',
    activities: ['cooking-class', 'food'],
    places: [
      { id: 'colombo-fort', name: 'Colombo Fort', description: 'Historic commercial district' },
      { id: 'galle-face', name: 'Galle Face Green', description: 'Waterfront promenade' }
    ],
    coordinates: { x: 32, y: 50 }
  }
];