// SEO data and structured data generators for different pages
import { getAssetPath } from './paths';

export const defaultSEO = {
  title: 'Discover Sri Lanka - Things to Do & Places to Visit',
  description: 'Discover amazing things to do, places to visit, and activities across Sri Lanka. Explore districts, activities, and plan your perfect Sri Lankan adventure.',
  keywords: 'Sri Lanka, travel, tourism, activities, places to visit, things to do, districts, attractions, beaches, hiking, wildlife, culture',
  image: getAssetPath('carousel/1.webp'),
};

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Discover Sri Lanka',
    description: 'Your guide to amazing things to do, places to visit, and activities across Sri Lanka',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    logo: typeof window !== 'undefined' ? `${window.location.origin}/vite.svg` : '',
    sameAs: [],
  };
}

export function generateDistrictStructuredData(district: {
  name: string;
  description: string;
  image?: string;
  id: string;
}) {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const basePath = typeof window !== 'undefined' ? import.meta.env.BASE_URL : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: district.name,
    description: district.description,
    image: district.image || `${siteUrl}${basePath}carousel/1.webp`,
    url: `${siteUrl}${basePath}district/${district.id}`,
  };
}

export function generateActivityStructuredData(activity: {
  name: string;
  description: string;
  category: string;
  image?: string;
  id: string;
  bestSeason?: string;
  skillLevel?: string;
  duration?: string;
}) {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const basePath = typeof window !== 'undefined' ? import.meta.env.BASE_URL : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: activity.name,
    description: activity.description,
    image: activity.image || `${siteUrl}${basePath}carousel/1.webp`,
    url: `${siteUrl}${basePath}activity/${activity.id}`,
    category: activity.category,
    ...(activity.bestSeason && { seasonalAvailability: activity.bestSeason }),
    ...(activity.skillLevel && { audience: { '@type': 'Audience', audienceType: activity.skillLevel } }),
    ...(activity.duration && { duration: activity.duration }),
  };
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
