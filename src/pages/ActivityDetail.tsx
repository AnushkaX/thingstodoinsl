import { useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Clock, TrendingUp, Users, BookOpen, X, User, Mail, Phone } from 'lucide-react';
import DistrictCard from '../components/DistrictCard';
import SEO from '../components/SEO';
import { activities, districts } from '../data';
import { generateActivityStructuredData, generateBreadcrumbStructuredData } from '../utils/seoData';
import { getAssetPath } from '../utils/paths';
import type { Place } from '../types';

export default function ActivityDetail() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const districtId = searchParams.get('district');
  
  const activity = activities.find(a => a.id === id);
  const district = districtId ? districts.find(d => d.id === districtId) : null;

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

  // Get places for this activity in the specific district
  const getDistrictPlaces = (): Place[] => {
    if (!district || !activity.places) return [];
    
    // Filter places that belong to this district and are in the activity's places list
    const districtPlaceIds = district.places?.map(p => p.id) || [];
    const activityPlaceIds = activity.places || [];
    
    return district.places?.filter(place => 
      activityPlaceIds.includes(place.id)
    ) || [];
  };

  const districtPlaces = getDistrictPlaces();
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to a backend
    alert(`Booking request for ${selectedPlace?.name}:\nCheck-in: ${bookingData.checkIn}\nCheck-out: ${bookingData.checkOut}\nGuests: ${bookingData.guests}\nName: ${bookingData.name}\nEmail: ${bookingData.email}\nPhone: ${bookingData.phone}`);
    setShowBooking(false);
    setSelectedPlace(null);
    setBookingData({ checkIn: '', checkOut: '', guests: 1, name: '', email: '', phone: '' });
  };

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
            {district ? (
              <Link
                to={`/district/${district.id}`}
                className="inline-flex items-center gap-2 mb-4 text-white/90 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to {district.name}
              </Link>
            ) : (
              <Link
                to="/activities"
                className="inline-flex items-center gap-2 mb-4 text-white/90 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Activities
              </Link>
            )}
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

        {/* District-specific places or all districts */}
        {district && districtPlaces.length > 0 ? (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Places for {activity.name} in {district.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {districtPlaces.map((place) => (
                <div
                  key={place.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {place.image && (
                    <div className="aspect-video overflow-hidden flex-shrink-0">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-3 flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{place.name}</h3>
                    <p className="text-xs text-gray-600 mb-3 flex-1 line-clamp-2">{place.description}</p>
                    <button
                      onClick={() => {
                        setSelectedPlace(place);
                        setShowBooking(true);
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-md transition-colors flex items-center justify-center gap-2"
                      type="button"
                      style={{ backgroundColor: '#2563eb' }}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : district && districtPlaces.length === 0 ? (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Places for {activity.name} in {district.name}
            </h2>
            <p className="text-gray-600">No specific places listed for this activity in {district.name}.</p>
          </div>
        ) : (
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
        )}

        {/* Booking Modal */}
        {showBooking && selectedPlace && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Book {selectedPlace.name}</h3>
                  <button
                    onClick={() => {
                      setShowBooking(false);
                      setSelectedPlace(null);
                      setBookingData({ checkIn: '', checkOut: '', guests: 1, name: '', email: '', phone: '' });
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">{selectedPlace.description}</p>
                  <p className="text-sm text-gray-500">Activity: {activity.name}</p>
                  <p className="text-sm text-gray-500">Location: {district?.name}</p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      required
                      min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of People
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="number"
                        id="guests"
                        required
                        min="1"
                        max="20"
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({ ...bookingData, guests: parseInt(e.target.value) || 1 })}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact Details</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            id="name"
                            required
                            value={bookingData.name}
                            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                            placeholder="Enter your full name"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            id="email"
                            required
                            value={bookingData.email}
                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                            placeholder="your.email@example.com"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="tel"
                            id="phone"
                            required
                            value={bookingData.phone}
                            onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                            placeholder="+94 XX XXX XXXX"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowBooking(false);
                        setSelectedPlace(null);
                        setBookingData({ checkIn: '', checkOut: '', guests: 1, name: '', email: '', phone: '' });
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                    >
                      <BookOpen className="w-4 h-4" />
                      Place Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
}