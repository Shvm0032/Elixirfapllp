'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowBigRight } from 'lucide-react';
import Divider from '../Divider';

export default function ProductsCarousel() {
  const products = [
    { id: 1, name: 'Allopathic drug', image: '/Assets/product-img/Allopathic.jpeg', description: 'Effective modern medicines providing fast relief and trusted healthcare solutions.' },
    { id: 2, name: 'Cosmetics', image: '/Assets/product-img/Cosmetics.jpeg', description: 'Enhancing beauty with safe, dermatologically tested cosmetic healthcare products.' },
    { id: 3, name: 'Food Supplements', image: '/Assets/product-img/Food.jpeg', description: 'Nutrient-rich supplements supporting health, vitality, and overall well-being naturally.' },
    { id: 4, name: 'Surgical Items', image: '/Assets/product-img/surgical.jpeg', description: 'High-quality surgical instruments ensuring precision, safety, and reliable performance.' },
    { id: 5, name: 'Nutraceuticals', image: '/Assets/product-img/nutra.jpeg', description: 'Science-backed nutraceuticals promoting health, immunity, and overall well-being naturally.' },
    { id: 6, name: 'Veterinary', image: '/Assets/product-img/veterinary.jpeg', description: 'Trusted veterinary solutions ensuring health, care, and well-being for animals.' },
    { id: 7, name: 'Medical Devices', image: '/Assets/product-img/medical-devices.jpeg', description: 'Advanced medical devices designed for accurate diagnosis and effective patient care.' },
    { id: 8, name: 'Herbal Products', image: '/Assets/product-img/herbal-products.jpeg', description: 'Natural herbal products promoting wellness, immunity, and holistic health care.' },
    { id: 9, name: 'APIs', image: '/Assets/product-img/Apis.jpeg', description: 'High-quality APIs ensuring purity, efficacy, and consistency for medicine production.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setVisibleCount(1);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % products.length);

  // Get visible products with wrapping
  const getVisibleProducts = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % products.length;
      result.push(products[index]);
    }
    return result;
  };

  return (
    <section id="products" className="py-20 bg-[#EDF4FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Products</h2>
          <Divider />
        </div>

        <div className="relative">
          <div className="flex gap-8 transition-transform duration-500">
            {getVisibleProducts().map(product => (
              <div key={product.id} className="flex-shrink-0 w-full md:w-[32%] bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="bg-[#009136] hover:bg-[#B3CB02] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-transform duration-200 hover:scale-95">
                    <span>View More</span> <ArrowBigRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all duration-300">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all duration-300">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#009136]' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
