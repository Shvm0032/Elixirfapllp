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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-2 ">
              About Us
            </h2>
            <div className="flex items-center  my-2 ">
              {/* Left line */}
              <div className="w-[55px] h-[2px] bg-gray-600"></div>

              {/* Logo */}
              <div className="mx-4">
                <Image
                  src="/Assets/logos/elixir-logo-main.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>

              {/* Right line */}
              <div className="w-[55px] h-[2px] bg-gray-600"></div>
            </div>
            <p className="text-lg text-gray-600 mb-3 leading-relaxed">
              Elixir Far LLP is Engaged in a Business of Manufacturing, Marketing, and Exporting of high-quality Medicines, Nutraceuticals, Herbal products, Cosmetics, Ayurvedic formulations, Surgical Items, Food Supplements, Veterinary and Pharma APIs.
            </p>
            

            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-[#009136]  text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Read More About Us
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/Assets/home-img/elixirfarllp-2.jpg"
                alt="About Us"
                className="rounded-lg shadow-lg w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#B3CB02] text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
