import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { districts } from '../data';
import type { District } from '../types';
import { getDistrictPosition } from '../utils/mapCoordinates';

interface MapProps {
  onDistrictClick?: (district: District) => void;
  mapImageUrl?: string; // Optional: custom map image URL
}

export default function SriLankaMap({ onDistrictClick, mapImageUrl }: MapProps) {
  const navigate = useNavigate();
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(true); // SVG loads immediately

  // Map SVG from public folder
  const defaultMapImage = mapImageUrl || '/lk.svg';

  const handleDistrictClick = (district: District) => {
    if (onDistrictClick) {
      onDistrictClick(district);
    } else {
      navigate(`/district/${district.id}`);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // District positions are now loaded from mapdata.js coordinates via getDistrictPosition

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 rounded-lg overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Map Image Background */}
      <div className="absolute inset-0 bg-white">
        <img
          src={defaultMapImage}
          alt="Sri Lanka Map"
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            console.error('Failed to load map image:', defaultMapImage);
            setImageLoaded(true);
          }}
        />
        
        {/* Fallback if image doesn't load */}
        {!imageLoaded && (
          <div className="w-full h-full flex items-center justify-center bg-blue-50">
            <div className="text-center text-gray-400">
              <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <p className="text-sm">Loading map...</p>
            </div>
          </div>
        )}
      </div>

      {/* Clickable Markers Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ pointerEvents: 'none' }}
      >
        {/* District markers with accurate positioning from mapdata.js */}
        {districts.map((district) => {
          const pos = getDistrictPosition(district.id);
          if (!pos) return null;

          const isHovered = hoveredDistrict === district.id;

          return (
            <g key={district.id} style={{ pointerEvents: 'auto' }}>
              {/* Clickable area - larger invisible circle for better UX */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r="5"
                fill="transparent"
                className="cursor-pointer"
                onClick={() => handleDistrictClick(district)}
                onMouseEnter={() => setHoveredDistrict(district.id)}
                onMouseLeave={() => setHoveredDistrict(null)}
                style={{ pointerEvents: 'auto' }}
              />
              
              {/* District marker pin */}
              <g
                className="cursor-pointer transition-transform duration-200"
                style={{ 
                  transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                  transformOrigin: `${pos.x}% ${pos.y}%`,
                  pointerEvents: 'auto'
                }}
                onClick={() => handleDistrictClick(district)}
                onMouseEnter={() => setHoveredDistrict(district.id)}
                onMouseLeave={() => setHoveredDistrict(null)}
              >
                {/* Animated pulse effect on hover */}
                {isHovered && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="4"
                    fill="#0ea5e9"
                    opacity="0.3"
                    className="animate-ping"
                  />
                )}
                
                {/* Pin shadow */}
                <ellipse
                  cx={pos.x}
                  cy={pos.y + 0.8}
                  rx="2"
                  ry="0.8"
                  fill="rgba(0,0,0,0.2)"
                  opacity="0.4"
                />
                
                {/* Outer pin circle */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isHovered ? 2.5 : 2}
                  fill={isHovered ? '#0284c7' : '#0ea5e9'}
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  className="transition-all duration-200"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                />
                
                {/* Pin inner dot */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="1"
                  fill="#ffffff"
                />
              </g>
              
              {/* District label */}
              <text
                x={pos.x}
                y={pos.y - 5}
                fontSize={isHovered ? "2.5" : "2"}
                fill={isHovered ? '#0284c7' : '#0369a1'}
                fontWeight={isHovered ? 'bold' : '600'}
                textAnchor="middle"
                dominantBaseline="middle"
                pointerEvents="none"
                className="select-none transition-all duration-200"
                style={{ 
                  textShadow: '0 2px 4px rgba(255,255,255,0.9), 0 0 6px rgba(255,255,255,0.7)',
                  pointerEvents: 'none'
                }}
              >
                {district.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip on hover */}
      {hoveredDistrict && (
        <div
          className="absolute z-50 bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-lg pointer-events-none transition-opacity duration-200"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y - 35}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <div className="text-sm font-semibold whitespace-nowrap">
            {districts.find(d => d.id === hoveredDistrict)?.name}
          </div>
          {/* Tooltip arrow */}
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2"
            style={{
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid #0284c7',
            }}
          />
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200 z-40">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-blue-600">Click on a district</span> to explore activities and places
        </p>
      </div>
    </div>
  );
}