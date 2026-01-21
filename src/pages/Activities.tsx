import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ActivityCard from '../components/ActivityCard';
import SEO from '../components/SEO';
import { activities } from '../data';
import type { ActivityCategory } from '../types';

export default function Activities() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') as ActivityCategory | null;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActivities = useMemo(() => {
    let filtered = activities;

    if (selectedCategory) {
      filtered = filtered.filter(a => a.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        a =>
          a.name.toLowerCase().includes(query) ||
          a.description.toLowerCase().includes(query) ||
          a.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const categories = Array.from(new Set(activities.map(a => a.category))) as ActivityCategory[];
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const categoryTitle = selectedCategory ? `${selectedCategory} Activities` : 'All Activities';
  const categoryDescription = selectedCategory
    ? `Discover ${selectedCategory.toLowerCase()} activities in Sri Lanka. Find the best places and experiences for ${selectedCategory.toLowerCase()} enthusiasts.`
    : 'Explore all activities and things to do in Sri Lanka. From beaches to hiking, wildlife to culture, find your perfect adventure.';

  return (
    <>
      <SEO
        title={`${categoryTitle} in Sri Lanka | Discover Sri Lanka`}
        description={categoryDescription}
        keywords={`${selectedCategory || 'activities'}, Sri Lanka, travel, tourism, things to do, ${activities.length} activities`}
        image="/carousel/1.webp"
        url={`${siteUrl}/activities${selectedCategory ? `?category=${selectedCategory}` : ''}`}
      />
      <div className="min-h-screen pb-20 md:pb-0 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Activities</h1>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-ocean-500 focus:outline-none"
          />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSearchParams({})}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedCategory
                  ? 'bg-ocean-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchParams({ category })}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-ocean-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div>
          {filteredActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No activities found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}