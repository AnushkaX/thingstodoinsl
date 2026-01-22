import { useState } from 'react';
import SEO from '../components/SEO';
import DistrictCard from '../components/DistrictCard';
import { districts } from '../data';
import { MapPin, Search, Grid3x3, List } from 'lucide-react';
import { getAssetPath } from '../utils/paths';

export default function MapPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';

  // Filter districts based on search query
  const filteredDistricts = districts.filter((district) =>
    district.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    district.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Explore Sri Lanka Districts - Discover Activities & Places"
        description="Explore all districts of Sri Lanka. Discover activities, places to visit, and plan your perfect Sri Lankan adventure across beautiful destinations."
        keywords="Sri Lanka districts, travel guide, places to visit, activities, Sri Lanka tourism, districts"
        image={getAssetPath('lk.svg')}
        url={`${siteUrl}/map`}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <MapPin className="w-10 h-10 md:w-12 md:h-12 text-ocean-600" />
                  Explore Districts
                </h1>
                <p className="text-gray-600 text-lg">
                  Discover {districts.length} amazing districts across Sri Lanka
                </p>
              </div>
            </div>

            {/* Search and View Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search districts by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg border transition-all ${
                    viewMode === 'grid'
                      ? 'bg-ocean-600 text-white border-ocean-600'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-ocean-300'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg border transition-all ${
                    viewMode === 'list'
                      ? 'bg-ocean-600 text-white border-ocean-600'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-ocean-300'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results count */}
            {searchQuery && (
              <p className="mt-4 text-gray-600">
                Found <span className="font-semibold text-ocean-600">{filteredDistricts.length}</span> district{filteredDistricts.length !== 1 ? 's' : ''}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            )}
          </div>

          {/* Districts Grid/List */}
          {filteredDistricts.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'grid grid-cols-1 gap-4'
              }
            >
              {filteredDistricts.map((district) => (
                <DistrictCard key={district.id} district={district} viewMode={viewMode} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No districts found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or{' '}
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-ocean-600 hover:text-ocean-700 font-medium underline"
                >
                  clear the search
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}