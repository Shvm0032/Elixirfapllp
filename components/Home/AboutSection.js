"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const features = [
    "Pharmaceutical Medicines",
    "Nutraceuticals & Food Supplements",
    "Herbal Products & Ayurvedic Formulations",
    "Cosmetics & Personal Care",
    "Surgical Items & Medical Equipment",
    "Veterinary Medicines",
    "Pharma APIs (Active Pharmaceutical Ingredients)",
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* ✅ Text Content (mobile pe upar, desktop pe left) */}
          <div className="order-1 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              About Us
            </h2>

            {/* Divider with Logo */}
            <div className="flex items-center justify-center lg:justify-start my-4">
              <div className="w-[45px] sm:w-[55px] h-[2px] bg-gray-600"></div>
              <div className="mx-3 sm:mx-4">
                <Image
                  src="/Assets/logos/elixir-logo-main.png"
                  alt="Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="w-[45px] sm:w-[55px] h-[2px] bg-gray-600"></div>
            </div>

            <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed text-justify sm:text-left">
              Elixir Far LLP is engaged in the business of manufacturing,
              marketing, and exporting high-quality Medicines, Nutraceuticals,
              Herbal products, Cosmetics, Ayurvedic formulations, Surgical Items,
              Food Supplements, Veterinary, and Pharma APIs.
            </p>

            {/* Features List */}
            <div className="space-y-2 sm:space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start sm:items-center">
                  <CheckCircle
                    className="text-green-500 mr-3 mt-1 sm:mt-0 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 text-sm sm:text-base font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="mt-8 bg-[#009136] hover:bg-[#007d2c] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300">
              Read More About Us
            </button>
          </div>

          {/* ✅ Image Section (mobile pe neeche, desktop pe right) */}
          <div className="order-2 lg:order-2">
            <div className="relative w-full max-w-[600px] mx-auto">
              <Image
                src="/Assets/home-img/elixirfarllp-2.jpg"
                alt="About Us"
                width={600}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 bg-[#B3CB02] text-white p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">15+</div>
                  <div className="text-xs sm:text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
