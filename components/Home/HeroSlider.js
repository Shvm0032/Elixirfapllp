"use client";

import Link from "next/link";

export default function FeatureSection() {
  const cards = [
    {
      title: "Ayurvedic & Herbal Products",
      button: "View >",
      bg: "bg-[#0AA0DD]",
      buttonBg: "bg-[#009136]",
      link: "/products?category=ayurvedic",
    },
    {
      title: "Medical Devices & Other Product",
      button: "View >",
      bg: "bg-[#009136]",
      buttonBg: "bg-[#0AA0DD]",
      link: "/products?category=medical-devices",
    },
    {
      title: "Surgical Products",
      button: "View >",
      bg: "bg-[#B3CB02]",
      buttonBg: "bg-[#009136]",
      link: "/products?category=surgical",
    },
    {
      title: "Test Cards & Test Strips",
      button: "View >",
      bg: "bg-[#009136]",
      buttonBg: "bg-[#0AA0DD]",
      link: "/products?category=test-card",
    },
  ];

  return (
    <section className="relative w-full">
      {/* Background Image Section */}
      <div className="relative w-full h-[70vh] md:h-[500px] flex flex-col justify-center items-center text-center px-4 md:px-8 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Assets/home-img/elixir-1.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Trusted Medical Solutions for a Healthier Tomorrow
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-4">
            Quality Medicines Delivered with Care and Reliability
          </h3>
          
        </div>
      </div>

      {/* Cards Section */}
      <div
        className="
          relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 
          mt-6 sm:mt-10 md:-mt-20  /* only overlap on medium+ screens */
        "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between items-center p-6 sm:p-5 md:p-6 rounded-lg text-center ${card.bg} hover:shadow-xl transition-all duration-300`}
            >
              <h4 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-4">
                {card.title}
              </h4>

              <Link href={card.link}>
                <button
                  className={`px-4 py-2 rounded-full text-white text-sm sm:text-base ${card.buttonBg} hover:scale-95 transition-transform duration-200`}
                >
                  {card.button}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
