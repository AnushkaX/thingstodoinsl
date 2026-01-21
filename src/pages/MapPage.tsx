import { useNavigate } from 'react-router-dom';
import SriLankaMap from '../components/SriLankaMap';
import SEO from '../components/SEO';
import { districts } from '../data';
import type { District } from '../types';
import { MapPin } from 'lucide-react';

export default function MapPage() {
  const navigate = useNavigate();

  const handleDistrictClick = (district: District) => {
    navigate(`/district/${district.id}`);
  };

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <>
      <SEO
        title="Interactive Sri Lanka Map - Explore Districts & Activities"
        description="Explore Sri Lanka's districts on an interactive map. Click on any district to discover activities, places to visit, and plan your perfect Sri Lankan adventure."
        keywords="Sri Lanka map, districts, interactive map, travel guide, places to visit, Sri Lanka geography"
        image="/lk.svg"
        url={`${siteUrl}/map`}
      />
      <div className="min-h-screen pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <MapPin className="w-10 h-10 text-ocean-600" />
            Explore Sri Lanka Map
          </h1>
          <p className="text-gray-600">
            Click on any district to discover activities and places to visit
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-6" style={{ height: '70vh', minHeight: '500px' }}>
          <SriLankaMap 
            onDistrictClick={handleDistrictClick} 
            mapImageUrl="/lk.svg"
          />
        </div>

        {/* District List (Mobile-friendly alternative) */}
        <div className="md:hidden">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">All Districts</h2>
          <div className="grid grid-cols-1 gap-3">
            {districts.map((district) => (
              <button
                key={district.id}
                onClick={() => navigate(`/district/${district.id}`)}
                className="text-left bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{district.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-1">{district.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{district.activities.length} activities</p>
                  </div>
                  <MapPin className="w-5 h-5 text-ocean-600 flex-shrink-0 ml-2" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick District Links (Desktop) */}
        <div className="hidden md:block">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Districts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {districts.slice(0, 12).map((district) => (
              <button
                key={district.id}
                onClick={() => navigate(`/district/${district.id}`)}
                className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-all text-left group"
              >
                <h3 className="font-semibold text-sm text-gray-900 group-hover:text-ocean-600 transition-colors">
                  {district.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{district.activities.length} activities</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}