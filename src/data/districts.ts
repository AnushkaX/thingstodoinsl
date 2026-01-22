import type { District } from '../types';

export const districts: District[] = [
  {
    id: 'trincomalee',
    name: 'Trincomalee',
    description: 'A coastal paradise known for pristine beaches, diving, and whale watching. Home to historical temples and stunning natural harbors.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    activities: ['snorkeling', 'whale-watching', 'beach-relaxation', 'scuba-diving', 'temple-visit', 'hindu-temples'],
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
    activities: ['temple-visit', 'tea-tasting', 'hiking', 'yoga-retreat', 'cooking-class', 'cultural-dance-shows', 'kandy-lake-walk', 'botanical-gardens'],
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
    activities: ['snorkeling', 'beach-relaxation', 'temple-visit', 'cooking-class', 'yoga-retreat', 'galle-fort-walk', 'lighthouse-visits', 'cafe-hopping', 'sunset-photography', 'scuba-diving', 'colonial-architecture'],
    places: [
      { id: 'galle-fort', name: 'Galle Fort', description: 'UNESCO World Heritage Site with colonial architecture' },
      { id: 'unawatuna', name: 'Unawatuna Beach', description: 'Popular beach for swimming and snorkeling' },
      { id: 'hikkaduwa-beach', name: 'Hikkaduwa Beach', description: 'Great for surfing and marine life spotting' },
      { id: 'galle-lighthouse', name: 'Galle Lighthouse', description: 'Historic lighthouse with coastal views' }
    ],
    coordinates: { x: 40, y: 80 }
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    description: 'Misty hill station known as "Little England" with tea plantations, waterfalls, and cool climate.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    activities: ['tea-tasting', 'hiking', 'yoga-retreat', 'gregory-lake-activities', 'cool-climate-sightseeing', 'botanical-gardens', 'train-journeys'],
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
    activities: ['temple-visit', 'hiking', 'sigiriya-rock-climb', 'pidurangala-hike', 'sunrise-sunset-photography', 'rural-village-experiences'],
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
    activities: ['snorkeling', 'whale-watching', 'surfing', 'beach-relaxation', 'scuba-diving', 'beach-walks', 'temple-visit'],
    places: [
      { id: 'mirissa', name: 'Mirissa', description: 'Best whale watching destination in Sri Lanka' },
      { id: 'weligama', name: 'Weligama Beach', description: 'Popular surf spot with gentle waves' },
      { id: 'polhena', name: 'Polhena Beach', description: 'Beautiful beach perfect for relaxation and snorkeling' }
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
    activities: ['temple-visit', 'ancient-ruins-exploration', 'sacred-stupas', 'cycling-heritage', 'archaeological-tours', 'spiritual-tourism'],
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
    activities: ['temple-visit', 'ancient-city-exploration', 'cycling-heritage', 'archaeological-tours', 'archaeological-photography', 'museums-galleries'],
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
    activities: ['beach-relaxation', 'jet-skiing', 'river-safari'],
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
    activities: ['hiking', 'gem-mining', 'waterfall-exploration', 'nature-photography'],
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
    activities: ['cooking-class', 'city-sightseeing', 'street-food-tours', 'shopping', 'nightlife', 'museums-galleries', 'beach-walks', 'colonial-architecture'],
    places: [
      { id: 'colombo-fort', name: 'Colombo Fort', description: 'Historic commercial district' },
      { id: 'galle-face', name: 'Galle Face Green', description: 'Waterfront promenade' }
    ],
    coordinates: { x: 32, y: 50 }
  },
  {
    id: 'gampaha',
    name: 'Gampaha',
    description: 'District known for wetlands, lagoons, and fishing villages near the capital.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    activities: ['wetland-safari', 'lagoon-boat-rides', 'fishing-village-tours', 'bird-watching', 'beach-relaxation'],
    places: [
      { id: 'muthurajawela', name: 'Muthurajawela Wetland', description: 'Largest saline coastal peat bog in Sri Lanka' },
      { id: 'negombo-lagoon', name: 'Negombo Lagoon', description: 'Beautiful lagoon perfect for boat rides' },
      { id: 'negombo-beach', name: 'Negombo Beach', description: 'Popular beach destination near the airport' }
    ],
    coordinates: { x: 30, y: 48 }
  },
  {
    id: 'kalutara',
    name: 'Kalutara',
    description: 'Coastal district famous for beaches, water sports, and river safaris.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    activities: ['beach-relaxation', 'river-safari', 'jet-skiing', 'turtle-conservation', 'snorkeling'],
    places: [
      { id: 'bentota-river', name: 'Bentota River', description: 'Scenic river perfect for safaris and water activities' },
      { id: 'kalutara-beach', name: 'Kalutara Beach', description: 'Beautiful beach with water sports facilities' }
    ],
    coordinates: { x: 36, y: 75 }
  },
  {
    id: 'hambantota',
    name: 'Hambantota',
    description: 'Wildlife-rich district home to Yala National Park and Bundala Bird Sanctuary.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    activities: ['safari', 'bundala-bird-sanctuary', 'bird-watching', 'flamingo-watching', 'salt-pans-photography', 'beach-relaxation', 'whale-watching'],
    places: [
      { id: 'bundala-bird-sanctuary', name: 'Bundala Bird Sanctuary', description: 'Ramsar wetland site with diverse bird species' }
    ],
    coordinates: { x: 48, y: 78 }
  },
  {
    id: 'monaragala',
    name: 'Monaragala',
    description: 'District offering wildlife safaris, nature trails, and rural experiences.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    activities: ['safari', 'nature-trails', 'rural-village-experiences', 'bird-watching'],
    places: [],
    coordinates: { x: 55, y: 70 }
  },
  {
    id: 'badulla',
    name: 'Badulla',
    description: 'Hill country district with hiking trails, waterfalls, and scenic train journeys.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    activities: ['hiking', 'tea-tasting', 'train-journeys', 'waterfall-exploration'],
    places: [
      { id: 'ella-rock', name: 'Ella Rock', description: 'Challenging hike with panoramic views' },
      { id: 'little-adams-peak', name: 'Little Adam\'s Peak', description: 'Easy hike with beautiful scenery' },
      { id: 'nine-arch-bridge', name: 'Nine Arch Bridge', description: 'Iconic railway bridge in the jungle' }
    ],
    coordinates: { x: 52, y: 65 }
  },
  {
    id: 'matale',
    name: 'Matale',
    description: 'Cultural district known for spice gardens, cave temples, and proximity to Dambulla and Sigiriya.',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    activities: ['spice-garden-visits', 'aluvihare-cave-temple', 'river-rafting', 'mountain-hikes', 'dambulla-cave-temple', 'cultural-village-tours', 'traditional-cooking-demos', 'temple-visit'],
    places: [],
    coordinates: { x: 52, y: 42 }
  },
  {
    id: 'kegalle',
    name: 'Kegalle',
    description: 'Adventure district famous for white water rafting and jungle trekking.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    activities: ['river-rafting', 'jungle-trekking', 'bird-watching', 'village-stays'],
    places: [
      { id: 'kitulgala', name: 'Kitulgala', description: 'Famous white water rafting destination' }
    ],
    coordinates: { x: 45, y: 55 }
  },
  {
    id: 'batticaloa',
    name: 'Batticaloa',
    description: 'Coastal district with beautiful lagoons, beaches, and cultural experiences.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    activities: ['kayaking', 'fishing-village-tours', 'beach-relaxation', 'lagoon-boat-rides'],
    places: [],
    coordinates: { x: 72, y: 50 }
  },
  {
    id: 'ampara',
    name: 'Ampara',
    description: 'Eastern district famous for Arugam Bay surfing, yoga retreats, and lagoon safaris.',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800',
    activities: ['surfing', 'yoga-retreat', 'wetland-safari', 'beach-relaxation'],
    places: [
      { id: 'arugam-bay-beach', name: 'Arugam Bay Beach', description: 'One of the best surf breaks in Asia' }
    ],
    coordinates: { x: 70, y: 65 }
  },
  {
    id: 'jaffna',
    name: 'Jaffna',
    description: 'Northern cultural hub with historic forts, Hindu temples, and island hopping opportunities.',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    activities: ['jaffna-fort', 'street-food-tours', 'island-hopping', 'hindu-temples', 'bird-watching', 'temple-visit'],
    places: [],
    coordinates: { x: 25, y: 15 }
  },
  {
    id: 'mannar',
    name: 'Mannar',
    description: 'Northern district known for bird watching, baobab trees, and Adam\'s Bridge.',
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800',
    activities: ['bird-watching', 'baobab-tree-visits', 'adams-bridge-exploration', 'coastal-photography'],
    places: [],
    coordinates: { x: 20, y: 20 }
  },
  {
    id: 'vavuniya',
    name: 'Vavuniya',
    description: 'Northern district offering authentic local markets and cultural immersion experiences.',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    activities: ['shopping', 'cultural-immersion', 'rural-village-experiences'],
    places: [],
    coordinates: { x: 35, y: 25 }
  },
  {
    id: 'mullaitivu',
    name: 'Mullaitivu',
    description: 'Northern coastal district with untouched beaches and peaceful lagoon fishing.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    activities: ['untouched-beaches', 'lagoon-fishing', 'nature-trails', 'coastal-photography', 'beach-relaxation', 'lagoon-boat-rides'],
    places: [],
    coordinates: { x: 65, y: 20 }
  }
];