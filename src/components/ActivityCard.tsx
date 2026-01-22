import { Link } from 'react-router-dom';
import type { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
  districtId?: string; // Optional district ID to show district-specific places
}

export default function ActivityCard({ activity, districtId }: ActivityCardProps) {
  const activityUrl = districtId 
    ? `/activity/${activity.id}?district=${districtId}`
    : `/activity/${activity.id}`;

  return (
    <Link
      to={activityUrl}
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
    >
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-ocean-400 to-nature-400">
        {activity.image ? (
          <img
            src={activity.image}
            alt={activity.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-4xl">
            🏝️
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-ocean-600 transition-colors">
            {activity.name}
          </h3>
          <span className="px-2 py-1 text-xs bg-ocean-100 text-ocean-700 rounded-full whitespace-nowrap ml-2">
            {activity.category}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{activity.description}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {activity.skillLevel && (
            <span>Level: {activity.skillLevel}</span>
          )}
          {activity.duration && (
            <span>Duration: {activity.duration}</span>
          )}
        </div>
      </div>
    </Link>
  );
}