import { Link } from 'react-router-dom';
import { Compass, Waves, Mountain, Camera, Utensils, Heart, TreePine } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import ActivityCard from '../components/ActivityCard';
import DistrictCard from '../components/DistrictCard';
import SEO from '../components/SEO';
import { activities, districts } from '../data';
import type { ActivityCategory } from '../types';
import { defaultSEO, generateWebsiteStructuredData } from '../utils/seoData';

const categoryIcons: Record<ActivityCategory, any> = {
  'Beach': Waves,
  'Hiking': Mountain,
  'Wildlife': TreePine,
  'Culture': Camera,
  'Adventure': Compass,
  'Food': Utensils,
  'Wellness': Heart,
  'Water Sports': Waves,
  'Nature': TreePine,
  'Historical': Camera,
};

const categories: ActivityCategory[] = [
  'Beach',
  'Hiking',
  'Wildlife',
  'Culture',
  'Adventure',
  'Food',
  'Wellness',
];

const popularDistricts = districts.slice(0, 6);
const topActivities = activities.slice(0, 6);

export default function Home() {
  return (
    <>
      <SEO
        title={defaultSEO.title}
        description={defaultSEO.description}
        keywords={defaultSEO.keywords}
        image={defaultSEO.image}
        structuredData={generateWebsiteStructuredData()}
      />
      <div className="min-h-screen pb-20 md:pb-0">
        {/* Hero Carousel */}
        <HeroCarousel />

      {/* Quick Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => {
              const Icon = categoryIcons[category] || Compass;
              return (
                <Link
                  key={category}
                  to={`/activities?category=${encodeURIComponent(category)}`}
                  className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-ocean-50 to-nature-50 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-ocean-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700 text-center">{category}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Things To Do */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Top Things To Do</h2>
            <Link
              to="/activities"
              className="text-ocean-600 hover:text-ocean-700 font-semibold transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Districts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Popular Districts</h2>
            <Link
              to="/map"
              className="text-ocean-600 hover:text-ocean-700 font-semibold transition-colors"
            >
              View Map →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDistricts.map((district) => (
              <DistrictCard key={district.id} district={district} />
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}