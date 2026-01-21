import type { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: 'snorkeling',
    name: 'Snorkeling',
    description: 'Explore the vibrant underwater world of Sri Lanka with crystal-clear waters and diverse marine life.',
    category: 'Water Sports',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    bestSeason: 'April to October',
    skillLevel: 'Beginner',
    duration: '2-4 hours',
    districts: ['trincomalee', 'galle', 'hikkaduwa', 'matara'],
    places: ['pigeon-island', 'nilaveli', 'hikkaduwa-beach', 'mirissa']
  },
  {
    id: 'whale-watching',
    name: 'Whale Watching',
    description: 'Witness magnificent blue whales and dolphins in their natural habitat.',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    bestSeason: 'November to April',
    skillLevel: 'Beginner',
    duration: '4-6 hours',
    districts: ['trincomalee', 'matara', 'galle'],
    places: ['mirissa', 'kalpitiya', 'trincomalee-bay']
  },
  {
    id: 'hiking',
    name: 'Hiking & Trekking',
    description: 'Discover Sri Lanka\'s lush landscapes, tea plantations, and mountain trails.',
    category: 'Hiking',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    bestSeason: 'Year-round',
    skillLevel: 'Intermediate',
    duration: 'Half day to full day',
    districts: ['nuwara-eliya', 'ella', 'kandy', 'rathnapura'],
    places: ['ella-rock', 'adams-peak', 'knuckles-range', 'horton-plains']
  },
  {
    id: 'temple-visit',
    name: 'Temple & Cultural Sites',
    description: 'Experience ancient temples, stupas, and rich Buddhist heritage.',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    bestSeason: 'Year-round',
    skillLevel: 'Beginner',
    duration: '2-3 hours',
    districts: ['kandy', 'anuradhapura', 'polonnaruwa', 'sigiriya'],
    places: ['temple-of-tooth', 'sigiriya-rock', 'anuradhapura-ruins', 'polonnaruwa-ruins']
  },
  {
    id: 'safari',
    name: 'Wildlife Safari',
    description: 'Spot elephants, leopards, and diverse wildlife in national parks.',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    bestSeason: 'Year-round (best during dry season)',
    skillLevel: 'Beginner',
    duration: 'Half day to full day',
    districts: ['yala', 'wilpattu', 'udawalawe', 'minneriya'],
    places: ['yala-national-park', 'wilpattu-national-park', 'udawalawe-national-park']
  },
  {
    id: 'surfing',
    name: 'Surfing',
    description: 'Ride world-class waves along Sri Lanka\'s beautiful coastline.',
    category: 'Water Sports',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800',
    bestSeason: 'May to September (West Coast), November to March (East Coast)',
    skillLevel: 'Intermediate',
    duration: '2-3 hours',
    districts: ['arugam-bay', 'hikkaduwa', 'matara', 'weligama'],
    places: ['arugam-bay-beach', 'hikkaduwa-beach', 'weligama-beach']
  },
  {
    id: 'beach-relaxation',
    name: 'Beach Relaxation',
    description: 'Unwind on pristine beaches with golden sands and turquoise waters.',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    bestSeason: 'Year-round',
    skillLevel: 'Beginner',
    duration: 'Flexible',
    districts: ['trincomalee', 'galle', 'matara', 'bentota'],
    places: ['nilaveli', 'unawatuna', 'mirissa', 'bentota-beach']
  },
  {
    id: 'tea-tasting',
    name: 'Tea Plantation Tours',
    description: 'Visit tea estates, learn about Ceylon tea production, and enjoy scenic views.',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800',
    bestSeason: 'Year-round',
    skillLevel: 'Beginner',
    duration: '2-3 hours',
    districts: ['nuwara-eliya', 'kandy', 'ella'],
    places: ['nuwara-eliya-plantations', 'pedro-tea-estate']
  },
  {
    id: 'cooking-class',
    name: 'Sri Lankan Cooking Classes',
    description: 'Learn to prepare authentic Sri Lankan dishes with local chefs.',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800',
    bestSeason: 'Year-round',
    skillLevel: 'Beginner',
    duration: '3-4 hours',
    districts: ['kandy', 'galle', 'colombo'],
    places: ['kandy-cooking-school', 'galle-cooking-class']
  },
  {
    id: 'yoga-retreat',
    name: 'Yoga & Wellness',
    description: 'Rejuvenate your mind and body with yoga sessions in serene settings.',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    bestSeason: 'Year-round',
    skillLevel: 'Beginner',
    duration: '1-2 hours',
    districts: ['nuwara-eliya', 'kandy', 'galle', 'mirissa'],
    places: ['kandy-yoga', 'nuwara-eliya-retreat']
  }
];