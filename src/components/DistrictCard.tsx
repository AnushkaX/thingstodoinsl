import { Link } from 'react-router-dom';
import type { District } from '../types';
import { MapPin } from 'lucide-react';

interface DistrictCardProps {
  district: District;
}

export default function DistrictCard({ district }: DistrictCardProps) {
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
          <span>{district.activities.length} activities</span>
        </div>
      </div>
    </Link>
  );
}