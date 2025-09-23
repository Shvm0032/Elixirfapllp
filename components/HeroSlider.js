'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Generate 45 slides with variety
  const slides = Array.from({ length: 45 }, (_, index) => ({
    id: index + 1,
    image: `https://images.pexels.com/photos/${1000000 + index * 10000}/pexels-photo-${1000000 + index * 10000}.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop`,
    heading: `Innovation ${index + 1}`,
    subheading: `Discover Excellence`,
    description: `Experience the future with our cutting-edge solutions and innovative approach to modern challenges.`
  }));

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
              }}
            >
              <div className="h-full flex items-center justify-center text-center text-white">
                <div className="max-w-4xl mx-auto px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
                    {slide.heading}
                  </h1>
                  <h2 className="text-xl md:text-2xl mb-6 animate-fadeInUp animation-delay-200">
                    {slide.subheading}
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed animate-fadeInUp animation-delay-400">
                    {slide.description}
                  </p>
                  <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 animate-fadeInUp animation-delay-600">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.slice(0, 10).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide % 10 ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}