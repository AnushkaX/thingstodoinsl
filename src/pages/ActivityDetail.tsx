import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Clock, TrendingUp } from 'lucide-react';
import DistrictCard from '../components/DistrictCard';
import SEO from '../components/SEO';
import { activities, districts } from '../data';
import { generateActivityStructuredData, generateBreadcrumbStructuredData } from '../utils/seoData';
import { getAssetPath } from '../utils/paths';

export default function ActivityDetail() {
  const { id } = useParams<{ id: string }>();
  const activity = activities.find(a => a.id === id);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Activity Not Found</h1>
          <Link to="/" className="text-ocean-600 hover:text-ocean-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const activityDistricts = districts.filter(d => activity.districts.includes(d.id));
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <>
      <SEO
        title={`${activity.name} in Sri Lanka - ${activity.category} | Discover Sri Lanka`}
        description={activity.description}
        keywords={`${activity.name}, ${activity.category}, Sri Lanka, travel, tourism, ${activity.districts.length} locations`}
        image={activity.image || getAssetPath('carousel/1.webp')}
        url={`${siteUrl}/activity/${activity.id}`}
        structuredData={[
          generateActivityStructuredData(activity),
          generateBreadcrumbStructuredData([
            { name: 'Home', url: siteUrl },
            { name: 'Activities', url: `${siteUrl}/activities` },
            { name: activity.name, url: `${siteUrl}/activity/${activity.id}` },
          ]),
        ]}
      />
      <div className="min-h-screen pb-20 md:pb-0">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden bg-gradient-to-br from-ocean-600 to-nature-600">
        {activity.image ? (
          <img
            src={activity.image}
            alt={activity.name}
            className="w-full h-full object-cover opacity-80"
          />
        ) : null}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8 text-white">
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 mb-4 text-white/90 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Activities
            </Link>
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                {activity.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{activity.name}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Description */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">{activity.description}</p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {activity.bestSeason && (
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-ocean-600" />
                <h3 className="font-semibold text-gray-900">Best Season</h3>
              </div>
              <p className="text-gray-600">{activity.bestSeason}</p>
            </div>
          )}
          {activity.skillLevel && (
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-ocean-600" />
                <h3 className="font-semibold text-gray-900">Skill Level</h3>
              </div>
              <p className="text-gray-600">{activity.skillLevel}</p>
            </div>
          )}
          {activity.duration && (
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-ocean-600" />
                <h3 className="font-semibold text-gray-900">Duration</h3>
              </div>
              <p className="text-gray-600">{activity.duration}</p>
            </div>
          )}
        </div>

        {/* Best Districts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Best Places for {activity.name}
          </h2>
          {activityDistricts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activityDistricts.map((district) => (
                <DistrictCard key={district.id} district={district} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No districts listed for this activity.</p>
          )}
        </div>
      </div>
      </div>
    </>
  );
}