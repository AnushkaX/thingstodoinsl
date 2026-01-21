import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import SEO from '../components/SEO';
import { districts, activities } from '../data';
import { generateDistrictStructuredData, generateBreadcrumbStructuredData } from '../utils/seoData';

export default function DistrictDetail() {
  const { id } = useParams<{ id: string }>();
  const district = districts.find(d => d.id === id);

  if (!district) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">District Not Found</h1>
          <Link to="/" className="text-ocean-600 hover:text-ocean-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const districtActivities = activities.filter(a => district.activities.includes(a.id));
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <>
      <SEO
        title={`${district.name} - Things to Do & Places to Visit | Discover Sri Lanka`}
        description={district.description}
        keywords={`${district.name}, Sri Lanka, travel, tourism, activities, places to visit, ${district.activities.length} activities`}
        image={district.image || '/carousel/1.webp'}
        url={`${siteUrl}/district/${district.id}`}
        structuredData={[
          generateDistrictStructuredData(district),
          generateBreadcrumbStructuredData([
            { name: 'Home', url: siteUrl },
            { name: 'Map', url: `${siteUrl}/map` },
            { name: district.name, url: `${siteUrl}/district/${district.id}` },
          ]),
        ]}
      />
      <div className="min-h-screen pb-20 md:pb-0">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden bg-gradient-to-br from-ocean-600 to-nature-600">
        {district.image ? (
          <img
            src={district.image}
            alt={district.name}
            className="w-full h-full object-cover opacity-80"
          />
        ) : null}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8 text-white">
            <Link
              to="/map"
              className="inline-flex items-center gap-2 mb-4 text-white/90 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Map
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center gap-3">
              <MapPin className="w-10 h-10" />
              {district.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Description */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">{district.description}</p>
        </div>

        {/* Places */}
        {district.places && district.places.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Places to Visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {district.places.map((place) => (
                <div
                  key={place.id}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{place.name}</h3>
                  <p className="text-sm text-gray-600">{place.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activities */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Activities in {district.name}</h2>
          {districtActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {districtActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No activities listed for this district.</p>
          )}
        </div>
      </div>
      </div>
    </>
  );
}