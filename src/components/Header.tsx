import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Header() {

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <MapPin className="w-8 h-8 text-ocean-600 group-hover:text-ocean-700 transition-colors" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Discover Sri Lanka</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Things to Do & Places to Visit</p>
            </div>
          </Link>
          
          <div className="flex-1 max-w-2xl">
            <SearchBar />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-ocean-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/map"
              className="text-gray-700 hover:text-ocean-600 font-medium transition-colors"
            >
              Map
            </Link>
            <Link
              to="/activities"
              className="text-gray-700 hover:text-ocean-600 font-medium transition-colors"
            >
              Activities
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}