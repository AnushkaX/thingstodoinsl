import { Link } from 'react-router-dom';
import type { District } from '../types';
import { MapPin, Activity } from 'lucide-react';

interface DistrictCardProps {
  district: District;
  viewMode?: 'grid' | 'list';
}

export default function DistrictCard({ district, viewMode = 'grid' }: DistrictCardProps) {
  if (viewMode === 'list') {
    return (
      <Link
        to={`/district/${district.id}`}
        className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-48 h-48 sm:h-auto overflow-hidden bg-gradient-to-br from-ocean-400 to-nature-400 flex-shrink-0">
            {district.image ? (
              <img
                src={district.image}
                alt={district.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-4xl">
                🗺️
              </div>
            )}
          </div>
          <div className="p-6 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-ocean-600 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-ocean-600 transition-colors">
                {district.name}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">{district.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Activity className="w-4 h-4 text-ocean-600" />
                <span className="font-medium">{district.activities.length} activities</span>
              </div>
              {district.places && district.places.length > 0 && (
                <span>{district.places.length} places to visit</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/district/${district.id}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-ocean-400 to-nature-400">
        {district.image ? (
          <img
            src={district.image}
            alt={district.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl">
            🗺️
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-ocean-600" />
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-ocean-600 transition-colors">
            {district.name}
          </h3>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{district.description}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Activity className="w-4 h-4 text-ocean-600" />
          <span>{district.activities.length} activities</span>
        </div>
      </div>
    </Link>
  );
}