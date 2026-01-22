import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft, BookOpen, Users, X, User, Mail, Phone } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import SEO from '../components/SEO';
import { districts, activities } from '../data';
import { generateDistrictStructuredData, generateBreadcrumbStructuredData } from '../utils/seoData';
import { getAssetPath } from '../utils/paths';
import type { Place } from '../types';

export default function DistrictDetail() {
  const { id } = useParams<{ id: string }>();
  const district = districts.find(d => d.id === id);
  
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
        title={`${district.name} - Things to Do & Places to Visit | Discover Sri Lanka`}
        description={district.description}
        keywords={`${district.name}, Sri Lanka, travel, tourism, activities, places to visit, ${district.activities.length} activities`}
        image={district.image || getAssetPath('carousel/1.webp')}
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
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow flex flex-col"
                >
                  {place.image && (
                    <div className="aspect-video overflow-hidden rounded-lg mb-3">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="font-semibold text-gray-900 mb-2">{place.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{place.description}</p>
                  <button
                    onClick={() => {
                      setSelectedPlace(place);
                      setShowBooking(true);
                    }}
                    className="w-full bg-ocean-600 text-white py-2 px-4 rounded-lg hover:bg-ocean-700 transition-colors flex items-center justify-center gap-2 mt-auto"
                  >
                    <BookOpen className="w-4 h-4" />
                    Book Now
                  </button>
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
                <ActivityCard key={activity.id} activity={activity} districtId={district.id} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No activities listed for this district.</p>
          )}
        </div>
      </div>

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
                <p className="text-sm text-gray-500">Location: {district.name}</p>
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
    </>
  );
}