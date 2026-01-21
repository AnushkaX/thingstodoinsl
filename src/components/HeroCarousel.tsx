import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const slides = [
  {
    src: '/carousel/1.webp',
    alt: 'Golden beaches in Sri Lanka',
    title: 'Discover What You Can Do in Sri Lanka',
    subtitle:
      'From golden beaches to misty mountains, find unforgettable experiences across the island.',
  },
  {
    src: '/carousel/2.jpg',
    alt: 'Sri Lankan hill country',
    title: 'Chase Sunrises in the Hill Country',
    subtitle:
      'Ride the scenic train, hike lush trails, and sip world-famous Ceylon tea.',
  },
  {
    src: '/carousel/3.jpg',
    alt: 'Sri Lanka cultural heritage',
    title: 'Walk Through Ancient Kingdoms',
    subtitle:
      'Explore temples, rock fortresses, and UNESCO heritage sites full of history.',
  },
  {
    src: '/carousel/4.webp',
    alt: 'Wildlife safari in Sri Lanka',
    title: 'Go Wild on Safari',
    subtitle:
      'Spot elephants, leopards, and exotic birds in Sri Lanka’s national parks.',
  },
  {
    src: '/carousel/5.webp',
    alt: 'Sri Lanka coast and ocean',
    title: 'Relax by the Indian Ocean',
    subtitle:
      'Swim, snorkel, or simply unwind on serene beaches around the island.',
  },
  {
    src: '/carousel/6.jpg',
    alt: 'Sri Lanka coastline at sunset',
    title: 'Plan Your Perfect Getaway',
    subtitle:
      'Mix culture, nature, adventure, and food into one unforgettable trip.',
  },
];

interface HeroCarouselProps {
  className?: string;
}

export default function HeroCarousel({ className = '' }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[activeIndex];

  return (
    <section
      className={`relative h-[70vh] min-h-[500px] md:h-[80vh] flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {activeSlide.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow-md">
            {activeSlide.subtitle}
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 items-center justify-center backdrop-blur-sm"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 items-center justify-center backdrop-blur-sm"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full border border-white/70 transition-all ${
              index === activeIndex ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

