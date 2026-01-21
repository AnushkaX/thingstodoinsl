import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { activities, districts } from '../data';
import type { SearchResult } from '../types';

interface SearchBarProps {
  className?: string;
  onResultSelect?: () => void;
}

export default function SearchBar({ className = '', onResultSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    
    if (value.trim().length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const searchLower = value.toLowerCase().trim();
    const searchResults: SearchResult[] = [];

    // Search activities
    activities.forEach(activity => {
      if (
        activity.name.toLowerCase().includes(searchLower) ||
        activity.description.toLowerCase().includes(searchLower) ||
        activity.category.toLowerCase().includes(searchLower)
      ) {
        searchResults.push({
          type: 'activity',
          id: activity.id,
          name: activity.name,
          description: activity.description,
          category: activity.category
        });
      }
    });

    // Search districts
    districts.forEach(district => {
      if (
        district.name.toLowerCase().includes(searchLower) ||
        district.description.toLowerCase().includes(searchLower)
      ) {
        searchResults.push({
          type: 'district',
          id: district.id,
          name: district.name,
          description: district.description
        });
      }
    });

    // Search places within districts
    districts.forEach(district => {
      district.places?.forEach(place => {
        if (
          place.name.toLowerCase().includes(searchLower) ||
          place.description.toLowerCase().includes(searchLower)
        ) {
          searchResults.push({
            type: 'place',
            id: `${district.id}-${place.id}`,
            name: `${place.name}, ${district.name}`,
            description: place.description
          });
        }
      });
    });

    setResults(searchResults.slice(0, 8));
    setShowResults(searchResults.length > 0);
  };

  const handleSelect = (result: SearchResult) => {
    if (result.type === 'activity') {
      navigate(`/activity/${result.id}`);
    } else if (result.type === 'district') {
      navigate(`/district/${result.id}`);
    } else {
      const [districtId] = result.id.split('-');
      navigate(`/district/${districtId}`);
    }
    
    setQuery('');
    setShowResults(false);
    onResultSelect?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      handleSelect(results[0]);
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => query.length >= 2 && setShowResults(true)}
            placeholder="Search places, activities..."
            className="w-full pl-12 pr-12 py-4 rounded-full border-2 border-gray-200 focus:border-ocean-500 focus:outline-none text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md transition-shadow"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setResults([]);
                setShowResults(false);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </form>

      {showResults && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto">
          {results.map((result) => (
            <button
              key={result.id}
              onClick={() => handleSelect(result)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="font-semibold text-gray-900">{result.name}</div>
              <div className="text-sm text-gray-600 mt-1 line-clamp-1">{result.description}</div>
              {result.category && (
                <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-ocean-100 text-ocean-700 rounded">
                  {result.category}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}