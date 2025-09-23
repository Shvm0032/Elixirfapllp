'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowBigRight} from 'lucide-react';
import Divider from '../Divider';

export default function ProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Allopathic drug',
      image: '/Assets/product-img/Allopathic.jpeg',
      // price: '$299',
      description: 'Effective modern medicines providing fast relief and trusted healthcare solutions.'
    },
    {
      id: 2,
      name: 'Cosmetics',
      image: '/Assets/product-img/Cosmetics.jpeg',
      // price: '$499',
      description: 'Enhancing beauty with safe, dermatologically tested cosmetic healthcare products.'
    },
    {
      id: 3,
      name: 'Food Supplements',
      image: '/Assets/product-img/Food.jpeg',
      // price: '$399',
      description: 'Nutrient-rich supplements supporting health, vitality, and overall well-being naturally.'
    },
    {
      id: 4,
      name: 'Surgical Items',
      image: '/Assets/product-img/surgical.jpeg',
      // price: '$799',
      description: 'High-quality surgical instruments ensuring precision, safety, and reliable performance.'
    },
    {
      id: 5,
      name: 'Nutraceuticals',
      image: '/Assets/product-img/nutra.jpeg',
      // price: '$199',
      description: 'Science-backed nutraceuticals promoting health, immunity, and overall well-being naturally.'
    },
    {
      id: 6,
      name: 'Veterinary',
      image: '/Assets/product-img/veterinary.jpeg',
      // price: '$599',
      description: 'Trusted veterinary solutions ensuring health, care, and well-being for animals.'
    },
    {
      id: 7,
      name: 'Medical Devices',
      image: '/Assets/product-img/medical-devices.jpeg',
      // price: '$599',
      description: 'Advanced medical devices designed for accurate diagnosis and effective patient care.'
    },
    {
      id: 8,
      name: 'Herbal Products',
      image: '/Assets/product-img/herbal-products.jpeg',
      // price: '$599',
      description: 'Natural herbal products promoting wellness, immunity, and holistic health care.'
    },
    {
      id: 9,
      name: 'APIs',
      image: '/Assets/product-img/Apis.jpeg',
      // price: '$599',
      description: 'High-quality APIs ensuring purity, efficacy, and consistency for medicine production.'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getVisibleProducts = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : 1;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % products.length;
      result.push(products[index]);
    }
    return result;
  };

  return (
    <section id="products" className="py-20 bg-[#EDF4FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Products
          </h2>
          <Divider/>
          
        </div>

        <div className="relative">
          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.slice(currentIndex, currentIndex + (window.innerWidth >= 1024 ? 3 : 1)).concat(
              products.slice(0, Math.max(0, (currentIndex + (window.innerWidth >= 1024 ? 3 : 1)) - products.length))
            ).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </span> */}
                    <button className="bg-[#009136] hover:bg-[#B3CB02] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-300">
                     
                      <span>View More</span>
                       <ArrowBigRight  size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl text-gray-700 p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#009136]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}